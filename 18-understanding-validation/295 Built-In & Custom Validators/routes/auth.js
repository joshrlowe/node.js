const express = require("express");
const { check } = require("express-validator");
const authController = require("../controllers/auth");
const router = express.Router();

// /login => GET
router.get("/login", authController.getLogin);

// /login => POST
router.post("/login", authController.postLogin);

// /logout => POST
router.post("/logout", authController.postLogout);

// /signup => GET
router.get("/signup", authController.getSignup);

// /signup => POST
router.post(
  "/signup",
  check("email")
    .isEmail()
    .withMessage("Please Enter a Valid Email")
    .custom((value, { req }) => {
      if (value === "test@test.com") {
        throw new Error("This email address is forbidden");
      }
      return true;
    }),
  authController.postSignup,
);

// /reset => GET
router.get("/reset", authController.getReset);

// /reset => POST
router.post("/reset", authController.postReset);

// /reset/:token => GET
router.get("/reset/:token", authController.getNewPassword);

// /new-password => POST
router.post("/new-password", authController.postNewPassword);

module.exports = router;
