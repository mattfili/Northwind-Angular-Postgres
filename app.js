var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
  
// ROUTE REQUIRES
var models = require('./models')
var api = require('./api')

//DB CONFIG
// if (process.env.NODE_ENV !== 'production') {
//   require('./bin/secrets');
// }




// MIDDLEWARES
app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize.sync().then (function() {
  var server = app.listen(app.get('port'), function() {
    console.log("You're listening to http://localhost:" + server.address().port + " home of the internet's smoothest jazz and easy listening" );
  });
});


// ENDPOINTS
app.use('/api', api)





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
});

// SERVER CONNECT

// var port = process.env.PORT || 8080;




module.exports = app;
