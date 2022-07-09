const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors");

app.use(express.static(path.join(__dirname, "/public")));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use(errorsController.get404Page);
app.listen(3000);
