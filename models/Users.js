const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  _id: { type: String, requires: true},
  name: {
    type: String,
    required: true,
  },
  surename: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", Users);
