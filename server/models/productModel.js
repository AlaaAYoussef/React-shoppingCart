const mongoose = require("mongoose");
const Schema = require("../schema/productSchema");
const Product = mongoose.model("product", Schema);
module.exports = Product;
