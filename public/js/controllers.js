//INDEX PAGE CONTROLLER
edmodo.controller('mainController', ['$scope', '$http', '$location', 'config', 'edmodoApi', '$window',
	function($scope, $http, $location, config, edmodoApi, $window){

	 $scope.maxHeightSidebar = $window.innerHeight * 0.8;
	var edmodoAPI = new edmodoApi(null, null)
	edmodoAPI.configure();

}]);

