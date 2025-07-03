const Product = require("../model/ProductModel");
exports.addProduct = async (req, res) => {
  let product = new Product({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_image: req.body.product_image,
    product_description: req.body.product_description,
    category: req.body.category,
  });
  product = await product.save();
  if (!product) {
    res.status(201).json({ message: "Product Cannot be added" });
  } else {
    res.status(200).json({ message: "Product Added Successfully", product });
  }
};
exports.getProduct = async (req, res) => {
  let product = await Product.find().populate("category", "category_name");
  if (!product) {
    res.status(201).json({ message: "Product not found or error" });
  } else {
    res.status(200).json({ message: "Product Found", product });
  }
};
exports.deleteProduct = async (req, res) => {
  
  let product = await Product.find(req.params.id);
  if (!product) {
     res.status(201).json({ message: 'Product not found' });
  }
  else{
      res.status(200).json({message:"product deleted successfully",product})
  }
}

exports.getProductById=async(req,res)=>{
let product=await Product.findById(req.params.id)
if(!product){
  res.status(201).json({message:"product ID not found"})
}
else{
  res.status(200).json({message:"product ID found",product})
}
}
exports.updateProduct=async(req,res)=>{
let product=await Product.findByIdAndUpdate(req.params.id,{product_name:req.body.product_name,product_price:req.body.product_price, product_image:req.body.product_image,product_description:req.body.product_description})
if(!product){
  res.status(201).json({message:"category ID not found"})
}
else{
  res.status(200).json({message:"category updated successfully",product})
}
}
