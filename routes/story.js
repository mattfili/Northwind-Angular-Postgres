var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID
var _ = require('lodash');

// REQUIRES
var Story = require('../model/mongoose.Story')

// ROUTES
router.post('/story', function (req, res, next) {
	title = req.body.title;
	description = req.body.description;
	formTags = req.body.tags;
			
	var story = new Story({
		_id: new ObjectID(),
		// userId: userId,  ADD USER ID WHEN LINK IS READY
		title: title,
		description: description,
		tags: []
	})
	_.forEach(formTags, function(tag) {
		story.tags.push(tag.text)
	})
			
	console.log(story)

	story.save(function(err){
	if (err) return next(err)
	res.send(story)
	})
	

})

module.exports = router