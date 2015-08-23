var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// REQUIRES
var story = require('../routes/story')

var storySchema = new mongoose.Schema({
	_id: String,
	userId: String,
	title: String,
	tags: [String],
	rating: Number,
	ratingCount: Number,
	description: String,
	chapter: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'
	}],
	subscribers: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}]
})

var Story = mongoose.model('Story', storySchema, 'Story')

module.exports = Story
