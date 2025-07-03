const Raj = require("../model/CategoryModel");

exports.addCategory = async (req, res) => {
  let category_name = req.body.category_name;
  // category_name=Adidas
  let categorysearch = await Raj.findOne({ category_name: category_name });
  // categorysearch= category_name:Adidas  (false)
  if (!categorysearch) {
    let categoryadd = new Raj({
      category_name: category_name,
    });
    let category = await categoryadd.save();
    if (category) {
      res
        .status(200)
        .json({ message: "Category added Successfully", category });
    } else {
      res.status(200).json({ message: "Category Failed to add " });
    }
  } else {
    res.status(201).json({ message: "Category already exist" });
  }
};
exports.getCategory = async (req, res) => {
  let category = await Raj.find();
  if (!category) {
    res.status(201).json({ message: "category didn't fetch error" });
  } else {
    res
      .status(200)
      .json({ message: "Category fetched successfully", category });
  }
};
exports.getCategoryById = async (req, res) => {
  let catid = await Raj.findById(req.params.id);
  if (!catid) {
    res.status(201).json({ message: "Category Not Found" });
  } else {
    res.status(200).json({ message: "Category found", catid });
  }
};
exports.deleteCategory = async (req, res) => {
  let category = await Raj.findByIdAndDelete(req.params.id);
  if (!category) {
    res.status(201).json({ message: "Category ID not found" });
  } else {
    res.status(200).json({ message: "Category Deleted", category });
  }
};
exports.updateCategory = async (req, res) => {
  let category = await Raj.findByIdAndUpdate(req.params.id, {
    category_name: req.body.category_name,
  });
  if (!category) {
    res.status(201).json({ message: "Category ID not found" });
  } else {
    res.status(200).json({ message: "Category Updated", category });
  }
};
