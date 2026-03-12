const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Node Js")
})

app.get('/api',(req,res)=>{
    res.send("hello "+req.query.name)
})

app.listen(3000,()=> console.log("Server Started..."))