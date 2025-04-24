const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true,
        unique : true

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

 userSchema.index({"name" : 1});
 userSchema.index({"mobile" : 1})
const User = mongoose.model("Users", userSchema);
module.exports= User