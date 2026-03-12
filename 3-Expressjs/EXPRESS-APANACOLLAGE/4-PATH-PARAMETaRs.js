const express = require("express")
const app = express()
const port = 3000;

app.listen(port,()=>{
    console.log(`Server started in ${port}`);
})

app.get("/",(req,res)=>{
    res.send("THIS IS THE ROOT PAGE")
})

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("Hello, iam user name:"+req.params.username)
})