const passport = require('passport');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const loginGoogleCallback = (req, res) => {

    passport.authenticate( 'google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
      })

    // if (req.user) {
    //   console.log(req.user)
    //   const token = jwt.sign({id: req.user._id}, process.env.SECRET, {
    //     expiresIn: 60 * 60 * 24
    //   })
    //   res.cookie('token', token)        
    //   res.redirect('http://localhost:3000')
    // } else {
    //   console.log('Error')
    //   res.redirect('http://localhost:3000')
    // }
};

// passport.authenticate( 'google', {
//     successRedirect: '/protected',
//     failureRedirect: '/auth/google/failure'
//   })
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

module.exports = {
    loginGoogleCallback,
} 