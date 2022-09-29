const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));

router.get( '/google/callback', passport.authenticate( 'google', {
  successRedirect: '/auth/google/logged',
  failureRedirect: '/auth/google/failure'
}));

router.get("/google/logged", (req, res) => {
  res.redirect("http://localhost:3000/logged");
});

router.get("/google/failure", (req, res) => {
  res.render("profile.ejs", { user: req.user });
});


router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
});

module.exports = router;