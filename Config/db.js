const mongoose = require("mongoose");

const dotenv = require("dotenv");


dotenv.config();

const connectDB=async ()=>{
     try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
     } catch (error) {
        console.error("Database Connection Error:", error.message)
     }
}

module.exports = { connectDB }