const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_description: { type: String },
    product_image: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
