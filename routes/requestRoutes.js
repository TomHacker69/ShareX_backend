const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// Create request
router.post("/borrow", async (req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.json(request);
});

// Get requests for user
router.get("/my", async (req, res) => {
  const requests = await Request.find({ borrowerId: req.query.userId });
  res.json(requests);
});

module.exports = router;