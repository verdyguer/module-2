const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/signup', (req, res, next)=> {
  res.render('auth/signup');
});
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

router.get('/login', ensureLoggedOut(), (req, res) => {
    res.render('auth/login');
});

router.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect : '/',
  failureRedirect : '/login'
}));

router.get('/signup', ensureLoggedOut(), (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

router.post('/logout', ensureLoggedIn('/login'), (req, res) => {
    req.logout();
    res.redirect('/');
});



module.exports = router;

