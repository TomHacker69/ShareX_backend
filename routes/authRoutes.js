const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// Create request
router.post("/borrow", async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();
    res.json(request);
  } catch (error) {
    console.error("Borrow request error:", error);
    res.status(500).json({ msg: "Failed to create request" });
  }
});

// Get requests for user
router.get("/my", async (req, res) => {
  try {
    const requests = await Request.find({ borrowerId: req.query.userId });
    res.json(requests);
  } catch (error) {
    console.error("Fetch request error:", error);
    res.status(500).json({ msg: "Failed to fetch requests" });
  }
});

module.exports = router;
