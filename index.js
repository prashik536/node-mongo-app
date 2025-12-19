const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Node + Mongo running with Docker Compose 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
