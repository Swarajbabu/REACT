const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/1-task.html')
})

app.post('/', (req, res) => {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let result = num1 + num2

    res.send("Result = " + result)
})

app.listen(3000)