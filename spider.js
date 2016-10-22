var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Spider(config) {
	this.config = config;
}

Spider.prototype.scan = function scan() {
	var params = [{
      key:"apikey",
      value :this.config.apiKey   
     },
     {
      key:"url",
      value :this.config.target  
     },
      {
      key:"maxChildren",
      value :""   
     }
	 
  ];
  this.config.component="spider";
  this.config.operationType="action";
  this.config.operationname="scan";
  this.config.params = params;


	return clientapi.callApi(this.config);
};

Spider.prototype.status = function status() {
	var params = {
	};

	return clientapi.callApi(params);
};

module.exports = Spider;