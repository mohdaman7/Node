var http = require("http")
var fs = require ('fs')
var url = require("url")
const path = require("path");

http.createServer((req,res)=>{

    if(req.url === '/'){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
            if(err) throw err
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end(data)
        })
    }

    if(req.url === '/about'){
        fs.readFile(path.join(__dirname,"views","about.html"),(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-type':'text/html'})
                return res.end("Error page not found")
            }
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }

    if(req.url === '/contact'){
        fs.readFile(path.join(__dirname,"views","contact.html"),(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-type':'text/html'})
                return res.end("Error page not found")
            }
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }

}).listen(3000)