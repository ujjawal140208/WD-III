const express = require("express")
const app = express()
const morgan = require("morgan")
const noteRoutes = require("./routes/noteRoutes")

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(morgan("combined"))

app.use("/api",noteRoutes)



app.use(express.json())
app.listen(8000,()=>{
    console.log("server is running")
})