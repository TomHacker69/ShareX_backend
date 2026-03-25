const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  itemId: String,
  borrowerId: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Request", requestSchema);