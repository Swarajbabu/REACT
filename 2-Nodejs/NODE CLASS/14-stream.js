const fs = require('fs')
const myStream = fs.createReadStream('demo.txt','utf-8')
myStream.on('data',(chunk)=>{
    console.log("chunk received")
    console.log(chunk)
})

const myReadStream = fs.createReadStream('demo.txt'.'utf-8')
 