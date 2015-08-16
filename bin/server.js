/**
 * Module dependencies.
 */

var express = require('express');
var debug = require('debug')('midterm:server');

// initialize app

var app = express();

/**
 * Get port from environment and store in Express.
 */

 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomPort = getRandomInt(3000,65536);

var port = normalizePort(process.env.PORT || 8080);
app.use(express.static('public'));

//Create server.
var server = {
    Start: function() {
      app.get('/', function (req, res) {
        res.sendFile('./public/index.html')
      })

      var server = app.listen(port, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log("     You're listening to http://localhost:" +port + " home of the internet's smoothest jazz and easy listening" );
      });
}


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = server