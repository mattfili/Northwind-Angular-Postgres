var Model = require('./models')

console.log(Model.orders)

exports.getStuff = function(req, res) {
	Model.suppliers.findAll({include: [Model.products]})
		.then(function (orders) {
			res.json(orders);
		});
}
