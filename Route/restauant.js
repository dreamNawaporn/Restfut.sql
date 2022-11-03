const express = require("express")
const router = express.Router()
const Restaurant = require("../models/restaurant/models")

//Restaurant router
//Insert new restaurant toDB
//http://localhost:3000/restaurant
router.post("/restaurant",(req,res)=>{
    //create Restaurant object
    const newrestaurant = new Restaurant({
        name : req.boby.name,
        type : req.boby.type,
       imageURL: req.boby.imageURL
    })
    //SAVE to DB
    Restaurant.create(newrestaurant, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err. message || "Some error occured"
            })
        }
        else{
            res.send(data)
        }
    })
})