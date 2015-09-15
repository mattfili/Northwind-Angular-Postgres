angular.module('Northwind')

// .factory('Commercial', function($resource, $http) {
// 	return $resource('/api/getOne', {})
// })

.factory('simpleAPI', function ($http) {
	return {
		getDynamic: function (params, cb) {
			$http
				.post('/api/dynamic', {
					base: params.base,
					join: params.join || null
				}).then(function(result) {
					cb(result)
				})
		}
	}
})
