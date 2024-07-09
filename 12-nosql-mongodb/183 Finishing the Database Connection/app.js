const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

// Import the mongoConnect function from the database utility file
const mongoConnect = require("./util/database");

// Import the error controller
const errorController = require("./controllers/error");

// Initialize Express app
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
// Set the directory for EJS templates
app.set("views", "views");

// Import routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to attach user to request - currently commented out as placeholder
app.use((req, res, next) => {
  // Example of fetching user from database, not currently in use
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
});

// Use admin routes for paths starting with "/admin"
app.use("/admin", adminRoutes);
// Use shop routes for other paths
app.use(shopRoutes);

// Middleware for handling 404 errors
app.use(errorController.get404);

// Connect to MongoDB and start the server on port 3000
mongoConnect(() => {
  app.listen(3000);
});
