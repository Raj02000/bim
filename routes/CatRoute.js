const express = require("express");
const {
  addCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} = require("../controller/CatController");
const router = express.Router();

router.post("/create", addCategory);
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.put("/update/:id", updateCategory);
module.exports = router;
