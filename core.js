var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Core(config) {
	this.config = config;
}

Ascan.prototype.htmlreport = function scan() {
	var parasms = {
	};

	return clientapi.callApi(params);
};

module.exports = Core;