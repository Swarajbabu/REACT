const express = require("express")
const app = express();

let port = 8080;
app.listen(port,()=>{
    console.log(`App is Running: ${port}`);
});

app.use("/",(req,res)=>{
    console.log("Request reseved");
    // console.log(req);
    // res.send("This is the EXAMPLE RESPONCE");
    res.send('<h1>This is the EXAMPLE RESPONSE</h1>')
})