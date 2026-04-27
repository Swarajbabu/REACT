const express = require("express");
const app = express();
const path = require("path") 

app.set("views",path.join(__dirname,"/views"));

p = 8080;
app.listen(p,()=>{
    console.log(`The server Started in: ${p}`);
})

app.get("/ig/:username",(req,res)=>{
    const username = req.params.username;
    const followers = ["Swaraj","rahul","gopi","sunny","rohan"];
    res.render("2-Insta.ejs",{username , followers});
})