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
	var attributes = ['ProductName']
	var subattributes = ['OrderDate', 'CustomerID', 'EmployeeID', 'ShipCountry', 'ShipName']

	Model.products.findAll({
		attributes: attributes,
		include: [{ 
			model: Model.orders, 
			required: true, 
			attributes: subattributes,
			where: { OrderDate: {$between: [new Date('1996-01-01'), new Date('1996-12-31')]}}
		}]
	}).then(function(product) {

		var data = Sequelize.getValuesDedup(product)



		return methods.mergeObjects(data)
	}).then(function(result) {

		res.send(result)
	})

}





 	





