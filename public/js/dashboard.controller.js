'use strict';

angular.module('Northwind').controller('dashController', function ($scope, $q, simpleAPI) {
	var vm = this;

	vm.table = { base: '', join: '' };

	vm.dbHeaders = {
		base: ['products', 'orders', 'customers', 'suppliers', 'categories', 'shippers']
	};

	vm.submit = function (table) {
		simpleAPI.getDynamic(table, function (data) {
			console.log(data);
			vm.data = data;
		});
	};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9kYXNoYm9hcmQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBRTFCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO0FBQzlELEtBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxHQUFFLENBQUMsS0FBSyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUE7O0FBRS9CLEdBQUUsQ0FBQyxTQUFTLEdBQUc7QUFDZCxNQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUNoRixDQUFBOztBQUVELEdBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDNUIsV0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDM0MsVUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQixLQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtHQUNkLENBQUMsQ0FBQztFQUNILENBQUE7Ozs7Ozs7Ozs7OztDQWNELENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvanMvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnTm9ydGh3aW5kJylcblxuLmNvbnRyb2xsZXIoJ2Rhc2hDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgJHEsIHNpbXBsZUFQSSkge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdHZtLnRhYmxlID0ge2Jhc2U6ICcnLCBqb2luOiAnJ31cblxuXHR2bS5kYkhlYWRlcnMgPSB7XG5cdFx0YmFzZTogWydwcm9kdWN0cycsICdvcmRlcnMnLCAnY3VzdG9tZXJzJywgJ3N1cHBsaWVycycsICdjYXRlZ29yaWVzJywgJ3NoaXBwZXJzJ11cblx0fSBcblxuXHR2bS5zdWJtaXQgPSBmdW5jdGlvbiAodGFibGUpIHtcblx0XHRzaW1wbGVBUEkuZ2V0RHluYW1pYyh0YWJsZSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHR2bS5kYXRhID0gZGF0YVxuXHRcdH0pO1xuXHR9XG5cblxuXHQvLyAkc2NvcGUuZ3JpZE9wdGlvbnMgPSB7XG4gLy8gICAgZW5hYmxlR3JpZE1lbnU6IHRydWUsXG4gLy8gICAgZGF0YTogdm0uZGF0YVxuIC8vICAgIC8vIGltcG9ydGVyRGF0YUFkZENhbGxiYWNrOiBmdW5jdGlvbiAoIGdyaWQsIG5ld09iamVjdHMgKSB7XG4gLy8gICAgLy8gICB2bS5kYXRhID0gJHNjb3BlLmRhdGEuY29uY2F0KCBuZXdPYmplY3RzICk7XG4gLy8gICAgLy8gfSxcbiAvLyAgICAvLyBvblJlZ2lzdGVyQXBpOiBmdW5jdGlvbihncmlkQXBpKXtcbiAvLyAgICAvLyAgICRzY29wZS5ncmlkQXBpID0gZ3JpZEFwaTtcbiAvLyAgICAvLyB9XG4gLy8gIH07XG5cbn0pO1xuIl19
