require("dotenv").config();

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const User = require("../models/user");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  }),
);

exports.getLogin = (req, res, next) => {
  let message = req.flash("error");
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    errorMessage: message.length > 0 ? message[0] : null,
  });
};

exports.postLogin = async (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      req.flash("error", "Invalid email.");
      return res.redirect("/login");
    }
    bcrypt
      .compare(req.body.password, user.password)
      .then((doMatch) => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save((err) => {
            if (err) {
              console.log(err);
            }
            res.redirect("/");
          });
        }
        req.flash("error", "Invalid password.");
        res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/login");
      });
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash("error");
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    errorMessage: message.length > 0 ? message[0] : null,
  });
};

exports.postSignup = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        req.flash("error", "Email already exists.");
        return res.redirect("/signup");
      }
      if (req.body.password !== req.body.confirmPassword) {
        req.flash("error", "Passwords do not match.");
        return res.redirect("/signup");
      }
      return bcrypt
        .hash(req.body.password, 12)
        .then((hashedPassword) => {
          const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            cart: [],
          });
          return newUser.save();
        })
        .then((result) => {
          res.redirect("/login");
          return transporter
            .sendMail({
              to: req.body.email,
              from: process.env.EMAIL,
              subject: "Signup succeeded!",
              html: "<h1>You successfully signed up!</h1>",
            })
            .catch((err) => console.log(err));
        });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash("error");
  res.render("auth/reset", {
    path: "/reset",
    pageTitle: "Reset Password",
    errorMessage: message.length > 0 ? message[0] : null,
  });
};
