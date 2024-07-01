const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.set() configures various settings and global variables for the Express application.
// Set the templating engine to 'pug', enabling the app to render Pug templates.
app.set("view engine", "pug");

// Set the directory where the application's view (template) files are located.
// Note: By default, Express looks for views in a directory named 'views', so setting the views directory to 'views' is unnecessary and has been omitted.
// If you need to change the views directory to a different path, you can uncomment and modify the line below.
// app.set('views', 'views');

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);
