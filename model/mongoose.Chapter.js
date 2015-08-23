var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var chapterSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	tags: [String],
	rating: Number,
	ratingCount: Number,
	description: String,
	bundles: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Bundle'
	}]
})

var Chapter = mongoose.model('Chapter', chapterSchema, 'Chapter')

module.exports = Chapter

	// content: [{
	// 	contentCount: Number,
	// 	contentIds: mongoose.Schema.Types.ObjectId, ref: 'Bundle'
	// }]