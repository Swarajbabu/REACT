const express = require("express");
const app = express();
const path = require("path") 

app.set("views",path.join(__dirname,"/views"));

p = 8080;
app.listen(p,()=>{
    console.log(`The server Started in: ${p}`);
})
app.get("/",(req,res)=>{
    res.render("1-EJS-Interpolation.ejs",{
        user: "Swaraj",
        marks: 75,
        htmlContent: "<h2>This is raw HTML from server</h2>"
    })
})