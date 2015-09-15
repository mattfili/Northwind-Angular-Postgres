var Model = require('./models')

exports.getDynamic = function(req, res) {
	var baselineTable = req.body.base 
	var joinTable = req.body.join

	console.log(baselineTable)
	console.log(joinTable)

	Model[baselineTable].findAll({
		 include: [ Model[joinTable] ] 
	}).then(function (data) {
		console.log(data)
		res.json(data);
	})

}
