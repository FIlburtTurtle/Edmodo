// API wrapper to get edmodo results in angular
var EdmodoAngular = angular.module('EdmodoAngular', [])

EdmodoAngular.factory('api', ['$http', function($http){

	function api(client_id, client_secret){
		this.client_id = client_id;
		this.client_secret = client_secret
	}

	api.prototype.configure = function(client_id, client_secret)
	{

	}

	api.prototype.getAssignments = function()
	{

	}

}])