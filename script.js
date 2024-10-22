const http = require("http");
const fs = require("fs");
const path = require("path");
const value = require("./utils");


// console.log(value.myName) 
// console.log(value.logger())

// const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
    //         if(err) throw err
    //         res.writeHead(200,{"Content-Type":"text/html"})
    //         res.end(data)
    //     })
    // }

//     if(req.url === '/contact'){
//         fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
//             if(err) throw err
//             res.writeHead(200,{"Content-Type":"text/html"})
//             res.end(data)
//         }) 
//     }
 

// });

// const PORT = process.env.PORT || 3001;

// server.listen(PORT,()=>console.log(`Server running on ${PORT}`))


//Read File
// fs.readFile("./new.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })


//Create File
// fs.writeFileSync('new.txt','This is a new file created by node js',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File created")
// })


// fs.appendFile("new.txt","\nThis is new file created by node js",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File Created")
// })


//Rename Files
// fs.rename('new.txt','sample.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File renamed")
// })

//Delete Files
fs.unlink('./sample.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File Deleted")
})