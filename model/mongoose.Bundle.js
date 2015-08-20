var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// REQUIRES
var bundle = require('../routes/bundle')


var bundleSchema = new mongoose.Schema({
	_id: String,
	userId: String,
	title: String,
	url: String,
	siteIcon: String,
	siteName: String,
	ogImg: String,
	description: String,
	tags: [String],
	rating: Number,
	ratingCount: Number
})

var Bundle = mongoose.model('Bundle', bundleSchema)

module.exports = Bundle

	// subscribers: [{
	// 	type: mongoose.Schema.Types.ObjectId, ref: 'User'
	// }],
	// sections: [{
	// 	sectionCount: Number,
	// 	sectionIds: mongoose.Schema.Types.ObjectId, ref: 'Section'
	// }]