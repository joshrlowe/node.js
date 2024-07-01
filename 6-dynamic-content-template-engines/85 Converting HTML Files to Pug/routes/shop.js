const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // Dynamic content is passed into a JavaScript object following the file we want to render
  res.render("shop", { prods: products, pageTitle: "Shop" });
});

module.exports = router;
