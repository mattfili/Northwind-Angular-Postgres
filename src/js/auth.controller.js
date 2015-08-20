angular.module('capstone')

.controller('loginCtrl', function (Authorize, $scope) {

	$scope.login = function () {
		Authorize.login({
			email: $scope.email,
			password: $scope.password
		});
	};

	$scope.logout= function () {
		Authorize.logout();
	}


})

.controller('signupCtrl', function (Authorize, $scope) {

	$scope.signup = function () {
		Authorize.signup({
			email: $scope.email,
			password: $scope.password
		});
	};

})