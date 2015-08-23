angular.module('capstone')

.controller('loginCtrl', function (Authorize, $scope, $state) {

	$scope.login = function () {
		Authorize.login({
			email: $scope.email,
			password: $scope.password
		}).then(function() {
			$state.go('start.dash')
		})
	};



})

.controller('signupCtrl', function (Authorize, $scope) {

	$scope.signup = function () {
		Authorize.signup({
			email: $scope.email,
			password: $scope.password
		});
	};

})