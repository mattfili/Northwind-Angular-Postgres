
// var sequelize = new Sequelize('Southwind', 'Fili')
var Model = require('./models')

exports.getProducts = function(req, res) {
	Model.products.findAll({raw: true}).then(function(products) {
		res.json(products)
	})
} 