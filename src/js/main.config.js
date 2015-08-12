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

.factory('Fire', function (FIRE_URL) {
	return {

	}
});