const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
 id:Number,
 name:String,
 category:String,
 price:Number

})
const productModel=mongoose.model('products',productSchema)
module.exports=productModel