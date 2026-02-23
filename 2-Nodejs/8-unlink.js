const fs = require('fs')

fs.unlink("Demo.txt",(err)=>{
    console.log("File Deleted")
})