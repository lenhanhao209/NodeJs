const express = require("express");
const app = express();
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "/public")));
console.log(__dirname);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(shopRoutes);
app.use("/admin", adminData.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "PAGE NOT FOUND!!!" });
});
app.listen(3000);
