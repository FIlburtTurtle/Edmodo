//Routing configuration
edmodo.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		
	$routeProvider

		.when('/',
		{
			controller : 'mainController',
			templateUrl:'/partials/main.html',
			reloadOnSearch: false
		})

		.otherwise(
		{
			controller : 'mainController',
			templateUrl: '/partials/main.html',
			reloadOnSearch: false
    	});

    $locationProvider.html5Mode(true);

}]);
