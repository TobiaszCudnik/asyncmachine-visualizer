import 'source-map-support/register'
import AsyncMachine, { machine } from 'asyncmachine'
import { expect } from 'chai'
import * as assert from 'assert'
// import GraphJson, {
//     JsonDiffFactory
// } from '../../src/ui/cola-network'
import * as fs from 'fs'
import MachineNetwork from '../../src/network/machine-network'
import { GraphNetworkDiffer } from '../../src/network/graph-network-differ'

// describe("Single machine graph", function() {

//   beforeEach( function() {
//     machine = new factory(['A', 'B', 'C', 'D'])
//     machine.A = {requires: ['B']}
//     machine.C = {blocks: ['B']}
//     machine.D = {requires: ['C']}

//     this.stateGraph = new Network
//     this.stateGraph.addMachine(machine)
//   })

//   it('should get all states as nodes', function() {
//     expect(this.stateGraph.graph.nodes().length).to.be.eql(5)
//   })

//   it('should get all relations as edges', function() {
//     var nodes = this.stateGraph.nodes
//     let edges = _.map(this.stateGraph.graph.edges(), edge => {
//       return `${nodes[edge.v].name} ${nodes[edge.w].name}`
//     })
//     expect(edges).to.eql([
//       'A B',
//       'C B',
//       'D C'
//     ])
//   })
// })

describe('Network', function() {
  let machine_network: MachineNetwork
  let machine1: AsyncMachine<any, any, any>
  let machine2: AsyncMachine<any, any, any>
  let machine3: AsyncMachine<any, any, any>
  let machine4: AsyncMachine<any, any, any>
  let machine5: AsyncMachine<any, any, any>

  before(function() {
    // TODO switch to events
    machine1 = machine(['A', 'B', 'C', 'D'])
    machine1.id('machine1')
    // @ts-ignore
    machine1.C = { blocks: ['B'] }
    // @ts-ignore
    machine1.A = { requires: ['B'] }
    // @ts-ignore
    machine1.D = { requires: ['C'] }

    machine2 = machine(['E', 'F', 'G'])
    machine2.id('machine2')
    // @ts-ignore
    machine2.E = { blocks: ['F'] }

    machine3 = machine(['E', 'F'])
    machine3.id('machine3')
    // @ts-ignore
    machine3.E = { blocks: ['F'] }

    machine4 = machine(['E', 'F'])
    machine4.id('machine4')
    // @ts-ignore
    machine4.E = { blocks: ['F'] }

    machine5 = machine(['E', 'F'])
    machine5.id('machine5')
    // @ts-ignore
    machine5.E = { blocks: ['F'] }

    // machine1.log('[1]', 2)
    //window.foo = machine1

    machine_network = new MachineNetwork()
    machine_network.addMachine(machine1)
    machine_network.addMachine(machine2)
    machine_network.addMachine(machine3)
    machine_network.addMachine(machine4)
    machine_network.addMachine(machine5)

    machine1.pipe(
      'A',
      machine2,
      'E'
    )
    machine2.pipe(
      'E',
      machine1,
      'B'
    )
    machine2.pipe(
      'F',
      machine1,
      'B'
    )
    machine2.pipe(
      'E',
      machine3,
      'F'
    )
    machine2.pipe(
      'G',
      machine4,
      'F'
    )
    machine5.pipe(
      'F',
      machine3,
      'E'
    )
  })

  describe('graph json', () => {
    var json
    before(() => {
      this.differ = new GraphNetworkDiffer(machine_network)
      json = this.differ.generateGraphJSON()
    })

    it('should produce json', () => {
      // console.dir(json, {depth: 2})
      // console.log(
      //   JSON.stringify(
      //     json,
      //     null,
      //     4
      //   )
      // )
      expect(json).to.eql(
        JSON.parse(fs.readFileSync('test/fixtures/graph-json.json').toString())
      )
    })

    it('should support cross-machine connections')
  })

  describe('graph patches', function() {
    let diff
    before(function() {
      let differ = new GraphNetworkDiffer(machine_network)

      differ.generateGraphJSON()
      assert(differ.previous_json)

      machine1.add('C')
      machine2.pipe(
        'E',
        machine1,
        'C'
      )

      diff = differ.generateGraphPatch()
    })

    it('should produce diffs', function() {
      let expected_diff = {
        _in: {
          'machine1:C': {
            'machine2:E\u0001machine1:C\u00014': [
              {
                v: 'machine2:E',
                w: 'machine1:C',
                name: '4'
              }
            ]
          }
        },
        _preds: {
          'machine1:C': {
            'machine2:E': [1]
          }
        },
        _out: {
          'machine2:E': {
            'machine2:E\u0001machine1:C\u00014': [
              {
                v: 'machine2:E',
                w: 'machine1:C',
                name: '4'
              }
            ]
          }
        },
        _sucs: {
          'machine2:E': {
            'machine1:C': [1]
          }
        },
        _edgeObjs: {
          'machine2:E\u0001machine1:C\u00014': [
            {
              v: 'machine2:E',
              w: 'machine1:C',
              name: '4'
            }
          ]
        },
        _edgeCount: [6, 7],
        _nodes: {
          'machine1:C': {
            step_style: [null, 88]
          }
        },
        _edgeLabels: {
          'machine2:E\u0001machine1:C\u00014': [
            {
              type: 2,
              is_touched: false,
              link_type: 4,
              from_id: 'machine2:E',
              to_id: 'machine1:C'
            }
          ]
        }
      }
      expect(diff).to.eql(expected_diff)
    })
  })

  //describe('ui', function() {
  //    it('should render', function() {
  //      var ui = new Ui(this.stateGraph)
  //      ui.render()
  //    })
  //
  //    afterEach(function() {
  //
  //    })
  //})
})
