const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  pricePerDay: Number,
  availability: { type: String, default: "Available" },
  image: String,
  owner: String,
  contact: String
});

module.exports = mongoose.model("Item", itemSchema);
