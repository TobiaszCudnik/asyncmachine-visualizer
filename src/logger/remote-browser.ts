import Network from '../network/network'
import LoggerRemote from './base-remote'
import * as io from 'socket.io-client/dist/socket.io'

export { Network, Logger }

export default class Logger extends LoggerRemote {
  get socket_io() {
    return io
  }
}
