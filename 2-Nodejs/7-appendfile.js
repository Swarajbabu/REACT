const fs = require('fs')
fs.appendFile('Demo.txt',"I am learning Node",(err)=>{
    if(!err){
        console.log("file Append")
    }
})
