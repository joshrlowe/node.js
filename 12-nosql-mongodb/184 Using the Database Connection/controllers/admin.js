const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  req.user
    .createProduct({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      description: req.body.description,
      userId: req.user.id,
    })
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   // Product.findByPk(req.params.productId)
//   req.user
//     .getProducts({ where: { id: req.params.productId } })
//     .then((products) => {
//       if (!products) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: products[0],
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   Product.findByPk(req.body.productId)
//     .then((product) => {
//       product.title = req.body.title;
//       product.price = req.body.price;
//       product.imageUrl = req.body.imageUrl;
//       product.description = req.body.description;
//       return product.save();
//     })
//     .then((result) => {
//       console.log("Updated Product!");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };

// exports.getProducts = (req, res, next) => {
//   req.user
//     .getProducts()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products,
//         pageTitle: "Admin Products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => console.log(err));
// };

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
