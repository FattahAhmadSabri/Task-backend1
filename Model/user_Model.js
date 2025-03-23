const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    password: {
        type: String,
        required : true
    }
})
const User = mongoose.model("Users", userSchema);
module.exports= User