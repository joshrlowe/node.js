const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      exports.getProducts = (req, res, next) => {
        Product.fetchAll()
          .then((products) => {
            res.render("admin/products", {
              prods: products,
              pageTitle: "Admin Products",
              path: "/admin/products",
            });
          })
          .catch((err) => console.log(err));
      };
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.description,
    req.body.imageUrl,
  );
  product
    .save()
    .then((result) => {
      // console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  // Find the product by ID passed as a route parameter
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
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  // Find the product by ID from the form submission
  Product.findById(req.body.productId)
    .then((product) => {
      product.title = req.body.title;
      product.price = req.body.price;
      product.imageUrl = req.body.imageUrl;
      product.description = req.body.description;
      return product.save();
    })
    .then((result) => {
      console.log("Updated Product!");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

// exports.postDeleteProduct = (req, res, next) => {
//   Product.findByPk(req.body.productId)
//     .then((product) => {
//       return product.destroy();
//     })
//     .then((result) => {
//       console.log("Destroyed Product!");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };
