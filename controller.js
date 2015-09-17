var Model = require('./models')

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



