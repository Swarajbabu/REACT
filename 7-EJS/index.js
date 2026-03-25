const express = require("express")
const app = express()
const port = 8080;

const path = require("path")
app.set("view engine","ejs")

app.set("views",path.join(__dirname,"/views"))


app.listen(port,()=>{
    console.log(`Server is Started in ${port}`)
})

app.get("/",(req,res)=>{
    res.render("demo.ejs")
})