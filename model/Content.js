var mongoose = require('mongoose')

var contentSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	url: String,
	image: String,
	tags: [String],
	rating: Number,
	ratingCount: Number,
	description: String,
	comments: String,
	includedIn: Number
})

var User = mongoose.model('Content', contentSchema)