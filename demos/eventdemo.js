// event-demo.js (CommonJS)
const EventEmitter = require('events'); // use require i

const emitter = new EventEmitter();

emitter.on('greet', msg => console.log(msg));I

emitter.emit('greet', 'Hello from EventEmitter!');