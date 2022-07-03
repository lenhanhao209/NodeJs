const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const fs = require("fs");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/message", (req, res) => {
  fs.writeFileSync("message.txt", "DUMMY");
  res.redirect("/");
  res.statusCode = 302;
});

app.listen(3000);
