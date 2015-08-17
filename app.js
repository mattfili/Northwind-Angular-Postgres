var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs')
var session = require('express-session');
var request = require('request');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();


  
// ROUTE REQUIRES
var userAuthentication = require('./routes/users')


//DB CONFIG
if (process.env.NODE_ENV !== 'production') {
  require('./bin/secrets');
}

require(path.join(process.cwd(), './bin/mongodb'));


// MIDDLEWARES

app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  if (req.user) {
    res.cookie('user', JSON.stringify(req.user));
  }
  next();
});


// PRE-LOGIN ENDPOINTS
app.use('/api', userAuthentication)


// POST LOGIN ENDPOINTS


// CATCH ALL FOR HTML 5 MODE (allows UI-Router driven states)
app.get('*', function (req, res) {
  res.redirect('/#' + req.originalUrl)
})

















// ERROR HANDLING
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
  res.send(err)
});

// SERVER CONNECT

var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("You're listening to http://localhost:" +port + " home of the internet's smoothest jazz and easy listening" );
});


module.exports = app;
