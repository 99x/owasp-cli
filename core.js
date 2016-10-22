var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Core(config) {
	this.config = config;
}

Core.prototype.htmlreport = function scan() {
	var params = [
		{
			key: "apikey",
			value: this.config.apiKey
		}
	];

	this.config.format = "OTHER";
	this.config.component = "core";
	this.config.operationType = "other";
	this.config.operationname = "htmlreport";
	this.config.params = params;

	return clientapi.callApi(this.config);
};

module.exports = Core;