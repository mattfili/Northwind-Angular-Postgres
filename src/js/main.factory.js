angular.module('Northwind')

.factory('simpleAPI', function ($http) {
	return {
		getDynamic: function (params, cb) {
			$http
				.post('/api/dynamic', {
					base: params.base,
					join: params.join
				}).then(function(result) {
					cb(result)
				})
		},

		extSalesMetrics: function (cb) {
			$http
				.get('/api/ext/sales')
				.success(function(result) {
					cb(result)
				})
		}
	}
})

