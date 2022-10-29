const mongoose = require("mongoose");

const Branch = new mongoose.Schema({
    _id: { type: mongoose.ObjectId, auto: true },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Branch", Branch);
