const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);

/*
Additional Explanation:
- Added middleware to handle 404 errors:
  - This middleware catches all requests that do not match any routes defined earlier and responds with a 404 status code and a "Page not found" message.
- These changes modularize the route handling by separating routes into different files and introduce a global error handling mechanism for undefined routes.
*/
