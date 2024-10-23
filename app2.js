const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-type':'text.html'})
        let html = fs.readFileSync('./index.html','utf-8')
        res.end(html)
    }
    if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text.html'})
        let html = fs.readFileSync('./views/about.html','utf-8');
        res.end(html)
    }
}).listen(3000)  