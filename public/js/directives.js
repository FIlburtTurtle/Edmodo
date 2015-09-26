//list panel directive
edmodo.directive('listpanel',['$window', function($window){
	return {
		restrict : 'E',
		scope : {
			list : '=',
			paneltitle : '=',
			rotate : '=',
			rotateto : '='
		},
		templateUrl : '/partials/listPanel.html',
		link: function($scope, $element, attr){
			var sidebar = angular.element($element.children()[1]);
			var max_height = $window.innerHeight * Number(attr.maxPercent || 0.85);
			angular.element(sidebar).css('max-height', max_height + 'px')
		}
	}
}]);