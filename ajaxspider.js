var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function AjaxSpider(config) {
	this.config = config;
}

AjaxSpider.prototype.scan = function scan() {
	var parasms = {
	};

	return clientapi.callApi(params);
};

AjaxSpider.prototype.status = function status() {
	var params = {
	};

	return clientapi.callApi(params);
};

module.exports = AjaxSpider;