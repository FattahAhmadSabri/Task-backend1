const express= require("express");
const cors = require("cors")
const productRoutes = require("./Routes/productRoutes")
const dotenv = require("dotenv")

const {connectDB} = require("./Config/db")
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000


app.get("/", (req,res)=>{
    try {
        res.status(200).send("hello Innovent")
    } catch (error) {
        res.send(error)
    }
})
// app.use("/uploads", express.static("uploads"));
app.use("/api/products",productRoutes)
app.listen(port, ()=>{
    connectDB()
    console.log(`server running at ${port}`)
})