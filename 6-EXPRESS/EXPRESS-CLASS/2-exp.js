const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.post('/',(req,res)=>{
    res.send("Hello Post RES")
})

app.listen(3000,()=> console.log("Server Started..."))