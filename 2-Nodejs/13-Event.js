const EventEmitter = require('events')
const event = new EventEmitter()

event.on('data',()=>{
    console.log("Event emitted...")
})

event.emit('data')