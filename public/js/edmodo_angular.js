// API wrapper to get edmodo results in angular
var EdmodoAngular = angular.module('EdmodoAngular', [])

EdmodoAngular.factory('edmodoApi', ['$http', function($http){

	function api(client_id, client_secret){
		this.client_id = client_id;
		this.client_secret = client_secret
	}

	api.prototype.configure = function()
	{
		console.log('configured : waiting for client_id');
	}

	api.prototype.getAssignments = function(teacher_id)
	{

	}

	api.prototype.getAssignment = function(assignment_id)
	{

	}

	return api;

}])