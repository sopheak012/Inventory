const express = require("express");
const router = express.Router();
const {
  replaceScratcherData,
  getAllScratchers,
} = require("../controllers/scratcherController");

// Route for replacing scratcher data
router.post("/scratchers/replace", replaceScratcherData);
router.get("/scratchers", getAllScratchers);

module.exports = router;
