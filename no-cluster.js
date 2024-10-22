const http = require("node:http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home page");
    }else if(req.url === '/slow-page'){
        for(let i=0;i<600000000;i++){}
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home page");
    }
}).listen(8000)