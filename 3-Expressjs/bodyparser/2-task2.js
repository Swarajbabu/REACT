const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded())

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/2-task2.html')
})

app.post('/', (req, res) => {
    let id = req.body.id
    let password = req.body.password
    if(!id || !password) res.send("Please Fill all the fields")
    else if(id == "123456789" && password == "swaraj") res.send("Login Successfully")
    else res.send("Invalid Credantials")
})

app.listen(port, () => {
    console.log(`Server Started: http://localhost:${port}`)
})