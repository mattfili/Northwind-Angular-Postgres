'use strict';

angular.module('Northwind').controller('dashController', function ($scope, Commercial) {

	var vm = this;

	Commercial.getIt(function (result) {
		console.log(result);
		vm.data = result;
	});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9kYXNoYm9hcmQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBRTFCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUU7O0FBRTNELEtBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxXQUFVLENBQUMsS0FBSyxDQUFDLFVBQVMsTUFBTSxFQUFFO0FBQ2pDLFNBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkIsSUFBRSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7RUFDaEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBY0gsR0FBRSxDQUFDLEtBQUssR0FBRztBQUNWLFVBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztFQUMxRCxDQUFBOztBQUVELEdBQUUsQ0FBQyxTQUFTLEdBQUcsWUFBWTs7Ozs7RUFLMUIsQ0FBQTtDQUVELENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvanMvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnTm9ydGh3aW5kJylcblxuLmNvbnRyb2xsZXIoJ2Rhc2hDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgQ29tbWVyY2lhbCkge1xuXG5cdHZhciB2bSA9IHRoaXM7XG5cblx0Q29tbWVyY2lhbC5nZXRJdChmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpXG5cdFx0dm0uZGF0YSA9IHJlc3VsdFxuXHR9KTtcblxuXG5cdC8vIHZhciBfdGFibGUgPSBcIlByb2R1Y3RzXCJcblxuXHQvLyB2bS52YWx1ZSA9IHtcblx0Ly8gXHR0YWJsZTogZnVuY3Rpb24gKG5ld3RhYmxlKSB7XG5cdC8vIFx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfdGFibGUgPSBuZXd0YWJsZSkgOiBfdGFibGU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0Ly8gdmFyIGdldEFsbCA9IG5ldyBDb21tZXJjaWFsLmdldCgpO1xuXHQvLyB2bS5wcm9kdWN0cyA9IGdldEFsbC5xdWVyeSgpO1xuXG5cdHZtLnRhYmxlID0ge1xuXHRcdGJhc2VsaW5lOiBbJ1Byb2R1Y3RzJywgJ09yZGVycycsICdFbXBsb3llZXMnLCAnQ3VzdG9tZXJzJ11cblx0fVxuXG5cdHZtLmdldFRhYmxlcyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyB2YXIgZ2V0SXQgPSBuZXcgQ29tbWVyY2lhbC5nZXRJdCgpO1xuXHRcdC8vIHZtLnRhYmxlID0gZ2V0SXQucXVlcnkoe1xuXHRcdC8vIFx0dGFibGUgOiB2bS52YWx1ZS4kbW9kZWxWYWx1ZVxuXHRcdC8vIH0pXG5cdH1cblxufSk7XG4iXX0=
