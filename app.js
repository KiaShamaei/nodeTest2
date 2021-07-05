const http = require('http')
const fs = require('fs')



const server =http.createServer((req,res)=>{
    const url = req.url 
    const methode = req.method
    res.setHeader('Content-Type' , 'text/html')
    if (url === "/add"){
        const form =`
        <form method="POST" action="/products">
         <input type="text" name="product"/>
         <button tyoe="submit">add</button>
        </form>
        `
        res.write(form)
        return res.end()
    }
    if(url=== "/products" && methode === "POST"){
        fs.writeFileSync('product.txt' , 'product Name' )
        res.statusCode = 302
        res.setHeader('Location' ,  '/')
    }
    const index = fs.readFileSync('./index.html')
    res.write(index)
    res.end()
})
server.listen(8000)

