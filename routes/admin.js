// const path = require("path");
const router = require("express").Router();

const rootDir = require("../util/path");

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("admin route", rootDir);
  // res.status(200).sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { docTitle: "Add Product", path: "products" });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.status(200).redirect("/");
});

exports.routes = router;
exports.products = products;
