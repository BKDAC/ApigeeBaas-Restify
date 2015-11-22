request = require('request');
var async = require('async');
var config = require("./config.js");

module.exports = {
    getUsers: getUsers,
    getUserByID: getUserByID
};

function getUsers(req, res,next) {
    request(config.UG + '/users?limit=100', function(error, response, body) {
        if (error) {
            res.send(error);
            return next();
        } else {
            res.send(body);
            return next();
        }
    });
}

function getUserByID (req, res, next) {
	var user = req.params.name;
	request(config.UG + "/users?ql=username='" + user + "'", function(error, response, body) {
		if (error) {
			res.send(error);
			return next();
		} else {
			res.send(body);
			return next();
		}
	});
}