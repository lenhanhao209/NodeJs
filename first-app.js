const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from my Node.js server!");
});

app.listen(3000);
