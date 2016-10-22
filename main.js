var Spider = require('./spider');

var target = "http://www.example.com/";
var host = "localhost";
var port = "8080";
var apiKey = "99xopenhack";
var format = "json";


var config = {
	target: target,
	host: host,
	port: port,
	apiKey: apiKey,
	format:format
};

var spider = new Spider(config);

var result = spider.scan().then(
			function (result) {
				console.log(result);
			},
			function (error) {
				console.log(error)
			});
