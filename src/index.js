const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.get("/add-product", (req, res, next) => {
  res.render("add-product");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express.js</h1>");
});

app.post("/product", (req, res, next) => {
  const title = req.body;
  res.redirect("/");
  console.log(title);
});

app.listen(3000);
