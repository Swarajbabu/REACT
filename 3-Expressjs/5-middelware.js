const express = require('express')

const app = express()
const port = 3000

app.use((req, res, next) => {
    if(!req.query.age) res.send("Please Enter the Age.");
    else if(req.query.age < 18) res.send("Age must be greater than 18");
    else next()
})

app.get('/', (req, res) => {
    res.send("Learning MiddleWare");
})

app.listen(port, () => {
    console.log(`Server Started: http://localhost:${port}`);
})