const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Route handler for GET requests to /add-product
app.get("/add-product", (req, res, next) => {
  res.send(`<form action="/product" method="POST">
              <input type="text" name="title">
              <button type="submit">Submit</button>
            </form>
    `);
});

// Route handler for POST requests to /product
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// Route handler for GET requests to the root URL
app.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);

/*
Additional Explanation:
- Changed from using `app.use` for routing to using `app.get` for GET requests and `app.post` for POST requests, which is more precise.
  - `app.get("/add-product", ...)` handles GET requests specifically for the `/add-product` route.
  - `app.post("/product", ...)` handles POST requests specifically for the `/product` route.
  - `app.get("/", ...)` handles GET requests specifically for the root URL.
- The `/add-product` route serves an HTML form that submits a POST request to `/product`.
- The `/product` route middleware logs the submitted form data (`req.body`) and redirects to the root URL.
- The root URL middleware sends an HTML response with "Hello from Express!".
- This setup demonstrates handling form submissions in Express, including parsing form data with body-parser, and properly routing GET and POST requests.
*/
