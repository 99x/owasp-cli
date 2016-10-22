var fs = require('fs');

var Spider = require('./spider');
var AjaxSpider = require('./ajaxspider');
var Core = require('./core');

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
	format: format
};

var spider = new Spider(config);
var ajaxSpider = new AjaxSpider(config);
var core = new Core(config);

var interval;
SpiderScan(config);

function SpiderScan(config) {
	console.log("Scanning " + config.target);
	spider.scan().then(
				function (result) {
					console.log(result);
					interval = setInterval(function () { CheckSpiderScanStatus(result.scan); }, 5000);
				},
				function (error) {
					console.log(error);
				});
}

function CheckSpiderScanStatus(scanId) {
	spider.status(scanId).then(
				function (result) {
					console.log(JSON.parse(result));

					if (JSON.parse(result).status == "100") {
						clearInterval(interval);
						console.log("Spider scan completed.");
						console.log("Starting ajax spider scan...");
						AjaxSpiderScan();
					}
				},
				function (error) {
					console.log(error);
				});
}

function AjaxSpiderScan() {
	ajaxSpider.scan().then(
				function (result) {
					console.log(result);

					if (JSON.parse(result).Result == "OK") {
						interval = setInterval(function () { CheckAjaxSpiderScanStatus() }, 5000);
					}
				},
				function (error) {
					console.log(error);
				});
}

function CheckAjaxSpiderScanStatus() {
	ajaxSpider.status().then(
				function (result) {
					console.log(JSON.parse(result));

					if (JSON.parse(result).status == "stopped") {
						clearInterval(interval);

						GetHTMLReport();
					}
				},
				function (error) {
					console.log(error);
				});
}

function GetHTMLReport() {
	core.htmlreport().then(
				function (result) {
					var wstream = fs.createWriteStream('result.html');
					wstream.write(result);
					wstream.end();

					console.log("result.html saved");
				},
				function (error) {
					console.log(error);
				});
}
