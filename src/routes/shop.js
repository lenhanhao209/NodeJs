const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("home", { prods: products, pageTitle: "Shop", path: "/" });
  console.log(products[0].title);
});

module.exports = router;
