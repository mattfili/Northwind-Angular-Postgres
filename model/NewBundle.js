var mongoose = require('mongoose')

var bundleSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	image: String,
	tags: [String],
	rating: Number,
	ratingCount: Number,
	description: String,
	subscribers: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}],
	sections: [{
		sectionCount: Number,
		sectionIds: mongoose.Schema.Types.ObjectId, ref: 'Section'
	}]
})

var Bundle = mongoose.model('Bundle', bundleSchema)