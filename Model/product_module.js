const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    sku:{type : String, required : true, unique: true},
    name : {type: String, required : true},
    price : {type : Number, required : true},         
    images: [String]
},
{ timestamps: true })

const Product = mongoose.model("Products",productSchema)

module.exports =  Product 