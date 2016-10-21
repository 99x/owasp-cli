var Spider = require('./spider');

var target = "http://www.example.com/";
var host = "localhost";
var port = "8080";
var apiKey = "99xopenhack";

var config = {
	target: target,
	host: host,
	port: port,
	apiKey: apiKey
};

var spider = new Spider(config);

var result = spider.viewScans().then(
			function (result) {
				console.log(result);
			},
			function (error) {
				console.log(error)
			});
