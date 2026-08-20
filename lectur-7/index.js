// const http = require ("http")

// const server = http.createServer((req,res)=>{
//     // res.write("<h1>Hello world</h1>")
//     // res.write("<p> chachu ke chuhe ki chunni </p>")
//     // res.end()

//     // console.log(req.url)
//     // res.end()

//     if (req.url === "/"){
//         res.write("<h1>Home Page</h1>")
//         res.end()
//     }
    
//     if (req.url==="/about"){
//         res.write("<h1>ABOUT</h1>")
//         res.end()
//     }
// })

// server.listen(3000,()=>{
//     console.log("Server is running")
// })


const http = require("http");

const server = http.createServer((req, res) => {
    
    // res.write("<h1>Hello World</h1>");
    // res.write("<p>Node js class</p>");
    // res.write("<span>3rd sem</span>");
    // res.end();

    // console.log(req.url)
    // res.end

    // if(req.url === "/") {
    //     res.write("<h1>Home page/h1>");
    //     res.end();
    // }
    // if(req.url === "/about") {
    //     res.write("<h1>About Page</h1>");
    //     res.end();
    // }

    // res.end

    // console.log(req.method)
    // res.end()
    if(req.method === "GET") {
        res.write("<h1>GET Method</h1>");
        res.end();
    }

    if(req.method === "POST") {
        res.write("<h1>POST Method</h1>");
        res.end();
    }

})

server.listen(3000, () => {
    console.log("Server is running on PORT 3000");
})