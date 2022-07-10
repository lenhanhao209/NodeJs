const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.getProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getHome = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("home", { prods: products, pageTitle: "Shop", path: "/" });
  });
};
