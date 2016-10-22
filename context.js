var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Context(config) {
	this.config = config;
}

Context.prototype.newContext = function scan() {
	var params = [
		{
			key: "apikey",
			value: this.config.apiKey
		},
		{
			key: "contextName",
			value: this.config.contextName
		}
	];

	this.config.format = "json";
	this.config.component = "context";
	this.config.operationType = "action";
	this.config.operationname = "newContext";
	this.config.params = params;

	return clientapi.callApi(this.config);
};

module.exports = Context;