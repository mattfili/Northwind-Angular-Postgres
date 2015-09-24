var Model = require('./models')
var methods = require(__dirname + '/convenience')
var Sequelize = require('sequelize-values')();
var _ = require('lodash');

exports.getDynamic = function(req, res) {
	var baselineTable = req.body.base 
	var joinTable = req.body.join 

	// console.log(req.body)

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

// var postAssociations = [
// 	{
// 		model: products
// 	},
// 	{
// 		model: orders,
// 		include: [{
// 			model: order_details
// 		}]
// 	}
// ]



exports.extSales = function (req, res) {

	// var postAssociations = [{
	// 	model: Model.orders,
	// 	include: [{
	// 		model: Model.order_details
	// 	}]
	// }]


	Model.products.findAll({
		include: [{ 
			model: Model.orders, required: true
		}]
	}).then(function(product) {
		var data = Sequelize.getValuesDedup(product)

		methods.mergeDuplicates(data, function (result) {
			res.send(result)
		})
	})

}





 	





