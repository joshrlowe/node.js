const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

// Handler for POST request to add a new product
exports.postAddProduct = (req, res, next) => {
  // Create a new Product instance with data from the request body
  const product = new Product(
    req.body.title, // Product title
    req.body.price, // Product price
    req.body.description, // Product description
    req.body.imageUrl, // Product image URL
  );
  // Save the new product to the database
  product
    .save() // Attempt to save the product
    .then((result) => {
      // On successful save, log the result and redirect to the admin products page
      console.log(result); // Log the result for debugging purposes
      res.redirect("/admin/products"); // Redirect to the list of products
    })
    .catch((err) => console.log(err)); // Log any errors that occur during save operation
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

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      // This function is responsible for fetching all products from the database.
      exports.getProducts = (req, res, next) => {
        Product.fetchAll()
          .then((products) => {
            // Once products are fetched, render the 'admin/products' view and pass the products data along with page metadata.
            res.render("admin/products", {
              prods: products, // The list of products to be displayed
              pageTitle: "Admin Products", // Title of the page for the browser's title bar
              path: "/admin/products", // Path used to highlight the active menu item
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
