angular.module('Northwind')

.factory('simpleAPI', function ($http) {
	return {
		getDynamic: function (params, cb) {
			('====================factory========================')
			console.log(params)
			$http
				.post('/api/dynamic', {
					base: params.base,
					join: params.join
				}).then(function(result) {
					cb(result)
				})
		}
	}
})

