const { body } = require("express-validator");
const express = require("express");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/add-product => POST
router.post(
  "/add-product",
  isAuth,
  [
    body("title")
      .isString()
      .withMessage("Title must be alphanumeric")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters")
      .trim(),
    body("price").isFloat().withMessage("Price must be a number"),
    body("description")
      .isLength({ min: 5, max: 400 })
      .withMessage("Description must be between 5 and 400 characters")
      .trim(),
  ],
  adminController.postAddProduct,
);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/edit-product => GET
router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

// /admin/edit-product => POST
router.post(
  "/edit-product",
  isAuth,
  [
    body("title")
      .isString()
      .withMessage("Title must be alphanumeric")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters")
      .trim(),
    body("price").isFloat().withMessage("Price must be a number"),
    body("description")
      .isLength({ min: 5, max: 400 })
      .withMessage("Description must be between 5 and 400 characters")
      .trim(),
  ],
  adminController.postEditProduct,
);

// /admin/delete-product => POST
router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
