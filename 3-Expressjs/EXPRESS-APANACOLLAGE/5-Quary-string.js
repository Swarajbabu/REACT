const express = require("express")
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server Started in: ${port}`)
})

app.get("/search",(req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send("nothing sertched");    
    }
    console.log(req.query);
    res.send("Search Id: "+q);
})