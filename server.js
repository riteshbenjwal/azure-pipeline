const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World from Node.js app\n");
});

app.get("/new", (req, res) => {
  res.send("New Route added\n");
});

app.get("/key", (req, res) => {
  const key = process.env.KEY;
  res.json({
    key: key,
  });
});

app.get("/azure-pipeline", (req, res) => {
  res.send("Azure Pipeline working fine");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
