const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, auto: true},
  color: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  preview_img: {
    type: String,
    required: true,
  },
  hover_img: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Product", Product);
