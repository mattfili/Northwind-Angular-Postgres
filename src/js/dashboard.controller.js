angular.module('Northwind')

.controller('dashController', function ($scope, $q, simpleAPI) {
	var vm = this;

	vm.table = {base: '', join: ''}

	// vm.data = Commercial.query().$promise.then(function (result) {
	// 	return result;
	// })

	vm.submit = function (table) {
		simpleAPI.getDynamic(table, function(data) {
			console.log(data)
			vm.data = data
		});
	}

});
