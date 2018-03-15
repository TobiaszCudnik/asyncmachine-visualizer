import Network, { IPatch } from '../network/network'
import Logger from './base'
import * as fs from 'fs'

export { Network, LoggerRemote as Logger }

export default class LoggerRemote extends Logger {
  io: SocketIOClient.Socket
  connected = false
  url: string

  constructor(public network: Network, url = 'http://localhost:3757') {
    super(network, false)
    this.url = url.replace(/\/$/, '')
    this.io = this.socket_io(`${this.url}/logger`, {
      query: `id=${network.id}`
    })

    this.io.on('connect', () => {
      this.start()
    })
    this.io.on('error', err => {
      console.error(err)
    })
  }

  start() {
    super.start()

    console.log(`Logger connected to ${this.url}`)
    this.connected = true
    this.emit('connect')

    this.io.emit('full-sync', this.full_sync)
    this.on('diff-sync', (patch: IPatch) => {
      this.io.emit('diff-sync', patch)
    })
  }

  getDebugCommand() {
    return `am-inspector --server "${this.url}"`
  }
}
