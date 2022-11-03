const express = require("express")
const cors = require("cors")
const PORT = 3000
const restaurantRouter = require("./Route/restauant.routes")
//1. Create Server
const server = express()

//2.Server middleware
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:false}))

//3.Router
server.get("/",(req,res)=>{
    res.send("<h1>Restaurant API Using MySQL</h1>")
})
//Use restaurant router
server.use("",restaurantRouter)
//4. Running Server
server.listen(PORT, ()=>{
    console.log("Server listning at http://localhost:"+PORT+"...");
})