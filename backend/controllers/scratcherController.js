const Scratcher = require("../models/scratcherModel");

// Get all scratcher tickets
async function getAllScratchers(req, res) {
  try {
    const scratchers = await Scratcher.find();
    res.status(200).json(scratchers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch scratcher tickets" });
  }
}

// Replace all scratcher data with new data
async function replaceScratcherData(req, res) {
  try {
    // Your new data, which should replace the existing data
    const newScratcherData = req.body;

    // Delete all existing scratcher documents
    await Scratcher.deleteMany({});

    // Insert the new data
    await Scratcher.insertMany(newScratcherData);

    res.status(200).json({ message: "Scratcher data replaced successfully" });
  } catch (error) {
    console.error("Error in replaceScratcherData:", error); // Log the error details
    res.status(500).json({
      error: "Unable to replace scratcher data",
      details: error.message,
    });
  }
}

module.exports = {
  replaceScratcherData,
  getAllScratchers,
};
