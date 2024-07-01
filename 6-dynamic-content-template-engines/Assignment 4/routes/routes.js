const express = require("express");
const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("add-user", { pageTitle: "Add User" });
});

router.post("/", (req, res, next) => {
  users.push(req.body.title);
  res.redirect("/users");
});

router.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users: users });
});

module.exports = router;
