// // const os = require("os")

// // console.log(os.platform())

// // console.log(os.arch())

// // console.log(os.hostname())

// // console.log(os.version())

// // console.log(os.uptime())

// // console.log(os.totalmem()/1024/1024/1024)

// // console.log(os.freemem()/1024/1024/1024)

// // console.log(os.cpus())

// // console.log(os.cpus().length)

const fs = require("fs")

// // fs.writeFile("data.txt","Hello world",(err)=>{ //agr mai yaha pe already written file ka name same rakhk ke run karu to already existing data overwrite kr jayega
// //     if (err) console.log(err)
// //         else console.log("File Written")
// // })

// // fs.readFile("data.txt","utf8",(err,res)=>{
// //     if (err) console.log(err)
// //         else console.log(res)
// // })

// // fs.appendFile("data.txt","\n Rakesh ke ldka hua hai",(err)=>{
// //     if (err) console.log(err)
// //         else console.log("updated")
// // })

// // fs.unlink("data.txt",(err)=>{
// //     if (err) console.log(err)
// //         else console.log("inlinked")
// // })

// const data = {
//     name: "Ujjawal",
//     age: 19,
//     city: "Dwarka",
//     Country: "India"
// }
// // fs.writeFile("data.json",JSON.stringify(data,null,2), (err)=>{
// //     if (err) console.log(err)
// //         else console.log("created")
// // })

// const new_data = {
//     name: "rakesh"
// }

// fs.readFile("data.json", "utf8", (err, res) => {
//     if (err) console.log(err)
//     else {
//         let temp = JSON.parse(res)
//         temp.push(new_data)

//         fs.writeFile("data.json", JSON.stringify(temp, null, 2), (err) => {
//             if (err) console.log(err)
//             else console.log("file updated")
//         })
//     }
// })

const path = require("path")
const { fileURLToPath } = require("url")

// const file = path.join("home","data","user.json")

// console.log(file)

// console.log(path.dirname("home/user/data/file.txt")) // directory name dena hota hai na ki file name

// console.log(path.basename("home/user/data/file.txt"))

// console.log(path.extname("home/user/data/file.txt"))

const filepath = path.join("home", "data", "user", "file.txt")
console.log(filepath)

fs.mkdir(path.dirname(filepath), { recursive: true }, (err) => {
    if (err) console.log(err)
    else {
        fs.writeFile(filepath, "", (err) => {
            if (err) console.log(err)
            else console.log("done")
        })
    }
})

