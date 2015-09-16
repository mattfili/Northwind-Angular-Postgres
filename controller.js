var Model = require('./models')

exports.getDynamic = function(req, res) {
	var baselineTable = req.body.base 
	var joinTable = req.body.join 

	console.log(joinTable.length)

	if (joinTable.length < 1) {
	
		Model[baselineTable].findAll()
		.then(function (data) {
			res.json(data)
		})

	} else {
		
		Model[baselineTable].findAll({
			 include: [ Model[joinTable] ] 
		}).then(function (data) {
			res.json(data)
		})

	}

}
