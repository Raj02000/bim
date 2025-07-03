const express = require("express");
const {
  addProduct,
  getProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} = require("../controller/ProductController");
const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/getproduct", getProduct);
router.delete("/deleteproduct", deleteProduct);
router.get("/getproductbyid/:id", getProductById);
router.post("/updateProduct/:id", updateProduct);
module.exports = router;
