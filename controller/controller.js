var models = require(__dirname + '/../models')

exports.grab = function (req, res) {
	console.log(req.query)
	var baselineTable = req.query.table

	baselineTable
		.findAndCountAll({
			limit: req.query.limit || null,
			offset: req.query.offset || null,
			where: req.query.param || null
		}).success(function (data) {
			console.log(JSON.stringify(data.rows).bold.get)
			res.json({baslineTable : data.rows, meta : {total : data.count}});
		})
}