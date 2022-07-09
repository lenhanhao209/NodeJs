const express = require("express");
const router = express.Router();
const adminData = require("./admin");
const productsControllers = require("../controllers/products");
const products = [];

router.get("/add-product", productsControllers.getAddProduct);

router.post("/product", productsControllers.getProduct);

module.exports = router;
