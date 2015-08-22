angular.module('capstone')

.factory('Authorize', function($http, $location, $rootScope, $cookieStore) {
	$rootScope.currentUser = $cookieStore.get('user')
	$cookieStore.remove('user')
	return {

		login: function(user) { 
			return $http.post('/api/login', user)
				.success(function(data) {
					$rootScope.currentUser = data;
					console.log('logged in')
					console.log(data)
				})
				.error(function() {
					console.log('no dice on the login')
				});
		},

		signup: function(user) {
			return $http.post('/api/signup', user)
				.success(function(data) {
					$rootScope.currentUser = data;
					$location.path('/login');
					
					console.log('you made a new account')
				})
				.error(function(res) {
					console.log('something went wrong')
				});
		},

		logout: function() {
			return $http.post('/api/logout')
				.success(function() {
					$rootScope.currentUser = null
					$cookieStore.remove('user');		
					console.log('logged out')
				});
		}
	}
})

.factory('Add', function($http, $location, $rootScope) {
	return {

		addBundle: function(data) { 
			console.log(data)
			return $http.post('/api/bundle', data)
				.success(function(data) {
					$rootScope.bundle = data; // CREATE A SERVICE TO SEND THIS TO
					console.log('scraped')
					console.log(data)
				})
				.error(function() {
					console.log('no dice on the scrape')
				});
		}
	}
})

.factory('Bundles', function($http, $location, $resource) {
		return $resource('/api/bundle/:id')
})

.factory('BundlesD', function($http, $location, $resource) {
		return $resource('/api/bundle/:id', {}, {
		delete: {method: 'DELETE', params: {id: '@id'}}
		})
})