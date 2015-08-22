var express = require('express');
var router = express.Router();

// REQUIRES
var Bundle = require('../model/mongoose.Bundle')

// ROUTES

router.get('/bundle', function (req, res, next) {
	console.log(req.params)
	var query = Bundle.find();
	if (req.query.tags) {
		query.where({tags: req.query.tags})
	} else {
		query.limit(20);
	}
	query.exec(function(err, data) {
		if (err) return next(err)
		res.send(data)
	})
})

router.get('/bundle/:id', function(req, res, next) {
	console.log(req.params)
	console.log(req.params.id)
	Bundle.findById(req.params.id, function(err) {
		if (err) return next(err);
		res.send(200)
	})
})


module.exports = router