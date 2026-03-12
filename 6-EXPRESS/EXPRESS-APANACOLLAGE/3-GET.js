const express = require("express")
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server Started in ${port}`)
})

// it will work to respond to the home page only nad we can send any data to the home page
// we can't resve data from the home page
app.get("/",(req,res)=>{
    res.send("Home page only asdsa asd sa fdsfc");
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.post("/",(req,res)=>{
    res.send("THIS DATA FROM POST")
})

// catch all invalid routes
app.use((req, res) => {
    res.send("This is not correct URL");
});