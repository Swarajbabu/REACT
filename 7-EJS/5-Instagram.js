const express = require("express");
const app = express();
const path = require("path");

// this use is for static files like css,js,images
app.use(express.static(path.join(__dirname,"/public")));

// this is for dynamic files like ejs
app.set("views",path.join(__dirname,"/views"));


port = 8080;
app.listen(port,()=>{
    console.log(`Server is stared in: ${port}`);
})

app.get("/ig/:username",(req,res)=>{
    const insta_data = require("./data.json")
    const username = req.params.username;
    const data = insta_data[username];
    if(data){
        res.render("3-instagram.ejs",{username,data})
    }
    else{
        res.render("4-error.ejs",{username})
    }
    // console.log(data);
})