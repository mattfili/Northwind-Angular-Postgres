'use strict';

angular.module('Northwind')

// .factory('Commercial', function($resource, $http) {
// 	return $resource('/api/getOne', {})
// })

.factory('simpleAPI', function ($http) {
	return {
		getDynamic: function getDynamic(params, cb) {
			$http.post('/api/dynamic', {
				base: params.base,
				join: params.join || null
			}).then(function (result) {
				cb(result);
			});
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0NBTTFCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDdEMsUUFBTztBQUNOLFlBQVUsRUFBRSxvQkFBVSxNQUFNLEVBQUUsRUFBRSxFQUFFO0FBQ2pDLFFBQUssQ0FDSCxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ3JCLFFBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtBQUNqQixRQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJO0lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNLEVBQUU7QUFDeEIsTUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFBO0dBQ0g7RUFDRCxDQUFBO0NBQ0QsQ0FBQyxDQUFBIiwiZmlsZSI6InNyYy9qcy9tYWluLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnTm9ydGh3aW5kJylcblxuLy8gLmZhY3RvcnkoJ0NvbW1lcmNpYWwnLCBmdW5jdGlvbigkcmVzb3VyY2UsICRodHRwKSB7XG4vLyBcdHJldHVybiAkcmVzb3VyY2UoJy9hcGkvZ2V0T25lJywge30pXG4vLyB9KVxuXG4uZmFjdG9yeSgnc2ltcGxlQVBJJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0Z2V0RHluYW1pYzogZnVuY3Rpb24gKHBhcmFtcywgY2IpIHtcblx0XHRcdCRodHRwXG5cdFx0XHRcdC5wb3N0KCcvYXBpL2R5bmFtaWMnLCB7XG5cdFx0XHRcdFx0YmFzZTogcGFyYW1zLmJhc2UsXG5cdFx0XHRcdFx0am9pbjogcGFyYW1zLmpvaW4gfHwgbnVsbFxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdFx0XHRcdGNiKHJlc3VsdClcblx0XHRcdFx0fSlcblx0XHR9XG5cdH1cbn0pXG4iXX0=
