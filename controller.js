var models = require(__dirname + '/models')

console.log(models.orders)

exports.getStuff = function(req, res) {
	modles.orders.findAll({raw: true, logging: true})
		.then(function (result) {
			console.log(result)
			res.json(result);
		});
}

// exports.grab = function (req, res) {
// 	modles.orders
// 		.findAll()
// 		.then(function (result) {
// 			console.log(result)
// 			res.send(result);
// 		});
// }

// exports.getProducts = function(req, res) {
// 	Model.products.findAll({raw: true}).then(function(products) {
// 		res.json(products)
// 	})
// } 