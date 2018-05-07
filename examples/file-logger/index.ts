import Asyncmachine from 'asyncmachine'
import { Logger, Network } from 'ami-logger'
import FileFSMixing from "ami-logger/mixins/file-fs";

// an example machine and its instance
class Example extends Asyncmachine<any, any, any> {
  Foo = {}
  Bar = {}
  Baz = { drop: ['Bar'] }
  constructor() {
    super()
    this.id('demo')
    // always required for typescript
    this.registerAll()
  }
}
const example = new Example()

// build the Logger class
const LoggerClass = FileFSMixing(Logger)

// hook up the instance to a logger client
const network = new Network([example])
const logger = new LoggerClass(network, { url: 'http://localhost:3757' })

// make some changes
example.add(['Foo', 'Bar'])
example.add('Baz')
logger.saveFile('snapshot.json')
console.log(`Saved snapshot.json`)