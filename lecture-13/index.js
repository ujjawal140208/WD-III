const express = require("express")
const app = express()
const noteRoutes = require("./routes/noteRoutes")
app.use(express.json)
app.use("/api",noteRoutes)


app.listen(8000,()=>{
    console.log("server is running")
})