//Routing configuration
edmodo.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		
	$routeProvider

		.when('/',
		{
			controller : 'mainController',
			templateUrl:'/partials/main.html'
		})

		.otherwise(
		{
			controller : 'mainController',
			templateUrl: '/partials/main.html'
    	});

}]);
