const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Add item
router.post("/add", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ msg: "Failed to add item" });
  }
});

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ msg: "Failed to fetch items" });
  }
});

module.exports = router;
