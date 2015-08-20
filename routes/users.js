var express = require('express');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

// REQUIRES
var User = require('../model/mongoose.User')

// PASSPORT STRATEGY AND SERIALIZATION
passport.use(new LocalStrategy(
  {usernameField: 'email'}, 
    function(email, password, done) {
      User.findOne({ email: email }, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, {message: 'incorrect username'});
      user.comparePassword(password, function(err, isMatch) {
        if (err) return done(err, {message: 'password is incorrect'});
        if (isMatch) return done(null, user);
        return done(null, false);
    });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// LOGIN AND SIGNUP ROUTES
router.post('/login', passport.authenticate('local'), function (req, res) {
  res.cookie('user', JSON.stringify(req.user))
  res.json(req.user)
})

router.post('/signup', function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err) {
    if (err) return next(err);
    res.sendStatus(200);
  });
});

router.get('/logout', function(req, res, next) {
	req.session.destroy()
  	res.sendStatus(200);
});



module.exports = router