const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Add item
router.post("/add", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// Get all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

module.exports = router;
