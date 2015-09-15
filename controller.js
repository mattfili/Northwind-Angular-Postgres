var Model = require('./models')

// exports.getProducts = function (req, res) {
// 	Models.products.findAll({ 
// 	  include: [
// 	    {model: Model.categories, 
// 	  include: [
// 	    {model: Model.suppliers}
// 	     ]}
// 	    ]
// 	}).then(function (data) {
// 		console.log(data);
// 		res.json(data[0]);
// 	});
// }


exports.getDynamic = function(req, res) {
	var baselineTable = req.body.table 
	console.log(baselineTable)

	Model[baselineTable].findAll().then(function (data) {

		console.log(data)
		res.json(data);
	})

}
