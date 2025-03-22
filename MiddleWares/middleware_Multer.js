require('dotenv').config();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer");
const path = require("path");
const fs = require("fs");



cloudinary.config();
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ecommerce-products",  
        allowed_formats: ["jpg", "png", "jpeg", "gif"]
    }
});

const upload =multer({storage,
    
    limits: { fileSize: 5 * 1024 * 1024 } 
})

module.exports = upload