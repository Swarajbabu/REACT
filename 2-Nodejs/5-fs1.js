const fs = require('fs')
fs.writeFile("Demo.txt","HELLLO fs",(err)=>{
    if(!err){
        console.log("file Created");
    }
})



