const fs = require("fs")
fs.writeFile("dummy.txt","Hello world",(err)=>{ 
    if (err) console.log(err)
    else console.log("File Written")
})

fs.readFile("dummy.txt","utf8",(err,res)=>{
    if (err) console.log(err)
    else console.log(res)
})

 fs.appendFile("dummy.txt","\n Rakesh ke ldka hua hai",(err)=>{
    if (err) console.log(err)
    else console.log("updated")
})

// fs.unlink("dummy.txt",(err)=>{
//     if (err) console.log(err)
//     else console.log("deleted succefully")
// })