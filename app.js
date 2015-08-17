var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
var session = require('express-session');
var request = require('request');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;




//config
if (process.env.NODE_ENV !== 'production') {
  require('./bin/secrets');
}

// db

// Create User Schema
var userSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  password: String
});

userSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(8, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema)

require(path.join(process.cwd(), './bin/mongodb'));

var app = express();




// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
// local password validation middleware (need to declare strategy before the route)


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



app.use(function(req, res, next) {
  if (req.user) {
    res.cookie('user', JSON.stringify(req.user));
  }
  next();
});


//pre-login routes

// authorization middleware

// post-login routes

app.post('/api/login', passport.authenticate('local'), function (req, res) {
  res.cookie('user', JSON.stringify(req.user));
  console.log(req.user)
  res.redirect('/landing')
})

app.post('/api/signup', function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err) {
    if (err) return next(err);
    res.send(200);
  });
});

app.get('/api/logout', function(req, res, next) {
  req.logout();
  res.send(200);
});

app.get('*', function (req, res) {
  res.redirect('/#' + req.originalUrl)
})

// Error Handling
app.use(function(req, res, next) {
  var err = new Error("Can't find it: " + err.status);
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  console.log('That casual '+ app.get('env') +' environment right?')
}

if (app.get('env') === 'production') {
  console.log('That hardcore '+ app.get('env') +' environment right?')
}



app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("     You're listening to http://localhost:" +port + " home of the internet's smoothest jazz and easy listening" );
});


module.exports = app;
