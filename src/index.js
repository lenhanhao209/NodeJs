const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "/public")));
// app.engine("handlebars", handlebars.engine());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));
app.use(shopRoutes);
app.use("/admin", adminData.routes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404");
});
app.listen(3000);
