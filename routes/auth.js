const express = require("express");
const { handleLogin, handleSignup } = require("../controller/authController");
const router = express.Router();

router
  .post("/login", handleLogin)
  .post("/singup", handleSignup)

  .get("/login", (req, res) => {
    return res.status(200).render("login.ejs");
  })
  .get("/signup", (req, res) => {
    return res.status(200).render("signup.ejs");
  });

module.exports = router;
