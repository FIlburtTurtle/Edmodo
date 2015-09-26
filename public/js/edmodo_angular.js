// API wrapper to get edmodo results in angular
var EdmodoAngular = angular.module('EdmodoAngular', [])

EdmodoAngular.factory('edmodoApi', ['$http', function($http){

	function api(client_id, client_secret){
		this.client_id = client_id
		this.client_secret = client_secret
	}

	api.prototype.configure = function()
	{
		console.log('configured : waiting for client_id')
	}

	api.prototype.getAssignments = function(options, callback)
	{
		var base_endpoint = "https://api.edmodo.com/assignments?" + 
							"access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d"
		if (options.page === undefined || options.page === null) {
			base_endpoint = base_endpoint + '&page=' + options.page
		}
		if (options.per_page) {
			base_endpoint = base_endpoint + '&per_page=' + options.per_page
		}
		$http.get(base_endpoint)
			.success(function(result){
				callback(result)
			})
			.error(function(err){
				console.log(err);
				callback(err)
			})
	}

	api.prototype.getSubmissions = function(options, callback)
	{
		if (!options.assignment_id) return null;
		var base_endpoint = "https://api.edmodo.com/assignment_submissions?" + 
							"assignment_id=" + options.assignment_id + "&" + 
							"assignment_creator_id=73240721&" + 
							"access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d"
		if (options.page === undefined || options.page === null) {
			base_endpoint = base_endpoint + '&page=' + options.page
		}
		if (options.per_page) {
			base_endpoint = base_endpoint + '&per_page=' + options.per_page
		}
		$http.get(base_endpoint)
			.success(function(result){
				callback(result)
			})
			.error(function(err){
				console.log(err);
				callback(err)
			})	
	}

	return api

}])