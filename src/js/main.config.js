angular.module('Northwind', ['ui.router', 'foundation', 'foundation.common', 'ngAnimate', 'ngCookies', 'ngResource', 'ngMessages', 'mm.foundation', 'nvd3', 'ngTable'])

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

  	// start.dash is the landing page of our app, it currently has two views 
  	// (triggered by the ui-views of the respective view name on landing)
  	// as we want to create new data abstractions we can add views or other child states of 
  	// start (e.g., start.products) 
  	
	.state('start.dash', {
		url: '/landing',
	    views: {
	      'reports': {
	        templateUrl: 'assets/reports.html'
	      },
	      'marketing': {
	        templateUrl: 'assets/marketing.html'
	      }
	    }
	})

	// .state('add', {
	// 	url: '/add',
	// 	templateUrl: 'assets/addform.html',
	//    	controller: 'addFormController',
	//     controllerAs: 'addCtrl'
	// })


})


