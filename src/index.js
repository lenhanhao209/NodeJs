const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const adminRoutes = require("./views/routes/admin");
const shopRoutes = require("./views/routes/shop");

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3000);
