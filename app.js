var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var users = require('./routes/users');

//config
if (process.env.NODE_ENV !== 'production') {
  require('./bin/secrets');
}

// db
require(path.join(process.cwd(), './bin/mongodb'));

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//pre-login routes

app.use('/users', users);
app.use(express.static(path.join(__dirname, 'public')));

// authorization middleware

// post-login routes

// Server Start


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Can't find it: " + err.status);
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
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
