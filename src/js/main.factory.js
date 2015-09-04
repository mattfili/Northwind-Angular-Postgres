angular.module('Northwind')

.factory('Add', function($http, $location, $rootScope) {
	return {

		addBundle: function(data) { 
			console.log('DATA COMING IN FROM ADD FORM')
			console.log(data)
			return $http.post('/api/bundle', data)
				.success(function(data) {
					console.log('DATA RETURNED BY ENDPOINT')
					console.log(data)
				})
				.error(function() {
					console.log('no dice on the scrape')
				});
		},

		addStory: function(data) { 
			console.log('DATA COMING IN FROM ADD STORY FORM')
			console.log(data)
			return $http.post('/api/story', data)
				.success(function(data) {
					console.log('DATA RETURNED BY ENDPOINT')
					console.log(data)
				})
				.error(function() {
					console.log('Error, story not added')
				});
		}

	}
})

.factory('Bundles', function($http, $location, $resource) {
		return {
			getAll: function() {
				return $resource('/api/bundle')
			},


			deleteOne: function() {
				return $resource('/api/bundle/:id', {id: '@id'})
			}
		}
})

