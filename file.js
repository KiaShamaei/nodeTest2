const fs = require('fs')


fs.readFile('./document/doc.txt', (err,data)=>{
    if(err)
    console.log("file err", err)
    console.log(data.toString())
})
