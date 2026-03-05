const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('home.html', 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    } else if (req.url == '/contact') {
        fs.readFile('contact.html', 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }
    else {
        res.write("page not found 404 enti mawa ?")
        res.end()
    }
}).listen(3000, () => console.log('serveer started........'))