const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello Express This is Home")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.listen(3000,()=> console.log("Server Started..."))