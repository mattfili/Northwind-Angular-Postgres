angular.module('capstone')

.controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope) {

	$scope.openModal = function() {
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
		})
	}

})
.controller('modalInstance', function ($scope, $modal, Add, $modalInstance) {

$scope.information = {
	title: $scope.title,
	url: $scope.url
}

$scope.submit = function () {
	$modalInstance.close($scope.information)
}

$scope.cancel = function () {
	$modalInstance.dismiss('cancel');
};


})