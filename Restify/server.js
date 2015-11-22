var restify = require('restify');
var restaurant = require("./restaurants.js");
var user = require("./users.js");
var reviews = require("./reviews.js");

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/restaurants', restaurant.getRestaurants);
server.get('/restaurants/:name', restaurant.getRestaurantByID);

server.get('/reviews', reviews.getReviews);
server.post('/reviews', reviews.postReview);

server.get('/users', user.getUsers);
server.get('/users/:name', user.getUserByID);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});