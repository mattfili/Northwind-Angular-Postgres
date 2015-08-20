var mongoose = require('mongoose');
var Schema = mongoose.Schema;

if (!global.db) {
	var url = process.env.MONGODB_URL;
	var db = mongoose;
  	db.connect(url, function(err, db) {
    global.db = db;
  });
  	
  	db.connection.on('open', function () {
  		console.log('Mongoose hole has been dug')
  	})
  	db.connection.on('error', function () {
  		console.log("Can't seem to find the mongoose hole")
  	})
}