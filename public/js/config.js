
var edmodo = angular.module('edmodo', ['ngRoute']);

//Config factory to hold application wide settings
edmodo.factory('config', ['$http', function($http){

	var factory = {};
	factory.uri_root = '/api';
	return factory;

}]);


