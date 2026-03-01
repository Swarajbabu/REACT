const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello Nodejs")
})

app.get('/file',(req,res)=>{
    res.sendFile(__dirname + '/web.html')
})
app.listen(3000,()=> console.log("Server Started"))