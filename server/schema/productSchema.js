const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  id: String,
  title: String,
  imgURL: String,
  desc: String,
  price: Number,
  sizes: [String],
});
module.exports = Schema;
