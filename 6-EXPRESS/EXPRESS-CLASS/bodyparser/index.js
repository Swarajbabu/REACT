const express=require("express");
const app=express();
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})

app.post('/',(req,res)=>{
    let name=req.body.name;
    let pass=req.body.pwd;
    res.send("heloo "+name)
})

app.listen(3000,()=>console.log("Server started"));