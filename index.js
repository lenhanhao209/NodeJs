const http = require("http");
const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("Test always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send("<h2>The Add product page</h2>");
});

app.use("/", (req, res, next) => {
  res.send("<h2>Hello from Express.js</h2>");
});

const server = http.createServer(app);
server.listen(3000);
