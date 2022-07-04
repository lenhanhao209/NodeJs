const express = require("express");
const router = express.Router();

router.post("/product", (req, res, next) => {
  const title = req.body;
  res.redirect("/");
  console.log(title);
});

module.exports = router;
