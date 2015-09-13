angular.module('Northwind')

.factory('Commercial', function($resource) {
	return {
		get: function() {
		return $resource ('/api/products');
		},

		getIt: function(table) {
			console.log(table)
			return $resource('/dapi', {
				table: table
			});
		}
	}
})
