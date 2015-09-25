// API wrapper to get edmodo results in angular
var Carousel3D = angular.module('Carousel3D', ['ngTouch'])

Carousel3D.factory('builder', [ '$window', function($window){

	var transformProp = Modernizr.prefixed('transform');

	function Carousel3D ( el ) {
		this.element = angular.element(angular.element(el).find('div'));
		this.rotation = 0;
		this.panelCount = 0;
		this.totalPanelCount = this.element.children().length;
		this.theta = 0;

		this.isHorizontal = true;

	}

	Carousel3D.prototype.modify = function() {

		var panel, angle, i;
		if (this.isHorizontal) {
			this.panelSize = this.element.outerWidth();
		} else {
			this.panelSize = this.element.outerHeight();
		}
		this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
		this.theta = 360 / this.panelCount;

		// do some trig to figure out how big the carousel
		// is in 3D space
		this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );

		for ( i = 0; i < this.panelCount; i++ ) {
			panel = angular.element(this.element.children()[i]);
			angle = this.theta * i;
			panel.css('opacity', 1);
			panel.css('background-color', 'hsla(' + angle + ', 100%, 50%, 0.9)');
			// rotate panel, then push it out in 3D space
			panel.css('transform', this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)');
		}

		// hide other panels
		for (var i = 0 ; i < this.totalPanelCount; i++ ) {
			panel = angular.element(this.element.children()[i]);
			panel.css('opacity', 1);
			panel.css('transform','none');
		}

		// adjust rotation so panels are always flat
		this.rotation = Math.round( this.rotation / this.theta ) * this.theta;

		this.transform();

	};

	Carousel3D.prototype.transform = function() {
		// push the carousel back in 3D space,
		// and rotate it
		this.element.css('transform', 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)');
	};

	return Carousel3D;

}])


Carousel3D.directive('carousel3d', [ '$window', 'builder', '$document',
	function($window, builder, $document){
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			carousel: '=',
			rotate: '='
		},
		link: function($scope, element, attrs) {

			var carousel = new builder(element);
			var container = angular.element(element).children()[0];
			angular.element(container).css('height', $window.innerHeight * attrs.percentHeight || 0.8)

			$scope.rotate = function(increment){
				carousel.rotation += carousel.theta * increment * -1;
				carousel.transform();
			}

			$scope.toggleAxis = function(){
				carousel.isHorizontal = !carousel.isHorizontal;
				carousel.modify();
			}

			$scope.changeNumberOfPanels = function(numPanels){
				carousel.panelCount = numPanels || $scope.panelCount;
				carousel.modify();
			}

			$scope.toggleBackface = function(){
				carousel.element.toggleClass('panels-backface-invisible');
			}

			setTimeout( function(){
				// populate on startup
				$scope.changeNumberOfPanels($scope.carousel.length);
				angular.element(element).addClass('ready');
			}, 0);

		},
		templateUrl: '/partials/carousel.html'
	};

}])