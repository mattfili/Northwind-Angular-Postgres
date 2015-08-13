angular.module('FFF', ['ui.router','foundation', 'foundation.common', 'ngAnimate'])

.constant('FIRE_URL', 'https://filifamfotos.firebaseIO.com')

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false
	});

	$stateProvider
	.state('start', {
	    abstract: true,
	    templateUrl: 'assets/landing.html',
  	})
	.state('start.dash', {
		url: '/landing',
	    views: {
	      'feature': {
	        templateUrl: 'assets/featurepics.html',
	        controller: 'featureController'
	      }
	    }
	})
})

.directive('colorwheel', function (FIRE_URL) {
	directive = {
		link: link,
      	restrict: 'EA',
      	require: '?ngModel'
	}
	ngColorwheelDirective = function(scope, elem, attrs, ngModelCtrl) {
	      var cw, init, options, toView, updateModel;
	      if ((typeof Raphael !== "undefined" && Raphael !== null ? Raphael.colorwheel : void 0) == null) {
	        return;
	      }
	      options = null;
	      try {
	        options = scope.$eval(attrs.ngColorwheel);
	      } catch (_error) {
	        console.log('ERROR ON PARSING JSON-string:', attrs.ngColorwheel);
	      }
	      if (options == null) {
	        options = {};
	      }
	      if (options.size == null) {
	        options.size = 150;
	      }
	      cw = null;
	      init = function() {
	        cw = Raphael.colorwheel(elem[0], options.size, options.segments);
	        ngModelCtrl.$formatters.push(toView);
	        return cw.onchange(updateModel);
	      };
	      toView = function(modelValue) {
	        if (modelValue != null) {
	          cw.color(modelValue);
	        }
	        return modelValue;
	      };
	      updateModel = function(color) {
	        return ngModelCtrl.$setViewValue(color.hex);
	      };
	      init();
	}

	return directive;
    
});