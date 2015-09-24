//Routing configuration
edmodo.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		
	$routeProvider

		.when('/',
		{
			controller : 'mainController.js'
			templateUrl:'/partials/main.html'
		})

		.otherwise(
		{
			controller : 'mainController.js'
			templateUrl: '/partials/main.html'
    	});

}]);
