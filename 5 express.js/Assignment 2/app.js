const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("All requests go through this middleware!");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("Requests to /users go through this middleware!");
  res.send("<h1>Welcome to the Users Page</h1>");
});

app.use("/favicon.ico", (req, res, next) => {
  console.log("All favicon requests go through this middleware!");
});

app.use("/", (req, res, next) => {
  console.log(
    "All other requests go through this middleware, the homepage middleware!",
  );
  res.send("<h1>Welcome to the Home Page!</h1>");
});

app.listen(3000);
