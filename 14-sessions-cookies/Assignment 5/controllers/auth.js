const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }
      if (user.password !== req.body.password) {
        return res.redirect("/login");
      }
      req.session.isLoggedIn = true;
      req.session.user = user;
      return res.redirect("/");
    })
    .catch((err) => console.log(err));
};
