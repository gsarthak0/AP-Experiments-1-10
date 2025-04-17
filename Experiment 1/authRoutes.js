const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

// Signup route
router.get("/signup", (req, res) => {
  res.render("auth/register");
});

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });

    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.redirect("/products");
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login route
router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("/products");
  }
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/products");
  });
});

module.exports = router;
