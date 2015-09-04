angular.module('Northwind', ['ui.router','foundation', 'foundation.common', 'ngAnimate', 'ngCookies', 'ngResource', 'ngMessages', 'mm.foundation'])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$locationProvider.html5Mode(true);

	$stateProvider

	.state('start', {
	    abstract: true,
	    templateUrl: 'assets/landing.html',
	   	controller: 'dashController',
	    controllerAs: 'Ctrl'
  	})
  	
	.state('start.dash', {
		url: '/landing',
	    views: {
	      'dash': {
	        templateUrl: 'assets/dashboard.html'
	      },
	      'details': {
	        templateUrl: 'assets/details.html'
	      }
	    }
	})

	// .state('add', {
	// 	url: '/add',
	// 	templateUrl: 'assets/addModal.html',
	//    	controller: 'addFormController',
	//     controllerAs: 'addCtrl'
	// })


})


