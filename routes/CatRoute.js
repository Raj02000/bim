const express = require("express");
const router = express.Router();

const {
  addCategory,
  getCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controller/CatController");
router.post("/categoryadd", addCategory);
router.get("/getcategory", getCategory);
router.get("/getcategorybyid/:id", getCategoryById);
router.delete("/deletecategory/:id", deleteCategory);
router.post("/updatecategory/:id", updateCategory);

module.exports = router;
