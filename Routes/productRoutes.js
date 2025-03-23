const {createProduct,getAllProduct,getProductById,updateProductById,deleteProductById} = require("../Controller/product_controller")
const authMiddleware = require("../MiddleWares/authenticate");


const upload= require("../MiddleWares/middleware_Multer")
const express = require("express")

const router = express.Router();


router.post("/",authMiddleware,upload.array("images",5),createProduct);

router.get("/",getAllProduct);

router.get("/:id",authMiddleware,getProductById);

router.put("/:id",authMiddleware, upload.array("images", 5), updateProductById);

router.delete("/:id",authMiddleware,deleteProductById)

module.exports= router