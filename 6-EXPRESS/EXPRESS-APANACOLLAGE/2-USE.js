const express = require("express")
const app = express();
const port = 3000;

// app.get("/",(req,res)=>{
//     res.send("THIS IS HOME PAGE");
// })

// it will work any url
app.use((req,res)=>{
    console.log("Request Resived");
    // res.send("THIS IS FIRES REQUEST")
    res.send("<h1>Fruits</h1> <ul> <li>Apple</li> <li>Banana</li> </ul>");
})

app.listen(port,()=>{
    console.log(`Server Started: ${port}`);
})