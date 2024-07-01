const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

/* Handle GET request to the root URL ("/")
 * res.render is used to render a view template with the view engine (e.g., Pug, EJS, etc.) and sends the rendered HTML to the client.
 * In this case, it renders the 'shop' template, which is typically an HTML file with embedded JavaScript for dynamic content.
 * This method allows for more dynamic and templated responses compared to static files.
 */

router.get("/", (req, res, next) => {
  res.render("shop");
});

/* Example using res.sendFile:
 * res.sendFile is used to send a static file as the response to the client.
 * This is useful for serving HTML files, images, or any other type of static content.
 * Unlike res.render, it does not process the file with a template engine; it just sends the file as-is.
 */

// router.get("/example", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "views", "example.html"));
// });

module.exports = router;
