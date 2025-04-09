const Category = require("../model/CategoryModel");
exports.addCategory = async (req, res) => {
  try {
    category_name = req.body.category_name;
    let categorysearch = await Category.findOne({
      category_name: category_name,
    });
    if (!category_name) {
      res.status(500).json({ detail: "Please enter a category name" });
    }
    if (!categorysearch) {
      let categoryadd = new Category({
        category_name: category_name,
      });
      let category = await categoryadd.save();
      res.status(200).json({ success: true, category: category });
    } else {
      res.status(201).json({ detail: "category already exists" });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
      detail: "Category not added",
      success: false,
    });
  }
};

exports.getCategory = async (req, res) => {
  let category = await Category.find();
  if (!category) {
    res.status(404).json({ success: false, detail: "Category not found" });
  }
  res.status(200).json({ success: true, category: category });
};
exports.getCategoryById = async (req, res) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404).json({ success: false, detail: "Category not found" });
  }
  res.status(200).json({ success: true, category: category });
};
exports.updateCategory = async (req, res) => {
  let category = await Category.findByIdAndUpdate(req.params.id, {
    category_name: req.body.category_name,
  });
  if (!category) {
    res.status(404).json({ success: false, detail: "Category not updated" });
  }
  console.log("heyy");
  res.status(200).json({ success: true, category: category });
};
