var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function AjaxSpider(config) {
	this.config = config;
}

AjaxSpider.prototype.scan = function scan() {
	var params = [
		{
			key: "apikey",
			value: this.config.apiKey
		},
      {
      	key: "url",
      	value: this.config.target
      },
      {
      	key: "inScope",
      	value: ""
      }
	];

	this.config.component = "ajaxSpider";
	this.config.operationType = "action";
	this.config.operationname = "scan";
	this.config.params = params;

	return clientapi.callApi(this.config);
};

AjaxSpider.prototype.status = function status() {
	this.config.component = "ajaxSpider";
	this.config.operationType = "view";
	this.config.operationname = "status";

	return clientapi.callApi(this.config);
};

module.exports = AjaxSpider;