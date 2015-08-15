'use strict';

angular.module('Color Wheel', ['ui.router', 'foundation', 'foundation.common', 'ngAnimate', 'directive.ngColorwheel']).constant('FIRE_URL', 'https://filifamfotos.firebaseIO.com').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false
	});

	$stateProvider.state('start', {
		abstract: true,
		templateUrl: 'assets/landing.html'
	}).state('start.dash', {
		url: '/landing',
		views: {
			'colorwheel': {
				templateUrl: 'assets/color-dash.html',
				controller: 'colorController',
				controllerAs: 'colorCtrl'
			}
		}
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBVyxFQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUVwSCxRQUFRLENBQUMsVUFBVSxFQUFFLHFDQUFxQyxDQUFDLENBRTNELE1BQU0sQ0FBQyxVQUFVLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTtBQUN4RSxtQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLG1CQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFekMsa0JBQWlCLENBQUMsU0FBUyxDQUFDO0FBQzNCLFNBQU8sRUFBRSxLQUFLO0FBQ2QsYUFBVyxFQUFFLEtBQUs7RUFDbEIsQ0FBQyxDQUFDOztBQUVILGVBQWMsQ0FDYixLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ1osVUFBUSxFQUFFLElBQUk7QUFDZCxhQUFXLEVBQUUscUJBQXFCO0VBQ25DLENBQUMsQ0FDSCxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3BCLEtBQUcsRUFBRSxVQUFVO0FBQ1osT0FBSyxFQUFFO0FBQ0wsZUFBWSxFQUFFO0FBQ1osZUFBVyxFQUFFLHdCQUF3QjtBQUNyQyxjQUFVLEVBQUUsaUJBQWlCO0FBQzdCLGdCQUFZLEVBQUUsV0FBVztJQUMxQjtHQUNGO0VBQ0osQ0FBQyxDQUFBO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6InNyYy9qcy9tYWluLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdDb2xvciBXaGVlbCcsIFsndWkucm91dGVyJywnZm91bmRhdGlvbicsICdmb3VuZGF0aW9uLmNvbW1vbicsICduZ0FuaW1hdGUnLCAnZGlyZWN0aXZlLm5nQ29sb3J3aGVlbCddKVxuXG4uY29uc3RhbnQoJ0ZJUkVfVVJMJywgJ2h0dHBzOi8vZmlsaWZhbWZvdG9zLmZpcmViYXNlSU8uY29tJylcblxuLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblx0JHVybFJvdXRlclByb3ZpZGVyLndoZW4oJycsICcvJyk7XG5cdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9sYW5kaW5nJyk7XG5cblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRyZXF1aXJlQmFzZTogZmFsc2Vcblx0fSk7XG5cblx0JHN0YXRlUHJvdmlkZXJcblx0LnN0YXRlKCdzdGFydCcsIHtcblx0ICAgIGFic3RyYWN0OiB0cnVlLFxuXHQgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvbGFuZGluZy5odG1sJyxcbiAgXHR9KVxuXHQuc3RhdGUoJ3N0YXJ0LmRhc2gnLCB7XG5cdFx0dXJsOiAnL2xhbmRpbmcnLFxuXHQgICAgdmlld3M6IHtcblx0ICAgICAgJ2NvbG9yd2hlZWwnOiB7XG5cdCAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvY29sb3ItZGFzaC5odG1sJyxcblx0ICAgICAgICBjb250cm9sbGVyOiAnY29sb3JDb250cm9sbGVyJyxcblx0ICAgICAgICBjb250cm9sbGVyQXM6ICdjb2xvckN0cmwnXG5cdCAgICAgIH1cblx0ICAgIH1cblx0fSlcbn0pXG4iXX0=
