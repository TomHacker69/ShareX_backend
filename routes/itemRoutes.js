router.post("/add", async (req, res) => {
  try {
    const { name, category, description, pricePerDay, image, owner, contact } = req.body;

    if (!name || !category || !description || pricePerDay == null || !owner || !contact) {
      return res.status(400).json({ msg: "Missing required item fields" });
    }

    const item = new Item({
      name,
      category,
      description,
      pricePerDay,
      availability: "Available",
      image: image || "https://via.placeholder.com/500x300",
      owner,
      contact
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ msg: "Failed to add item" });
  }
});
