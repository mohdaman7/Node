var fs = require("fs");
const { error } = require("node:console");
const fsp = require("node:fs/promises")


const readableStream = fs.createReadStream('./file.txt',{
    encoding:'utf-8',
})

const writeableStream = fs.createWriteStream('./file2.txt');

readableStream.pipe(writeableStream)

// readableStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk)
// })






// fs.writeFile("test.txt","hai how are you?",(err)=>{
//     if(err){
//         console.log("unable to write")
//     }
// })



// fs.appendFile("test.txt","more text added",(err)=>{
//     if(err){
//         console.log("unable to write")
//     }
// })

// fs.readFile("test.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.unlink("test.txt",(err)=>{

// })


// fsp.readFile("file.txt","utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

// async function readFile() {
//     try{
//         const data = await fsp.readFile("file.txt","utf8")
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// readFile()

