angular.module('capstone')

.controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope, BundlesD) {

	(function() {
		$scope.bundles = Bundles.query()
	})();

	$scope.delete = function (bId) {
		BundlesD.delete({id: bId})
	}


	$scope.submit = function() {
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


})


.controller('detailsCtrl', function ($scope, Bundles, $modal, Add, $rootScope) {


})

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