const mongoose = require("mongoose");

const singleProduct = new mongoose.Schema({
    _id: { type: mongoose.ObjectId, auto: true },
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
        type: String,
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
    imgs:{
        type: [String],
        required: true
    }

});

module.exports = mongoose.model("singleProduct", singleProduct);