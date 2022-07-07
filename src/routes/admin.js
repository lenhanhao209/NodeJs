const express = require("express");
const router = express.Router();
const adminData = require("./admin");
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product");
});

// router.post("/product", (req, res, next) => {
//   res.render("product");
//   console.log(adminData.products);
//   products.push({ title: req.body.title });
// });

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
exports.products = products;
exports.routes = router;
