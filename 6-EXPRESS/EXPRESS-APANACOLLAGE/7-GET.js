const express = require("express");
const app = express();

port = 8080;
app.listen(port,()=>{
    console.log(`Server Started in: ${port}`);
});

app.get("/",(req,res)=>{
    res.send("THIS IS THE HOME PAGE");
});
app.get("/help",(req,res)=>{
    res.send("This IS THE HELP PAGE <br><h1>Help-No: 9642985278</h1>")
})

// path parameter
app.get("/:username/:id",(req,res)=>{
    const {username , id } = req.params; 
    console.log(`HELLO THSI SIS @${username}`);
    
    const hrmlSte = `<h1>This is the @${username} account</h1>`;
    res.send(hrmlSte);
})

// query parameter
app.get("/search",(req,res)=>{
    // console.log(req.query);
    const q = req.query;
    res.send(q);
})
//example of query parameter
// http://localhost:8080/search?q=express&sort=asc&page=2