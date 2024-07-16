const express = require("express");
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
router.post("/signup", authController.postSignup);

// /reset => GET
router.get("/reset", authController.getReset);

// /reset => POST
router.post("/reset", authController.postReset);

// /reset/:token => GET
router.get("/reset/:token", authController.getNewPassword);

module.exports = router;
