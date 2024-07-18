const fileHelper = require("../util/file");

const Product = require("../models/product");
const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  // Validate Image
  if (!req.file) {
    console.log("here");
    return res.status(422).render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: false,
      hasError: true,
      errorMessage: "Attached file is not an image.",
      product: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
      },
      validationErrors: false,
    });
  }

  // Validate Input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: false,
      hasError: true,
      errorMessage: errors.array()[0].msg,
      product: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
      },
      validationErrors: errors.array(),
    });
  }

  // Create New Product
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.file.path,
    description: req.body.description,
    userId: req.user._id,
  });

  // Save Product
  product
    .save()
    .then((result) => {
      console.log("Created Product!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }

  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: false,
      });
    })
    .catch((err) => {
      error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  // Validate Changes Made
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: true,
      hasError: true,
      errorMessage: errors.array()[0].msg,
      product: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        _id: req.body.productId,
      },
      validationErrors: errors.array(),
    });
  }

  // Find Product, Update All Fields Except for Image Automatically, Update Image if New Image Uploaded, Save Product
  Product.findById(req.body.productId)
    .then((product) => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect("/");
      }
      product.title = req.body.title;
      if (req.file) {
        fileHelper.deleteFile(product.imageUrl);
        product.imageUrl = req.file.path;
      }
      product.price = req.body.price;
      product.description = req.body.description;
      return product.save().then((result) => {
        console.log("Updated Product!");
        res.redirect("/admin/products");
      });
    })
    .catch((err) => {
      console.log(err);
      error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  Product.findById(req.body.productId)
    .then((product) => {
      if (!product) {
        return next(new Error("Product Not Found!"));
      }
      fileHelper.deleteFile(product.imageUrl);
      return Product.deleteOne({
        _id: req.body.productId,
        userId: req.user._id,
      });
    })
    .then(() => {
      return User.updateMany(
        { "cart.items.productId": req.body.productId },
        { $pull: { "cart.items": { productId: req.body.productId } } },
      );
    })
    .then(() => {
      console.log("Deleted Product!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
