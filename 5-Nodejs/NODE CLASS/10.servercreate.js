const http = require('http')
http.createServer((req,res)=>{
    res.write("Welcome to Server side Codding")
    res.end()
}).listen(3000,()=>console.log("Server Started"))

