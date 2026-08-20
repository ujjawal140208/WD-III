const express = require("express")

const app = express()

app.use(express.json())




// app.get("/",(req,res)=>{
//     return res.status(200).send("hello word")
// })


// CRUD OPERATION

let students = ["Alex","Joy","Sara"]

app.get("/students",(req,res)=>{
    return res.status(200).send(students)
})


// app.post("/student",(req,res)=>{
//     let data = req.body.name
//     students.push(data)

//     res.status(200).send("Student added successfully")

// })

app.put("/students/:index",(req,res)=>{
    let ind = req.params.index
    let data = req.body.name

    students[ind]=data

    res.status(200).send("Students updated successfully")
})

app.delete("/students/:index",(req,res)=>{
    let ind = req.params.index
    students.splice(ind,1)
    res.status(200).send("deleted")
})


app.listen(3000,()=>{
    console.log("server running on port 3000")
})
