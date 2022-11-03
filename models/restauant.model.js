const sql = require("./db")

//constructor
const Restaurant =function(restaurant){
    //attributes
    this.id = restaurant.id
    this.name = restaurant.name
    this.type = restaurant.type
    this.imageURL = restaurant.imageURL
}

//Method
Restaurant.create =(newrestaurant, result) =>{
    //INSTALL INTO restaurant ( id, name, type, imageSQL) VALUES ("1", "KFC", "FASTFOOD", "url")
    sql.query("INSTALL INTO restaurant SET?", newrestaurant, (err,res)=>{
        if(err){
            console.log("error", err)
            result(err, null);
            return
        }
        console.log("NEW restaurant inserted:", {id:res.id, ...newrestaurant});
        result(null, {id: res.id, ...newRestaurant });
    });
}
