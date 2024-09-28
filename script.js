const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 8888;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log("Terhubung Ke http://localhost:" + port);
});
