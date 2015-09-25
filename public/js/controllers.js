//INDEX PAGE CONTROLLER
edmodo.controller('mainController', ['$scope', '$http', '$location', 'config', 'edmodoApi', '$window',
	function($scope, $http, $location, config, edmodoApi, $window){

	var edmodoAPI = new edmodoApi(null, null)
	edmodoAPI.configure();

}]);

