var request = require("request");
var Promise = require("bluebird");

function ClientApi(config) {
	this.config = config;
}

ClientApi.prototype.callApi = function callApi(config) {
	
	var obj = this;
	return new Promise(function (resolve, reject) {
		request(buildUrl(config), function (error, response, body) {
			if (error) reject(error);
			resolve(body);
		});
	})
};

function buildUrl(config) {
 
  var scheme ="http";
  var host = config.host;
  var Port = config.port;
  var format =config.format;
  var component =config.component;
  var operationType =config.operationType;
  var operationname= config.operationname;


  var path=scheme + "://" + host + ":" + Port + "/" + format + "/" + component + "/" + operationType + "/" + operationname + "/?"; 
  
  var query="";

  if(config.params.length > 0)
  {
      for (i = 0; i < config.params.length; i++) { 

            query += encodeURIComponent(config.params[i].key);
            query += "="
            query +=encodeURIComponent(config.params[i].value);
            query += "&"
     }
  }
  return  path += query;
};

module.exports = ClientApi;