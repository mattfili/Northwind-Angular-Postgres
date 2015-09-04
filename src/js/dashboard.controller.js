angular.module('Northwind')

.controller('dashController', function ($scope, Commercial) {

	var vm = this;

	var getAll = new Commercial.get();
	vm.products = getAll.query();


})


