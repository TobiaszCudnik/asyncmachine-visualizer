import { IPatch, ITransitionData, PatchType } from '../../network/network'
import * as workerpool from 'workerpool'
import * as randomID from 'simple-random-id'
import { Semaphore } from 'await-semaphore'

export type Constructor<T = {}> = new (...args: any[]) => T

export { WorkerPoolMixin }

// TODO implement a common interface with LoggerBase
// TODO browser compatibility
export default function WorkerPoolMixin<TBase extends Constructor>(
  Base: TBase
) {
  return class extends Base {
    last_end = 0
    differ_semaphore = new Semaphore(this.options.workers || 4)
    pool = workerpool.pool(__dirname + '/workerpool/diff-worker.js')
    // TODO rename
    sent_map: { id: string; status: boolean }[] = []

    // constructor(...args: any[]) {
    //   super(...args)
    //   if (this.options.granularity) {
    //     this.granularity = this.options.granularity
    //   }
    // }

    async onGraphChange(
      type: PatchType,
      machine_id: string,
      data?: ITransitionData
    ) {
      if (!this.checkGranularity(type)) return
      // let diff = this.differ.generateDiff()
      const id = randomID()
      let prev = this.differ.previous_json
      // const prev_id = this.jsons[this.jsons.length - 1].id
      // console.time(`generate ${id}`)
      let json = this.differ.generateJson()
      // console.timeEnd(`generate ${id}`)
      // console.log(
      //   this.jsons.length - this.last_end,
      //   this.pool.stats()
      // )
      const pos = this.sent_map.push({ id, status: false }) - 1
      const logs = [...this.network.logs]
      this.network.logs = []

      const release = await this.differ_semaphore.acquire()
      try {
        // console.log('request', pos)
        // console.time(id)
        let diff = await this.pool.exec('createDiffSync', [prev, json, pos])
        prev = null
        json = null
        // console.timeEnd(id)
        let packet: IPatch = {
          logs,
          diff,
          type,
          machine_id
        }
        if (data) packet.data = data
        // delete this.jsons[pos].json
        this.sent_map[pos].status = true
        debugger
        this.patches[pos - 1] = packet
        // console.dir(this.jsons.map(r => r.status))
        this.flushOrderedBuffer(pos)
      } catch (e) {
        throw e
      } finally {
        release()
      }
    }

    // TODO dispose older jsons
    flushOrderedBuffer(pos) {
      // console.log('flushOrderedBuffer', pos)
      let send = 1
      let i
      for (i = this.last_end + 1; i <= pos; i++) {
        if (!this.sent_map[i].status) {
          send = 0
          break
        }
        send = 1
      }
      if (!send) return
      let flushed = 0
      for (i = this.last_end + 1; i <= pos; i++) {
        // console.log(this.patches[i])
        // console.log('sent', i)
        // console.log(inspect(this.patches[i - 1], { depth: 100 }))
        if (this.patches[i - 1]) {
          this.emit('diff-sync', this.patches[i - 1])
          flushed++
        }
      }
      console.log(`flushed ${flushed} patches`)
      this.last_end = pos
    }
  }
}
