const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    types: String,
    require: true,
  },
  description: {
    types: String,
    require: true,
  },
  price: {
    types: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
