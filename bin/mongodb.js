var mongo = require('mongodb').MongoClient;

if (!global.db) {
	var url = process.env.MONGODB_URL;
  	mongo.connect(url, function(err, db) {
    global.db = db;
    console.log('MongoLab Connected')
  });
}