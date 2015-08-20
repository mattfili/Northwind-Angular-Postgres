'use strict';

angular.module('capstone').controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope) {

	$scope.pictures = ['http://amzwall.com/wp-content/uploads/2015/02/Space-Picture-Desktop.jpg', 'http://amzwall.com/wp-content/uploads/2015/02/Starry-Background-Background-Wallpaper-Desktop.jpg', 'http://amzwall.com/wp-content/uploads/2015/02/Yosemite-Wallpaper-Desktop-Photos-Desktop.jpg'];

	$scope.openModal = function () {
		var modalInstance = $modal.open({
			templateUrl: 'assets/addModal.html',
			controller: 'modalInstance',
			windowClass: '.reveal-modal'
		});

		modalInstance.result.then(function (information) {
			Add.addBundle({
				title: information.title,
				url: information.url,
				userId: $rootScope.currentUser._id
			});
		});
	};
}).controller('modalInstance', function ($scope, $modal, Add, $modalInstance) {

	$scope.information = {
		title: $scope.title,
		url: $scope.url
	};

	$scope.submit = function () {
		$modalInstance.close($scope.information);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}).controller('detailsCtrl', function ($scope) {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9iRGFzaC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFekIsVUFBVSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRTs7QUFHbEYsT0FBTSxDQUFDLFFBQVEsR0FBRyxDQUNsQix5RUFBeUUsRUFDekUsa0dBQWtHLEVBQ2xHLDZGQUE2RixDQUU1RixDQUFBOztBQUVELE9BQU0sQ0FBQyxTQUFTLEdBQUcsWUFBVztBQUM3QixNQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzlCLGNBQVcsRUFBRSxzQkFBc0I7QUFDbkMsYUFBVSxFQUFFLGVBQWU7QUFDM0IsY0FBVyxFQUFFLGVBQWU7R0FDNUIsQ0FBQyxDQUFDOztBQUVKLGVBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsV0FBVyxFQUFFO0FBQ2hELE1BQUcsQ0FBQyxTQUFTLENBQUM7QUFDYixTQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7QUFDeEIsT0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHO0FBQ3BCLFVBQU0sRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUc7SUFDbEMsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFBO0VBQ0YsQ0FBQTtDQUVELENBQUMsQ0FDRCxVQUFVLENBQUMsZUFBZSxFQUFFLFVBQVUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFOztBQUU1RSxPQUFNLENBQUMsV0FBVyxHQUFHO0FBQ3BCLE9BQUssRUFBRSxNQUFNLENBQUMsS0FBSztBQUNuQixLQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7RUFDZixDQUFBOztBQUVELE9BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUMzQixnQkFBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7RUFDeEMsQ0FBQTs7QUFFRCxPQUFNLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDM0IsZ0JBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDakMsQ0FBQztDQUdELENBQUMsQ0FFRCxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsTUFBTSxFQUFFLEVBSTVDLENBQUMsQ0FBQSIsImZpbGUiOiJzcmMvanMvYkRhc2guY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdjYXBzdG9uZScpXG5cbi5jb250cm9sbGVyKCdiRGFzaENvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBCdW5kbGVzLCAkbW9kYWwsIEFkZCwgJHJvb3RTY29wZSkge1xuXG5cdFxuXHQkc2NvcGUucGljdHVyZXMgPSBbXG5cdCdodHRwOi8vYW16d2FsbC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDIvU3BhY2UtUGljdHVyZS1EZXNrdG9wLmpwZycsXG5cdCdodHRwOi8vYW16d2FsbC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDIvU3RhcnJ5LUJhY2tncm91bmQtQmFja2dyb3VuZC1XYWxscGFwZXItRGVza3RvcC5qcGcnLFxuXHQnaHR0cDovL2FtendhbGwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAyL1lvc2VtaXRlLVdhbGxwYXBlci1EZXNrdG9wLVBob3Rvcy1EZXNrdG9wLmpwZydcblxuXHRdXG5cblx0JHNjb3BlLm9wZW5Nb2RhbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9hZGRNb2RhbC5odG1sJyxcblx0XHRcdFx0Y29udHJvbGxlcjogJ21vZGFsSW5zdGFuY2UnLFxuXHRcdFx0XHR3aW5kb3dDbGFzczogJy5yZXZlYWwtbW9kYWwnXG5cdFx0XHR9KTtcblxuXHRcdG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGluZm9ybWF0aW9uKSB7XG5cdFx0XHRBZGQuYWRkQnVuZGxlKHtcblx0XHRcdFx0dGl0bGU6IGluZm9ybWF0aW9uLnRpdGxlLFxuXHRcdFx0XHR1cmw6IGluZm9ybWF0aW9uLnVybCxcblx0XHRcdFx0dXNlcklkOiAkcm9vdFNjb3BlLmN1cnJlbnRVc2VyLl9pZFxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG59KVxuLmNvbnRyb2xsZXIoJ21vZGFsSW5zdGFuY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsIEFkZCwgJG1vZGFsSW5zdGFuY2UpIHtcblxuJHNjb3BlLmluZm9ybWF0aW9uID0ge1xuXHR0aXRsZTogJHNjb3BlLnRpdGxlLFxuXHR1cmw6ICRzY29wZS51cmxcbn1cblxuJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0JG1vZGFsSW5zdGFuY2UuY2xvc2UoJHNjb3BlLmluZm9ybWF0aW9uKVxufVxuXG4kc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuXHQkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbn07XG5cblxufSlcblxuLmNvbnRyb2xsZXIoJ2RldGFpbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xuXG5cblxufSkiXX0=