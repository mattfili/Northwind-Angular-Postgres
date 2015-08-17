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