'use strict';
//INDEX PAGE CONTROLLER
edmodo.controller('mainController', ['$scope', '$http', '$location', 'config', 'edmodoApi', '$window', 'SweetAlert',
	function($scope, $http, $location, config, edmodoApi, $window, SweetAlert){

	$scope.assignments = [1,1,1]
	$scope.loading = true;
	$scope.today = moment().format("YYYY-MM-DD");

	var edmodoAPI = new edmodoApi(null, null)
	edmodoAPI.getAssignments({page : 1, per_page : 100 }, function(result){
		if (result.length < 2) {
			result.push({new_tab : true})
		};
		console.log(result);
		result.push({new_tab : true})
		$scope.assignments = result;
		$scope.loading = false;
		$scope.initialize();
		setTimeout(function(){
			$scope.loadingFinished = true;
			$scope.$apply();
		}, 100)
	});


	$scope.findIndex = function(id){
		for (var i = 0; i < $scope.assignments.length; i++) {
			if($scope.assignments[i].id === Number(id)){
				return i;
			}
		};
		return null
	}


	$scope.initialize = function(){
		var assignment_id = $location.search().assignment_id
		if (assignment_id && !isNaN(assignment_id)) {
			var index = $scope.findIndex(assignment_id)
			if (!isNaN(index)) {
				$scope.rotateto(index)
				$location.search('assignment_id', assignment_id)
			};
		};
	}

	$scope.addAssignment = function(){
		var assignment = {
			title : $scope.title,
			date : moment($scope.date).format(),
			description : $scope.description
		}
		if (!assignment.title || !assignment.date || !assignment.description){
			SweetAlert.swal("Please fill in all fields!");
			return;
		};
		$scope.modal = false;
		$scope.assignments.push(assignment);
		SweetAlert.swal("Assignment Added!", "Woot woot!", "success");
	}

	$scope.$on('$routeUpdate', function(){
		$scope.initialize()
	});

	function detect3d(){
		var detect = document.createElement("div");
		detect.style.transformStyle = "preserve-3d";
		if (detect.style.transformStyle.length > 0) {
		  console.log('supports 3d');
		} else {
			SweetAlert.swal("Internet Explorer does not support 3D tranformations " + 
							" so some features of this appliations may not work for you, " + 
							" please upgrade to Chrome or Firefox :) ");
		}
	}

	detect3d();

}]);

