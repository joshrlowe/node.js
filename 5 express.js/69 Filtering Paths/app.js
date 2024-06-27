const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to use routes defined in separate files, prefixed with /admin
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);

/*
Additional Explanation:
- Updated the route handling for `adminRoutes` to be prefixed with `/admin`:
  - `app.use("/admin", adminRoutes)` means that all routes defined in `./routes/admin` will be accessed under the `/admin` path.
- This change scopes the admin routes under the `/admin` path, providing better organization and avoiding potential route conflicts.
*/
