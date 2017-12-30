import Network, { ITransitionData, PatchType } from '../network'
import * as io from 'socket.io-client'
import NetworkJson, {
  JsonDiffFactory,
  INetworkJson
} from '../inspector/joint/network'

type MachineId = string

/**
 * TODO rename to LoggerClient
 * fix d.ts files generation
 * TODO introduce revision hashes
 */
export default class Logger {
  io: SocketIOClient.Socket
  json: NetworkJson
  diff: JsonDiffFactory
  base_version: INetworkJson
  connected = false

  constructor(public network: Network, public serverHost) {
    this.io = io(serverHost, {
      query: `id=${network.id}`
    })

    this.json = new NetworkJson(network)
    this.diff = new JsonDiffFactory(this.json)

    // this.io.on('full-sync', () => this.onFullSync())
    this.io.on('connect', () => {
      this.onConnected()
    })
    // this.io.on('full-sync', () => this.onFullSync())
    this.io.on('full-sync', () => {
      this.base_version = this.diff.previous_json
      this.io.emit('full-sync', this.base_version)
    })
  }

  onConnected() {
    console.log(`Logger connected to ${this.serverHost}`)
    this.connected = true
    this.diff.generateJson()
    this.base_version = this.diff.previous_json
    this.io.emit('full-sync', this.base_version)

    this.json.network.on('change', (type, machine_id, data) =>
      this.onGraphChange(type, machine_id, data)
    )
  }

  onGraphChange(type: PatchType, machine_id: string, data?: ITransitionData) {
    let diff = this.diff.generateDiff()
    let packet = {
      diff,
      type,
      machine_id,
      logs: this.network.logs
    }
    if (data) packet.data = data
    // skip empty steps
    if (
      type == PatchType.TRANSITION_STEP &&
      !diff &&
      !this.network.logs.length
    ) {
      return
    }
    this.io.emit('diff-sync', packet)
    this.network.logs = []
  }
}
