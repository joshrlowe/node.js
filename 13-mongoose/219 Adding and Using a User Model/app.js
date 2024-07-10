const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const dbConfig = require("./config/dbConfig");
const User = require("./models/user");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("668eea6ef5f816e9979000b1")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://${dbConfig.db.username}:${dbConfig.db.password}@${dbConfig.db.host}/shop?retryWrites=true&w=majority&appName=${dbConfig.db.appName}`,
  )
  .then((result) => {
    console.log("Connected!");
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          username: "Josh",
          email: "joshlowe.cs@gmail.com",
          cart: { items: [] },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => console.log(err));
