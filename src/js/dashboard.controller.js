angular.module('Northwind')

.controller('dashController', function ($scope, $q, simpleAPI) {
	var vm = this;

	vm.table = {base: '', join: ''}

	vm.dbHeaders = {
		base: ['products', 'orders', 'customers', 'suppliers', 'categories', 'shippers']
	} 

	vm.submit = function (table) {
		simpleAPI.getDynamic(table, function (data) {
			console.log(data)
			vm.data = data
		});
	}


	// $scope.gridOptions = {
 //    enableGridMenu: true,
 //    data: vm.data
 //    // importerDataAddCallback: function ( grid, newObjects ) {
 //    //   vm.data = $scope.data.concat( newObjects );
 //    // },
 //    // onRegisterApi: function(gridApi){
 //    //   $scope.gridApi = gridApi;
 //    // }
 //  };

});
