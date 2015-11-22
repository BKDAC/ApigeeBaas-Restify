request = require('request');
var async = require('async');
var config = require("./config.js");

module.exports = {
getReviews: getReviews,
postReview: postReview
}
 
function getReviews (req, res,next) {
	var qs = "";
	if (req.query.restID) {
		var restID = req.query.restID;
		qs = "?ql=restID=" + restID;
	} else if (req.query.rating) {
		var rating = req.query.rating;
		qs = "?ql=rating=" + rating;
	} else if (req.query.reviewer) {
		var reviewer = req.query.reviewer;
		qs = "?ql=reviewer=" + reviewer;
	}
	request(config.UG + '/reviews' + qs, function(error, response, body) {
		if (error) {
			res.send(error);
			return next();
		} else {
			res.send(body);
			return next();
		}
	});
}
 
function postReview (req, res,next) {
	request.post(config.UG + '/reviews', {
		form: JSON.stringify(req.body)
		}, function(error, response, body) {
		if(error) {
			res.send(error);
			return next();
		} else {
			res.send(body);
			return next();
		}
	});
}