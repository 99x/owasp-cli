var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Ascan(config) {
	this.config = config;
}

Ascan.prototype.scan = function scan() {
	var parasms = {
	};

	return clientapi.callApi(params);
};

Ascan.prototype.status = function status() {
	var params = {
	};

	return clientapi.callApi(params);
};

module.exports = Ascan;