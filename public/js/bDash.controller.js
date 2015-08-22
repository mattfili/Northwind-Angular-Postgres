'use strict';

angular.module('capstone').controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope, BundlesD) {

	(function () {
		$scope.bundles = Bundles.query();
	})();

	$scope['delete'] = function (bId) {
		BundlesD['delete']({ id: bId });
	};

	$scope.submit = function () {
		Add.addBundle({
			title: $scope.title,
			url: $scope.url
			// userId: $rootScope.currentUser._id *** ADD WHEN CURRENTUSER IS VALIDATED
		});
	}

	// $scope.openModal = function() {
	// 		var modalInstance = $modal.open({
	// 				templateUrl: 'assets/addModal.html',
	// 				controller: 'modalInstance'
	// 			});

	// 		modalInstance.result.then(function (information) {
	// 			Add.addBundle({
	// 				title: information.title,
	// 				url: information.url,
	// 				userId: $rootScope.currentUser._id
	// 			});
	// 		})
	// 	}

	;
}).controller('detailsCtrl', function ($scope, Bundles, $modal, Add, $rootScope) {});

// .controller('modalInstance', function ($scope, $modal, Add, $modalInstance) {

// $scope.information = {
// 	title: $scope.title,
// 	url: $scope.url
// }

// $scope.submit = function () {
// 	$modalInstance.close($scope.information)
// }

// $scope.cancel = function () {
// 	$modalInstance.dismiss('cancel');
// };

// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9iRGFzaC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFekIsVUFBVSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7O0FBRTVGLEVBQUMsWUFBVztBQUNYLFFBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO0VBQ2hDLENBQUEsRUFBRyxDQUFDOztBQUVMLE9BQU0sVUFBTyxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQzlCLFVBQVEsVUFBTyxDQUFDLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUE7RUFDMUIsQ0FBQTs7QUFHRCxPQUFNLENBQUMsTUFBTSxHQUFHLFlBQVc7QUFDMUIsS0FBRyxDQUFDLFNBQVMsQ0FBQztBQUNaLFFBQUssRUFBRSxNQUFNLENBQUMsS0FBSztBQUNuQixNQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7O0FBQUEsR0FFZixDQUFDLENBQUM7RUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFBO0NBcUJELENBQUMsQ0FHRCxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUc5RSxDQUFDLENBQUEiLCJmaWxlIjoic3JjL2pzL2JEYXNoLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnY2Fwc3RvbmUnKVxuXG4uY29udHJvbGxlcignYkRhc2hDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgQnVuZGxlcywgJG1vZGFsLCBBZGQsICRyb290U2NvcGUsIEJ1bmRsZXNEKSB7XG5cblx0KGZ1bmN0aW9uKCkge1xuXHRcdCRzY29wZS5idW5kbGVzID0gQnVuZGxlcy5xdWVyeSgpXG5cdH0pKCk7XG5cblx0JHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uIChiSWQpIHtcblx0XHRCdW5kbGVzRC5kZWxldGUoe2lkOiBiSWR9KVxuXHR9XG5cblxuXHQkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0QWRkLmFkZEJ1bmRsZSh7XG5cdFx0XHRcdHRpdGxlOiAkc2NvcGUudGl0bGUsXG5cdFx0XHRcdHVybDogJHNjb3BlLnVybFxuXHRcdFx0XHQvLyB1c2VySWQ6ICRyb290U2NvcGUuY3VycmVudFVzZXIuX2lkICoqKiBBREQgV0hFTiBDVVJSRU5UVVNFUiBJUyBWQUxJREFURURcblx0XHRcdH0pO1xuXHR9XG5cblxuXG5cbi8vICRzY29wZS5vcGVuTW9kYWwgPSBmdW5jdGlvbigpIHtcbi8vIFx0XHR2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbi8vIFx0XHRcdFx0dGVtcGxhdGVVcmw6ICdhc3NldHMvYWRkTW9kYWwuaHRtbCcsXG4vLyBcdFx0XHRcdGNvbnRyb2xsZXI6ICdtb2RhbEluc3RhbmNlJ1xuLy8gXHRcdFx0fSk7XG5cbi8vIFx0XHRtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChpbmZvcm1hdGlvbikge1xuLy8gXHRcdFx0QWRkLmFkZEJ1bmRsZSh7XG4vLyBcdFx0XHRcdHRpdGxlOiBpbmZvcm1hdGlvbi50aXRsZSxcbi8vIFx0XHRcdFx0dXJsOiBpbmZvcm1hdGlvbi51cmwsXG4vLyBcdFx0XHRcdHVzZXJJZDogJHJvb3RTY29wZS5jdXJyZW50VXNlci5faWRcbi8vIFx0XHRcdH0pO1xuLy8gXHRcdH0pXG4vLyBcdH1cblxuXG59KVxuXG5cbi5jb250cm9sbGVyKCdkZXRhaWxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEJ1bmRsZXMsICRtb2RhbCwgQWRkLCAkcm9vdFNjb3BlKSB7XG5cblxufSlcblxuLy8gLmNvbnRyb2xsZXIoJ21vZGFsSW5zdGFuY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsIEFkZCwgJG1vZGFsSW5zdGFuY2UpIHtcblxuLy8gJHNjb3BlLmluZm9ybWF0aW9uID0ge1xuLy8gXHR0aXRsZTogJHNjb3BlLnRpdGxlLFxuLy8gXHR1cmw6ICRzY29wZS51cmxcbi8vIH1cblxuLy8gJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbi8vIFx0JG1vZGFsSW5zdGFuY2UuY2xvc2UoJHNjb3BlLmluZm9ybWF0aW9uKVxuLy8gfVxuXG4vLyAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuLy8gXHQkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbi8vIH07XG5cblxuLy8gfSkiXX0=
