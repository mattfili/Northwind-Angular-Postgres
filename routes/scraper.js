var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Xray = require('x-ray'); // use to follow image to convert to base 64 - not implemented
var x = Xray(); // use to follow image to convert to base 64 - not implemented
var async = require('async');
var _ = require('lodash');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID

// REQUIRES
var Bundle = require('../model/mongoose.Bundle')

router.post('/bundle', function (req, res, next) {
	var basicBundleData = {
		title: '',
		url: ''
	}

	basicBundleData.url = req.body.url
	userId = req.body.userId
	console.log(userId)

	async.waterfall([

		function(callback) {
			request.get(basicBundleData.url, function (error, response, html) {
				if (error) return next(error);

				var $ = cheerio.load(html, {
					normalizeWhitespace: false,
    				xmlMode: false,
   					decodeEntities: true
				});

				//jsonobject to store
				var json = { siteIcon: '', ogTitle : '', ogImg : '', ogSiteName: '', ogDescription: ''};
				
				// scrape for siteIcon
				json.siteIcon = 'http://www.google.com/s2/favicons?domain=' + basicBundleData.url

				// scrape for page title
				if ($('meta[property="og:title"]').attr("content")) {
					json.ogTitle = $('meta[property="og:title"]').attr("content")
				} else {
					json.ogTitle = $('head').children('title').text()
				}
				// scrape for page image
				if ($('meta[property="og:image"]').attr("content")) {
					json.ogImg = $('meta[property="og:image"]').attr("content")
				} else {
					json.ogImg = 'http://lorempixel.com/500/500'
				}

				// scrape for main site name
				if ($('meta[property="og:site_name"]').attr("content")) {
					json.ogSiteName = $('meta[property="og:site_name"]').attr("content")
				} else {
					json.ogSiteName = $('meta[name="description"]').attr("content")
				}

				// scrape for page description
				if ($('meta[property="og:description"]').attr("content")) {
					json.ogDescription = $('meta[property="og:description"]').attr("content")
				} else {
					// get random image 
					json.ogDescription = ''
				}

			var bundle = new Bundle({
				_id: new ObjectID(),
				userId: userId,
				title: json.ogTitle,
				url: basicBundleData.url,
				siteName: json.ogSiteName,
				siteIcon: json.siteIcon,
				ogImg: json.ogImg,
				description: json.ogDescription
			})

			callback(error, bundle)

			})
		}

	], function (err, bundle) {
		console.log(bundle)
		if (err) return next(err);
		bundle.save(function(err){
			if (err) {
				return next(err)
			} 
		})
		res.send(bundle)
	})

})

module.exports = router;