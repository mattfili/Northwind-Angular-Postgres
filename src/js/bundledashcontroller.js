angular
	.module('bundle')

	.controller('bundleDash', function (Fire, $scope, $state) {
		var vm = this;

		(function() {
			Fire.bunDash(function (snap){ //- Add a title to the bundle dashboard
			vm.bunName = snap.val();
			$scope.$apply();
			})
		})();

		vm.nBun = function () {
			Fire.newBun($scope.bundle.title)
			console.log(Fire.bKey)
			$state.go(`/bundle/${Fire.bKey}`) //- Change the URL path to the new Bundle
		};

		vm.gotoSec = function () {
			$state.go(`/bundle/${id}`)
		}

		vm.editBunName= function(id, newName) {
			Fire.updateBunName(id, newName)
			console.log('updated')
		}


	});