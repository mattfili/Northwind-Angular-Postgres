var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var sectionSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	tags: [String],
	rating: Number,
	ratingCount: Number,
	description: String
})

var Section = mongoose.model('Section', sectionSchema)

module.exports = Section

	// content: [{
	// 	contentCount: Number,
	// 	contentIds: mongoose.Schema.Types.ObjectId, ref: 'Bundle'
	// }]