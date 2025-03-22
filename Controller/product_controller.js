const Product = require("../Model/product_module");

const createProduct =async(req,res)=>{
    try {
        const {sku,name,price}=req.body;
        const images = req.files ? req.files.map(file => file.path) : [];

    const products = new Product({sku,name,price,images})
    await products.save()
    res.status(201).json({success : true,data:products})
    } catch (error) {
        res.status(500).json({success:false,error})
    }
}

const getAllProduct= async(req,res)=>{
    try {
        const products =await Product.find();
        res.status(200).json({data: products})
    } catch (error) {
        res.status(500).json({error})
    }

}
const getProductById=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({data: product})
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateProductById = async (req, res) => {
    try {
      console.log("Update request for ID:", req.params.id);
      console.log("Request Body:", req.body);
      console.log("Request Files:", req.files);
  
      const images = req.files ? req.files.map(file => file.path) : [];
  
      const updateFields = {
        ...req.body,
        ...(images.length > 0 && { images })
      };
  
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updateFields,
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      res.status(200).json({ success: true, data: updatedProduct });
  
    } catch (error) {
      console.error("Update Error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  };

const deleteProductById = async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true,data:product})
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports={createProduct,getAllProduct,getProductById,updateProductById,deleteProductById}