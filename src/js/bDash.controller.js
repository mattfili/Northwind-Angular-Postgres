angular.module('capstone')

.controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope) {

	(function() {
		var getAll = new Bundles.getAll()
		$scope.bundles = getAll.query()
	})();

	$scope.delete = function (id) {
		var deleteSelection = new Bundles.deleteOne()
		deleteSelection.delete({id: id}, function(){
			console.log('Deleted: ' + id)
			var getAll = new Bundles.getAll()
			$scope.bundles = getAll.query()
		})
	}

})

.controller('addFormController', function ($scope, Add) {

	$scope.submit = function() {
		Add.addBundle({
				title: $scope.title,
				url: $scope.url
				// userId: $rootScope.currentUser._id *** ADD WHEN CURRENTUSER IS VALIDATED
			}).then(function() {
				$scope.addBundleForm = null;
				$scope.title = null;
				$scope.url = null;
			})
	}

})

.controller('detailsCtrl', function ($scope, Bundles, $modal, Add, $rootScope) {


})



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