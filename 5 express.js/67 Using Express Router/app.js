const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to use routes defined in separate files
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);

/*
Additional Explanation:
- Introduced route handlers from external files:
  - `adminRoutes` and `shopRoutes` are imported from `./routes/admin` and `./routes/shop` respectively.
  - `app.use(adminRoutes)` and `app.use(shopRoutes)` integrate these routes into the main application.
*/
