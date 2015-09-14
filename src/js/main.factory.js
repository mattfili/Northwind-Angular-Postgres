angular.module('Northwind')

.factory('Commercial', function($resource, $http) {
	return {
		get: function() {
		return $resource ('/api/products');
		},

		getIt: function(cb) {
			$http
				.get('/dapi')
				.success(function(result) {
					cb(result)
				})
		}
})
