const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT ||3000
const fs = require("fs/promises")
const server = express()
server.listen(port, ()=>{
 console.log("Charos");
})
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.set("view engine", "ejs");
server.set("views","./views")
server.use("/landing", async(req,res)=>{
    const data = await fs.readFile("./users.json", "utf8")
    const info = JSON.parse(data)
    res.render("users",{
       info
    })
})
