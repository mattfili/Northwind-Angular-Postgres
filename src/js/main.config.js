angular.module('FFF', ['ui.router','foundation', 'ngAnimate'])

.constant('FIRE_URL', 'https://filifamfotos.firebaseIO.com')

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

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