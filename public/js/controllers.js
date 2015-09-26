//INDEX PAGE CONTROLLER
edmodo.controller('mainController', ['$scope', '$http', '$location', 'config', 'edmodoApi', '$window',
	function($scope, $http, $location, config, edmodoApi, $window){

	$scope.assignments = [1,1,1]
	$scope.loading = true;

	var edmodoAPI = new edmodoApi(null, null)
	edmodoAPI.getAssignments({page : 1, per_page : 100 }, function(result){
		if (result.length < 2) {
			result.push({new_tab : true})
		};
		result.push({new_tab : true})
		$scope.assignments = result;
		$scope.loading = false;
		setTimeout(function(){
			$scope.loadingFinished = true;
			$scope.$apply();
		}, 100)
	});

}]);

