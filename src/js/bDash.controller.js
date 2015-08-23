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
	$scope.activeTab = 'Story'

	$scope.bundleSubmit = function() {
		Add.addBundle({
				title: $scope.title,
				url: $scope.url,
				tags: $scope.tags
				// userId: $rootScope.currentUser._id *** ADD WHEN CURRENTUSER IS VALIDATED
			}).then(function() {
				$scope.addBundleForm = null;
				$scope.title = null;
				$scope.url = null;
				$scope.tags = null;
			})
	}

	$scope.storySubmit = function () {
		Add.addStory({
			title: $scope.storyTitle,
			description: $scope.storyDescription,
			tags: $scope.tags
			// userId: $rootScope.currentUser ADD USER ID WHEN LINK IS READY
		}).then(function() {
				$scope.addStoryForm = null
				$scope.storyTitle = null
				$scope.storyTags = null
				$scope.storyDescription = null
			})
	}

})

.controller('detailsCtrl', function ($scope, Authorize, $state) {
	$scope.logout = function() {
		Authorize.logout().then(function() {
			$state.go('start.dash') // CHANGE TO PUBLIC DASHBOARD
		})
	}

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