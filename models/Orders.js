const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
    _id: { type: mongoose.ObjectId, auto: true},
  products: [{
    type: String,
    required: true,
  }],
  username: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Orders", Orders);
