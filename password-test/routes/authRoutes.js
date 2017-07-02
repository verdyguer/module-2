const passport = require("passport");
authRoutes.get("/login", (req, res, next) => {
  res.render("auth/login");
});

const ensureLogin = require("connect-ensure-login");

authRoutes.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

authRoutes.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("private", { user: req.user });
});