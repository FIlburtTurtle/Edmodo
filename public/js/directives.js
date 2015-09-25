//INDEX PAGE CONTROLLER
edmodo.directive('listpanel', function(){
	return {
		restrict : 'E',
		scope : {
			list : '=',
			title : '='
		},
		templateUrl : '/partials/listPanel.html'
	}
});
