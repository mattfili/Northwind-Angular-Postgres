'use strict';

angular.module('Northwind').controller('dashController', function ($scope, Commercial) {

	var vm = this;

	Commercial.getIt(function (result) {
		console.log(result);
		vm.data = result;
	})();

	// var _table = "Products"

	// vm.value = {
	// 	table: function (newtable) {
	// 		return arguments.length ? (_table = newtable) : _table;
	// 	}
	// }

	// var getAll = new Commercial.get();
	// vm.products = getAll.query();

	vm.table = {
		baseline: ['Products', 'Orders', 'Employees', 'Customers']
	};

	vm.getTables = function () {
		// var getIt = new Commercial.getIt();
		// vm.table = getIt.query({
		// 	table : vm.value.$modelValue
		// })
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9kYXNoYm9hcmQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBRTFCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUU7O0FBRTNELEtBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxXQUFVLENBQUMsS0FBSyxDQUFDLFVBQVMsTUFBTSxFQUFFO0FBQ2pDLFNBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkIsSUFBRSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7RUFDaEIsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjTCxHQUFFLENBQUMsS0FBSyxHQUFHO0FBQ1YsVUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO0VBQzFELENBQUE7O0FBRUQsR0FBRSxDQUFDLFNBQVMsR0FBRyxZQUFZOzs7OztFQUsxQixDQUFBO0NBRUQsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9qcy9kYXNoYm9hcmQuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdOb3J0aHdpbmQnKVxuXG4uY29udHJvbGxlcignZGFzaENvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBDb21tZXJjaWFsKSB7XG5cblx0dmFyIHZtID0gdGhpcztcblxuXHRDb21tZXJjaWFsLmdldEl0KGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdGNvbnNvbGUubG9nKHJlc3VsdClcblx0XHR2bS5kYXRhID0gcmVzdWx0XG5cdH0pKCk7XG5cblxuXHQvLyB2YXIgX3RhYmxlID0gXCJQcm9kdWN0c1wiXG5cblx0Ly8gdm0udmFsdWUgPSB7XG5cdC8vIFx0dGFibGU6IGZ1bmN0aW9uIChuZXd0YWJsZSkge1xuXHQvLyBcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoX3RhYmxlID0gbmV3dGFibGUpIDogX3RhYmxlO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cdC8vIHZhciBnZXRBbGwgPSBuZXcgQ29tbWVyY2lhbC5nZXQoKTtcblx0Ly8gdm0ucHJvZHVjdHMgPSBnZXRBbGwucXVlcnkoKTtcblxuXHR2bS50YWJsZSA9IHtcblx0XHRiYXNlbGluZTogWydQcm9kdWN0cycsICdPcmRlcnMnLCAnRW1wbG95ZWVzJywgJ0N1c3RvbWVycyddXG5cdH1cblxuXHR2bS5nZXRUYWJsZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gdmFyIGdldEl0ID0gbmV3IENvbW1lcmNpYWwuZ2V0SXQoKTtcblx0XHQvLyB2bS50YWJsZSA9IGdldEl0LnF1ZXJ5KHtcblx0XHQvLyBcdHRhYmxlIDogdm0udmFsdWUuJG1vZGVsVmFsdWVcblx0XHQvLyB9KVxuXHR9XG5cbn0pO1xuIl19
