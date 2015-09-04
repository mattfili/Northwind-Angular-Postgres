'use strict';

angular.module('Northwind').controller('dashController', function ($scope, Bundles, Add, $http) {

	var vm = this;

	$http.get('/api/products').success(function (data, status, headers, config) {
		vm.products = data;
	}).error(function (data, status, headers, config) {
		console.log("could not get any data" + status);
	});
});

// .controller('addFormController', function ($scope, Add) {
// 	$scope.activeTab = 'Story'

// 	$scope.bundleSubmit = function() {
// 		Add.addBundle({
// 				title: $scope.title,
// 				url: $scope.url,
// 				tags: $scope.tags
// 				// userId: $rootScope.currentUser._id *** ADD WHEN CURRENTUSER IS VALIDATED
// 			}).then(function() {
// 				$scope.addBundleForm = null;
// 				$scope.title = null;
// 				$scope.url = null;
// 				$scope.tags = null;
// 			})
// 	}

// 	$scope.storySubmit = function () {
// 		Add.addStory({
// 			title: $scope.storyTitle,
// 			description: $scope.storyDescription,
// 			tags: $scope.tags
// 			// userId: $rootScope.currentUser ADD USER ID WHEN LINK IS READY
// 		}).then(function() {
// 				$scope.addStoryForm = null
// 				$scope.storyTitle = null
// 				$scope.storyTags = null
// 				$scope.storyDescription = null
// 			})
// 	}

// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9kYXNoYm9hcmQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBRTFCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTs7QUFFcEUsS0FBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUdkLE1BQUssQ0FDSCxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3JFLElBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0VBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDM0MsU0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsQ0FBQztFQUNsRCxDQUFDLENBQUE7Q0FHTCxDQUFDLENBQUEiLCJmaWxlIjoic3JjL2pzL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ05vcnRod2luZCcpXG5cbi5jb250cm9sbGVyKCdkYXNoQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIEJ1bmRsZXMsIEFkZCwgJGh0dHApIHtcblxuXHR2YXIgdm0gPSB0aGlzO1xuXG5cblx0JGh0dHBcblx0XHQuZ2V0KCcvYXBpL3Byb2R1Y3RzJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuXHRcdFx0dm0ucHJvZHVjdHMgPSBkYXRhO1xuXHRcdH0pLmVycm9yKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bGQgbm90IGdldCBhbnkgZGF0YVwiICsgc3RhdHVzKTtcbiAgICB9KVxuXG5cbn0pXG5cbi8vIC5jb250cm9sbGVyKCdhZGRGb3JtQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIEFkZCkge1xuLy8gXHQkc2NvcGUuYWN0aXZlVGFiID0gJ1N0b3J5J1xuXG4vLyBcdCRzY29wZS5idW5kbGVTdWJtaXQgPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRBZGQuYWRkQnVuZGxlKHtcbi8vIFx0XHRcdFx0dGl0bGU6ICRzY29wZS50aXRsZSxcbi8vIFx0XHRcdFx0dXJsOiAkc2NvcGUudXJsLFxuLy8gXHRcdFx0XHR0YWdzOiAkc2NvcGUudGFnc1xuLy8gXHRcdFx0XHQvLyB1c2VySWQ6ICRyb290U2NvcGUuY3VycmVudFVzZXIuX2lkICoqKiBBREQgV0hFTiBDVVJSRU5UVVNFUiBJUyBWQUxJREFURURcbi8vIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyBcdFx0XHRcdCRzY29wZS5hZGRCdW5kbGVGb3JtID0gbnVsbDtcbi8vIFx0XHRcdFx0JHNjb3BlLnRpdGxlID0gbnVsbDtcbi8vIFx0XHRcdFx0JHNjb3BlLnVybCA9IG51bGw7XG4vLyBcdFx0XHRcdCRzY29wZS50YWdzID0gbnVsbDtcbi8vIFx0XHRcdH0pXG4vLyBcdH1cblxuLy8gXHQkc2NvcGUuc3RvcnlTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0QWRkLmFkZFN0b3J5KHtcbi8vIFx0XHRcdHRpdGxlOiAkc2NvcGUuc3RvcnlUaXRsZSxcbi8vIFx0XHRcdGRlc2NyaXB0aW9uOiAkc2NvcGUuc3RvcnlEZXNjcmlwdGlvbixcbi8vIFx0XHRcdHRhZ3M6ICRzY29wZS50YWdzXG4vLyBcdFx0XHQvLyB1c2VySWQ6ICRyb290U2NvcGUuY3VycmVudFVzZXIgQUREIFVTRVIgSUQgV0hFTiBMSU5LIElTIFJFQURZXG4vLyBcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbi8vIFx0XHRcdFx0JHNjb3BlLmFkZFN0b3J5Rm9ybSA9IG51bGxcbi8vIFx0XHRcdFx0JHNjb3BlLnN0b3J5VGl0bGUgPSBudWxsXG4vLyBcdFx0XHRcdCRzY29wZS5zdG9yeVRhZ3MgPSBudWxsXG4vLyBcdFx0XHRcdCRzY29wZS5zdG9yeURlc2NyaXB0aW9uID0gbnVsbFxuLy8gXHRcdFx0fSlcbi8vIFx0fVxuXG4vLyB9KVxuXG4iXX0=
