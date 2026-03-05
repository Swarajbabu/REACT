const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('demo.txt','utf-8',(err,data)=>{
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log("ServerStarted"))