const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, auto: true},
  color: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  preview_img: {
    data: Buffer,
    contentType: String
  },
  hover_img: {
    data: Buffer,
    contentType: String
  },
});

module.exports = mongoose.model("Product", Product);
