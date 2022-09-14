const { default: mongoose } = require("mongoose");

const ShoeSchema = new mongoose.Schema({
    name: String,
    image: String,
}, {timestamps: true});

const Shoes = mongoose.model("Shoes", ShoeSchema);

module.exports = Shoes