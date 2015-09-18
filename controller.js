var Model = require('./models')
var methods = require(__dirname + '/convenience')
var _ = require('lodash');

exports.getDynamic = function(req, res) {
	var baselineTable = req.body.base 
	var joinTable = req.body.join 

	console.log(req.body)

	if (!joinTable) {
	
		Model[baselineTable].findAll()
		.then(function (data) {
			res.json(data)
		})

	} else {
		
		Model[baselineTable].findAll({
			 include: [{
			  model: Model[joinTable],
			  required: true
			}]
		}).then(function (data) {
			res.json(data)
		})

	}

}

exports.extSales = function (req, res) {
	Model.products.findAll({
		include: [{
			model: Model.orders, required: true
		}]
	}).then(function(data) {
		methods.mapping(data, function(result) {
			// console.log(result)
		})

		res.json(data)
	})
}



