const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/message", (req, res) => {
  const message = req.body.message;
  try {
    fs.writeFileSync("message.txt", message);
    res.status(302);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(401);
  }
  res.end();
});

app.listen(3000);
