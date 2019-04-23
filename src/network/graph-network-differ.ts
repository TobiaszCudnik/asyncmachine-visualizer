import * as assert from 'assert/'
import {
  GraphNetwork,
  GraphNode,
  LinkNode,
  MachineNode,
  StateNode
} from './graph-network'
import { Delta, DiffPatcher } from 'jsondiffpatch'
import * as EventEmitter from 'eventemitter3'
import { difference } from 'lodash'

const DIFF_CACHE = true

// TODO specify the fields
export interface IGraphJSON {
  // nodes: {
  //   // TODO define the exported type in graph-network.ts
  //   [id: string]: Exclude<MachineNode | StateNode, 'machine_node' | 'machine'>
  // }
  // links: { [id: string]: LinkNode[] }
}

let caches = 0
let misses = 0

/**
 * TODO make it a stream
 */
export class GraphNetworkDiffer extends EventEmitter {
  network: GraphNetwork
  diffpatcher: DiffPatcher
  previous_json: IGraphJSON

  constructor(network: GraphNetwork) {
    super()
    assert(network)
    this.network = network
    this.diffpatcher = new DiffPatcher({
      objectHash: this.objectHash()
    })
  }

  /**
   * Hash every array element by ID.
   */
  objectHash(): (node: GraphNode) => any {
    return function(node) {
      return node.id
    }
  }

  last_cache_id = 1
  last_ids = { nodes: [], links: [] }

  /**
   * Generates a json represention of the graph, ready for diffing.
   *
   * TODO narrow down Partial to fields only
   */
  generateGraphJSON(): IGraphJSON {
    const graph = this.network.graph
    const ret = {}

    // clone nodes
    for (const key of Object.keys(graph._nodes)) {
      ret[key] = graph._nodes[key].export()
    }
    // clone _edgeLabels
    for (const key of Object.keys(graph._edgeLabels)) {
      ret[key] = graph._edgeLabels[key].export()
    }

    this.previous_json = ret
    return this.previous_json
  }

  /**
   * Generates a json representation of the graph, ready for diffing.
   *
   * TODO skip the caches and rebuild them on import
   * TODO move to the graph class
   */
  generateGraphDiff(): [[number, string][], number[], string] {
    const graph = this.network.graph

    // reset last IDs
    const last_ids = this.last_ids
    this.last_ids = { nodes: [], links: [] }

    // start the json
    let json = '{"nodes":'

    // store the cache changes
    const to_delete: string[] = []
    const to_save = []

    // clone nodes
    const [json_nodes, ids_nodes] = this.processList(
      to_save,
      to_delete,
      graph._nodes,
      last_ids.nodes
    )
    json += json_nodes
    // store last ids
    this.last_ids.nodes = ids_nodes

    // clone links (_edgeLabels)
    json += `, "links": `
    const [json_links, ids_links] = this.processList(
      to_save,
      to_delete,
      graph._edgeLabels,
      last_ids.links
    )
    json += json_links
    // store last ids
    this.last_ids.links = ids_links

    // end json
    json += '}'

    // ----- DEBUG

    if (misses && misses % 1000 === 0) {
      // console.log('misses', caches, misses)
    }

    if (caches && caches % 1000 === 0) {
      // console.log('caches', caches, misses)
    }
    // if (json.length > 1000) {
    //   console.dir(json)
    //   process.exit()
    // }
    // try {
    //   JSON.parse(json)
    // } catch (e) {
    //   console.error('parse error', e)
    //   console.log(json)
    //   process.exit()
    // }

    // @ts-ignore
    return [to_save, to_delete, json]
  }

  processList(
    to_save: [number | null, string][],
    to_delete,
    source: {},
    prev_cache_indexes: string[]
  ): [string, number[]] {
    let first = true
    let json = '{"add": ['
    const to_add = []
    const cache_indexes = []
    for (const id of Object.keys(source)) {
      const graph_node = source[id]
      const cache_index = graph_node.cache
        ? graph_node.cache_version
        : this.last_cache_id
      cache_indexes.push(cache_index)

      // check if was in prev cache list
      if (prev_cache_indexes.includes(cache_index)) {
        caches++
        continue
      }

      // store the cache
      graph_node.cache = true
      const node_cache = graph_node.export()
      // if (!Object.keys(node_cache).length) {
      //   console.log('node skipped')
      //   continue
      // }

      to_add.push(cache_index)
      const node_cache_json = JSON.stringify(node_cache)
      // console.log(
      //   'node_cache_json.length',
      //   node_cache_json.length,
      //   node_cache_json
      // )
      to_save.push([
        cache_index,
        '[' + graph_node.cache_version + ', ' + node_cache_json + ']'
      ])
      if (DIFF_CACHE) {
        graph_node.prev_cache = true
      }
      to_delete.push(graph_node.cache_version)
      graph_node.cache_version = this.last_cache_id

      // inc
      misses++
      this.last_cache_id++
      first = false
    }

    json += writeRanges(to_add)

    const to_remove = difference(prev_cache_indexes, cache_indexes)
    to_delete.push(...to_remove)

    json += `], "remove": [${writeRanges(to_remove)}]}`

    return [json, cache_indexes]
  }

  generateGraphPatch(base_json?: IGraphJSON): Delta {
    base_json = base_json || this.previous_json

    assert(base_json, 'Base JSON required to create a diff')

    this.generateGraphJSON()

    // generate the diff
    return this.diffpatcher.diff(base_json, this.previous_json)
  }
}

function writeRanges(list: number[]) {
  let json = ''
  if (!list.length) {
    return json
  }
  let first = true
  let range_start = 0
  let last_id = 0
  for (const id of list) {
    if (first) {
      // start the range
      range_start = id
    } else {
      // try to end the range
      if (last_id + 1 !== id) {
        // write
        json += json ? ',' : ''
        if (range_start - last_id === 0) {
          json += `${last_id}`
        } else {
          json += `"${range_start}-${last_id}"`
        }
        range_start = id
      }
    }
    last_id = id
    first = false
  }
  // write
  json += json ? ',' : ''
  if (last_id - range_start === 0) {
    json += `${last_id}`
  } else if (last_id - range_start === 1) {
    json += `${range_start}, ${last_id}`
  } else {
    json += `"${range_start}-${last_id}"`
  }

  return json
}

export enum OBJECT_TYPE {
  MACHINE,
  STATE,
  LINK
}
