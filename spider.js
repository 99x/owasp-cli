var ClientApi = require('./clientapi');

function Spider(config) {
	this.config = config;
}

Spider.prototype.viewScans = function viewScans() {
	var params = {
		component: "spider",
		controller: "view",
		action: "scans",
	};

	var clientapi = new ClientApi(this.config);
	return clientapi.callApi(params);
};

module.exports = Spider;