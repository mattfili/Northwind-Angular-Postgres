angular.module('capstone', ['ui.router','foundation', 'foundation.common', 'ngAnimate', 'ngCookies', 'ngResource', 'ngMessages', 'mm.foundation','wu.masonry'])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$locationProvider.html5Mode(true);

	$stateProvider

	.state('start', {
	    abstract: true,
	    templateUrl: 'assets/landing.html',
	   	controller: 'bDashController',
	    controllerAs: 'bCtrl'
  	})
	.state('start.dash', {
		url: '/landing',
	    views: {
	      'bDash': {
	        templateUrl: 'assets/bDash.html'
	      },
	      'urlDetails': {
	        templateUrl: 'assets/details.html'
	      }
	    }
	})

	.state('add', {
		url: '/add',
		templateUrl: 'assets/addModal.html',
	   	controller: 'addFormController',
	    controllerAs: 'addCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl: 'assets/login.html',
		controller: 'loginCtrl'
	})
	.state('signup', {
		url: '/signup',
		templateUrl: 'assets/signup.html',
		controller: 'signupCtrl'
	})


})


