const passport = require('passport');
const User = require('../models/User');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://grow-and-sell-back.up.railway.app/auth/google/callback",
    passReqToCallback: true,
  },
  async (request, accessToken, refreshToken, profile, done) => {
    console.log(profile);
    const user = await User.findById(profile.id);
    console.log(user)
    if (user) {
        done(null, user);
    } else {
        const newUser = new User({
            _id: profile.id,
            name: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.email
        });
    console.log(user)
      await newUser.save();
      done(null, newUser);
    }
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});