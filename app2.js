const http = require('http') ;
const fs = require('fs')


const server =http.createServer((req , res)=>{
    console.log(req.url, req.method , req.headers)
    const index = fs.readFileSync('./index.html')
    res.setHeader('Content-Type','text/html')
    if(req.url === "/get")
    res.write(index)
    else res.write("<h2>this is wrong url ...</h2>")
    res.end()
})

server.listen(8000)


