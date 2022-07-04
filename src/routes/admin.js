const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.render("add-product");
});

router.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express.js</h1>");
});

module.exports = router;
