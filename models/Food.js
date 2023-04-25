const mongoose = require('mongoose')
const FoodSchema = new mongoose.Schema({
    
        name: {
            type: String,
        },
        image: {
            type:String
        },
        description: {
            type:String,
        },
        guide:{
            type:String
        }
   
},{
    timestamps:true
})

module.exports = mongoose.model('Food',FoodSchema)