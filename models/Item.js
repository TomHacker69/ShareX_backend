const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  ownerId: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Item", itemSchema);