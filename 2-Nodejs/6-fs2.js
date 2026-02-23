console.log(__dirname)
console.log(__filename)

const fs = require('fs')
fs.readFile(__dirname + '/Demo.txt','utf-8',(err,data)=>{
    if(!err){
        console.log(data)

    }
})