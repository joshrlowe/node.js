const express = require("express");
const { check, body } = require("express-validator");
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
  [
    check("email")
      .isEmail()
      .withMessage("Please Enter a Valid Email")
      .custom((value, { req }) => {
        if (value === "test@test.com") {
          throw new Error("This email address is forbidden");
        }
        return true;
      }),
    body(
      "password",
      "Please Enter a Password with only numbers and text and at least 5 characters",
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
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
