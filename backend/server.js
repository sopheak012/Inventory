const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
const cors = require("cors");
const scratcherRoute = require("./routes/scratcherRoute");

const databaseURI =
  "mongodb+srv://sopheak012:test012@mernapp.hdvj4cr.mongodb.net/ScratcherInventoryApp";

// Middleware for parsing JSON data
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);
app.use(express.json());

async function startServer() {
  try {
    // Connect to MongoDB using Mongoose and the URI
    await mongoose.connect(databaseURI);
    console.log("Connected to MongoDB");

    // Use the scratcher route

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();

app.use("/api", scratcherRoute);
