const express = require("express");
const app = express();
const path = require("path")

// app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));

port = 8080;
app.listen(port,()=>{ 
    console.log(`Server Started in: ${port}`) 
});

app.get("/",(req,res)=>{
    res.render("demo.ejs");
})

app.get("/rolldic",(req,res)=>{
    const rollNo = Math.floor(Math.random()*6) + 1
    res.render("rolldice.ejs",{rollNo});
})
