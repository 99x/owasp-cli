var request = require("request");
var Promise = require("bluebird");

function ClientApi(config) {
	this.config = config;
}

ClientApi.prototype.callApi = function callApi(params) {
	var obj = this;
	return new Promise(function (resolve, reject) {
		request(buildUrl(obj.config, params), function (error, response, body) {
			if (error) reject(error);
			resolve(body);
		});
	})
};

function buildUrl(config, params) {
	return "http://localhost:8080/JSON/spider/view/scans/?zapapiformat=JSON&apikey=99xopenhack";
};

module.exports = ClientApi;