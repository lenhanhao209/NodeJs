const express = require("express");
const adminData = require("./admin");
const productsControllers = require("../controllers/products");
const router = express.Router();

router.get("/", productsControllers.getHome);

module.exports = router;
