angular.module('Northwind')

.controller('dashController', function ($scope, Commercial) {

	var vm = this;

	var _table = "Products"

	vm.value = {
		table: function (newtable) {
			return arguments.length ? (_table = newtable) : _table;
		}
	}

	// var getAll = new Commercial.get();
	// vm.products = getAll.query();

	vm.table = {
		baseline: ['Products', 'Orders', 'Employees', 'Customers']
	}

	vm.getTables = function () {
		var getIt = new Commercial.getIt();
					console.log(vm.value.$modelValue)
		vm.table = getIt.query({
			table : vm.value.$modelValue
		})
	}

});
