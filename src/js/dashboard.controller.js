angular.module('Northwind')

.controller('dashController', function ($scope, Bundles, Add, $http) {

	var vm = this;


	$http
		.get('/api/products').success(function(data, status, headers, config) {
			vm.products = data;
		}).error(function(data, status, headers, config) {
        console.log("could not get any data" + status);
    })


})

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

