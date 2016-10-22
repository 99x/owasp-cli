var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Ascan(config) {
	this.config = config;
}

Ascan.prototype.scan = function scan() {
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
      	key: "recurse",
      	value: ""
      },
		{
			key: "inScopeOnly",
			value: ""
		},
      {
      	key: "scanPolicyName",
      	value: ""
      },
      {
      	key: "method",
      	value: ""
      },
		{
			key: "postData",
			value: ""
		}
	];

	this.config.component = "ascan";
	this.config.operationType = "action";
	this.config.operationname = "scan";
	this.config.params = params;

	return clientapi.callApi(this.config);
};

Ascan.prototype.status = function status(scanId) {
	var params = [
		{
			key: "scanId",
			value: scanId
		}
	];

	this.config.component = "ascan";
	this.config.operationType = "view";
	this.config.operationname = "status";

	return clientapi.callApi(this.config);
};

module.exports = Ascan;