// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end('Hello World!');
// })

// server.listen(3000,()=>{
//     console.log('Server is running on Port 3000')
// })


const fs = require('fs');

// const data = fs.readFileSync('./abc.txt','utf-8')
// console.log(data)

// const data = '\nMy name is Muhammed Aman'
// fs.appendFileSync('./abc.txt',data,(err)=>{
//     if(err){
//         console.log("Something went wrong")
//     }else{
//         console.log("File written succsessfully")
//     }
// })

// fs.mkdir('folder',(err)=>{
//     if(err){
//         console.log('Unable to create file',err)
//     }else{
//         console.log('Directory created successfully')
//     }
// })

// fs.unlink('./abc.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Deleted Successfully')
//     }
// })

// fs.rmdir('./folder',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Deleted Successfully')
//     }
// })

fs.rename('./img/123.png','./img/test.png',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file renamed successfullt")
    }
})