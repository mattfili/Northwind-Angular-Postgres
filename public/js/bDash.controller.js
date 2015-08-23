'use strict';

angular.module('capstone').controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope) {

	(function () {
		var getAll = new Bundles.getAll();
		$scope.bundles = getAll.query();
	})();

	$scope['delete'] = function (id) {
		var deleteSelection = new Bundles.deleteOne();
		deleteSelection['delete']({ id: id }, function () {
			console.log('Deleted: ' + id);
			var getAll = new Bundles.getAll();
			$scope.bundles = getAll.query();
		});
	};
}).controller('addFormController', function ($scope, Add) {

	$scope.submit = function () {
		Add.addBundle({
			title: $scope.title,
			url: $scope.url
			// userId: $rootScope.currentUser._id *** ADD WHEN CURRENTUSER IS VALIDATED
		}).then(function () {
			$scope.addBundleForm = null;
			$scope.title = null;
			$scope.url = null;
		});
	};
}).controller('detailsCtrl', function ($scope, Bundles, $modal, Add, $rootScope) {});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9iRGFzaC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFekIsVUFBVSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRTs7QUFFbEYsRUFBQyxZQUFXO0FBQ1gsTUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDakMsUUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7RUFDL0IsQ0FBQSxFQUFHLENBQUM7O0FBRUwsT0FBTSxVQUFPLEdBQUcsVUFBVSxFQUFFLEVBQUU7QUFDN0IsTUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7QUFDN0MsaUJBQWUsVUFBTyxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLFlBQVU7QUFDMUMsVUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDN0IsT0FBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDakMsU0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7R0FDL0IsQ0FBQyxDQUFBO0VBQ0YsQ0FBQTtDQUVELENBQUMsQ0FFRCxVQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxNQUFNLEVBQUUsR0FBRyxFQUFFOztBQUV2RCxPQUFNLENBQUMsTUFBTSxHQUFHLFlBQVc7QUFDMUIsS0FBRyxDQUFDLFNBQVMsQ0FBQztBQUNaLFFBQUssRUFBRSxNQUFNLENBQUMsS0FBSztBQUNuQixNQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7O0FBQUEsR0FFZixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVc7QUFDbEIsU0FBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDNUIsU0FBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDcEIsU0FBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7R0FDbEIsQ0FBQyxDQUFBO0VBQ0gsQ0FBQTtDQUVELENBQUMsQ0FFRCxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUc5RSxDQUFDLENBQUEiLCJmaWxlIjoic3JjL2pzL2JEYXNoLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnY2Fwc3RvbmUnKVxuXG4uY29udHJvbGxlcignYkRhc2hDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgQnVuZGxlcywgJG1vZGFsLCBBZGQsICRyb290U2NvcGUpIHtcblxuXHQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGdldEFsbCA9IG5ldyBCdW5kbGVzLmdldEFsbCgpXG5cdFx0JHNjb3BlLmJ1bmRsZXMgPSBnZXRBbGwucXVlcnkoKVxuXHR9KSgpO1xuXG5cdCRzY29wZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcblx0XHR2YXIgZGVsZXRlU2VsZWN0aW9uID0gbmV3IEJ1bmRsZXMuZGVsZXRlT25lKClcblx0XHRkZWxldGVTZWxlY3Rpb24uZGVsZXRlKHtpZDogaWR9LCBmdW5jdGlvbigpe1xuXHRcdFx0Y29uc29sZS5sb2coJ0RlbGV0ZWQ6ICcgKyBpZClcblx0XHRcdHZhciBnZXRBbGwgPSBuZXcgQnVuZGxlcy5nZXRBbGwoKVxuXHRcdFx0JHNjb3BlLmJ1bmRsZXMgPSBnZXRBbGwucXVlcnkoKVxuXHRcdH0pXG5cdH1cblxufSlcblxuLmNvbnRyb2xsZXIoJ2FkZEZvcm1Db250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgQWRkKSB7XG5cblx0JHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdEFkZC5hZGRCdW5kbGUoe1xuXHRcdFx0XHR0aXRsZTogJHNjb3BlLnRpdGxlLFxuXHRcdFx0XHR1cmw6ICRzY29wZS51cmxcblx0XHRcdFx0Ly8gdXNlcklkOiAkcm9vdFNjb3BlLmN1cnJlbnRVc2VyLl9pZCAqKiogQUREIFdIRU4gQ1VSUkVOVFVTRVIgSVMgVkFMSURBVEVEXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkc2NvcGUuYWRkQnVuZGxlRm9ybSA9IG51bGw7XG5cdFx0XHRcdCRzY29wZS50aXRsZSA9IG51bGw7XG5cdFx0XHRcdCRzY29wZS51cmwgPSBudWxsO1xuXHRcdFx0fSlcblx0fVxuXG59KVxuXG4uY29udHJvbGxlcignZGV0YWlsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBCdW5kbGVzLCAkbW9kYWwsIEFkZCwgJHJvb3RTY29wZSkge1xuXG5cbn0pXG5cblxuXG4vLyAkc2NvcGUub3Blbk1vZGFsID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0dmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4vLyBcdFx0XHRcdHRlbXBsYXRlVXJsOiAnYXNzZXRzL2FkZE1vZGFsLmh0bWwnLFxuLy8gXHRcdFx0XHRjb250cm9sbGVyOiAnbW9kYWxJbnN0YW5jZSdcbi8vIFx0XHRcdH0pO1xuXG4vLyBcdFx0bW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoaW5mb3JtYXRpb24pIHtcbi8vIFx0XHRcdEFkZC5hZGRCdW5kbGUoe1xuLy8gXHRcdFx0XHR0aXRsZTogaW5mb3JtYXRpb24udGl0bGUsXG4vLyBcdFx0XHRcdHVybDogaW5mb3JtYXRpb24udXJsLFxuLy8gXHRcdFx0XHR1c2VySWQ6ICRyb290U2NvcGUuY3VycmVudFVzZXIuX2lkXG4vLyBcdFx0XHR9KTtcbi8vIFx0XHR9KVxuLy8gXHR9XG5cbi8vIC5jb250cm9sbGVyKCdtb2RhbEluc3RhbmNlJywgZnVuY3Rpb24gKCRzY29wZSwgJG1vZGFsLCBBZGQsICRtb2RhbEluc3RhbmNlKSB7XG5cbi8vICRzY29wZS5pbmZvcm1hdGlvbiA9IHtcbi8vIFx0dGl0bGU6ICRzY29wZS50aXRsZSxcbi8vIFx0dXJsOiAkc2NvcGUudXJsXG4vLyB9XG5cbi8vICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4vLyBcdCRtb2RhbEluc3RhbmNlLmNsb3NlKCRzY29wZS5pbmZvcm1hdGlvbilcbi8vIH1cblxuLy8gJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbi8vIFx0JG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4vLyB9O1xuXG5cbi8vIH0pIl19
