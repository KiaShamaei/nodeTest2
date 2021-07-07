const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
   console.log(req.url, req.method)
   res.setHeader('Content-Type', 'text/html')
if(req.url === "/"){
    let page = fs.readFileSync('../index.html')
    res.write(page)
    res.end()
}
if (req.url === "/product") {
     fs.readFile('../product.html' , (err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else {
            res.write(data)
            res.end()
        }
    })
}

})

server.listen(8000,'localhost', ()=>{
    console.log("lsitening for req on port 8000")
})