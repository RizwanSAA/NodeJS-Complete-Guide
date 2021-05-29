const path = require("path");
const router = require("express").Router();
const { products } = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", { prods: products, docTitle: "Shop", path: "shop" });
});

module.exports = router;
