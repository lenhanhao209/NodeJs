const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("This is the first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("This is the second middleware");
  res.send("<h2>Hello from Express.js</h2>");
});

const server = http.createServer(app);
server.listen(3000);
