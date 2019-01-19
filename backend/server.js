require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Apply middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize server
app.listen(process.env.PORT || 3000, () => {
  console.log(`=== Server running on port ${process.env.PORT || 3000} ===`);
});

// Connect MongoDB
const db = process.env.MONGO_URI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("=== Connected to MongoDB ===\n"))
  .catch(err => console.log(err));

// Connect routes
app.get("/", (req, res) => {
  res.send("<h1>Running</h1>");
});
