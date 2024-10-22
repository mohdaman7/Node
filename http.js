const http = require("node:http");
const fs = require("node:fs")

http.createServer((req,res)=>{
    if(req.url === '/'){
        const name = "Aman"
        res.writeHead(200,{"Content-Type":"text/html"});
        let html = fs.readFileSync('./index.html',"utf-8");
        html = html.replace("{{name}}",name)
        res.end(html)
    }else if(req.url === '/about'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("About Page")
    }else if(req.url === '/api'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(JSON.stringify({
            firstName:"Muhammed",
            lastName:"Aman"
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found")
    }






    // fs.createReadStream(__dirname+'/index.html').pipe(res)
    // const html = fs.readFileSync('./index.html',"utf-8")
    // res.end(html);
}).listen(3000)    