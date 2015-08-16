var mongoose = require('mongoose')

var sectionSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	tags: [String],
	rating: Number,
	ratingCount: Number,
	description: String,
	content: [{
		contentCount: Number,
		contentIds: mongoose.Schema.Types.ObjectId, ref: 'Bundle'
	}]
})

var User = mongoose.model('Section', sectionSchema)