angular.module('Northwind')

.factory('Commercial', function($resource) {
	return {
		get: function() {
		return $resource ('/api/products');
		}
	}
})
