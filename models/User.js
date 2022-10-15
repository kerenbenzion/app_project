const mongoose = require("mongoose");

const User = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, auto: true},
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
