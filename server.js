const express= require("express");
const cors = require("cors")
const morgan = require("morgan")
const responseTime  = require("response-time")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const compression = require("compression")
const productRoutes = require("./Routes/productRoutes")
const authRoutes = require("./Routes/authRoutes")
const dotenv = require("dotenv")

const {connectDB} = require("./Config/db")
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(compression());
app.use(responseTime())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

const limiter= rateLimit({
    windowMs : 10*61*1000,
    max : 15,
    message : "To many request from this IP, please try afer some time"
})
app.use(limiter)


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
app.use("/api/auth",authRoutes );
app.listen(port, ()=>{
    connectDB()
    console.log(`server running at ${port}`)
})