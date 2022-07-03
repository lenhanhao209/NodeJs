const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/message", (req, res) => {
  return res.render("message");
});

app.listen(3000);
