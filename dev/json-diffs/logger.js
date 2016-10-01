require('source-map-support').install()
var am = require('asyncmachine')
var Logger = require('../../build/logger').default
var Network = require('../../build/network').default
const repl = require('repl')

global.am = am

global.machine1 = am.factory(['A', 'B', 'C', 'D', 'E'])
machine1.id('machine 1').logLevel(2)
machine1.C = {drop: ['B']}
machine1.A = {require: ['B'], add: ['E']}
machine1.D = {require: ['C']}

global.machine2 = am.factory(['E', 'F', 'G'])
machine2.id('machine 2')
machine2.E = {drop: ['F']}

global.machine3 = am.factory(['E', 'F'])
machine3.id('machine 3')
machine3.E = {drop: ['F']}

global.machine4 = am.factory(['E', 'F'])
machine4.id('machine 4')
machine4.E = {drop: ['F']}

global.machine5 = am.factory(['E', 'F'])
machine5.id('machine 5')
machine5.E = {drop: ['F']}

// TODO check this piping
machine1.pipe('A', machine2, 'E', am.PipeFlags.INVERT)
// machine2.pipe('E', machine1, 'B')
machine2.pipe('F', machine1, 'B')
machine2.pipe('E', machine3, 'F')
machine2.pipe('G', machine4, 'F')

// machine5.pipe('F', machine3, 'E')

// init env
machine1.add('A')

global.network = new Network

function test1() {
  var test = am.factory(['X', 'Y'])
  network.addMachine(test)
}

function test2() {
  machine1.pipe('A', machine4, 'F')
}

function test3() {
  machine3.pipe('F', machine4, 'F')
}

function test4() {
  machine1.add(['A', 'B'])
}

function test5() {
  machine1.drop(['A', 'B'])
}

function test6() {
  machine1.pipe('A', machine2, 'G')
}

global.test1 = test1
global.test2 = test2
global.test3 = test3
global.test4 = test4
global.test5 = test5
global.test6 = test6

global.network = new Network
network.addMachine(machine1)
network.addMachine(machine2)
network.addMachine(machine3)
network.addMachine(machine4)
network.addMachine(machine5)

global.logger = new Logger(network, 'http://localhost:3030/logger')

repl.start({
  prompt: 'logger> ',
  input: process.stdin,
  output: process.stdout
});