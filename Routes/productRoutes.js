const {createProduct,getAllProduct,getProductById,updateProductById,deleteProductById} = require("../Controller/product_controller")

const upload= require("../MiddleWares/middleware_Multer")
const express = require("express")

const router = express.Router();


router.post("/",upload.array("images",5),createProduct);

router.get("/",getAllProduct);

router.get("/:id",getProductById);

router.put("/:id", upload.array("images", 5), updateProductById);

router.delete("/:id",deleteProductById)

module.exports= router