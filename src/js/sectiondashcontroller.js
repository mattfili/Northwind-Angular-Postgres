angular
	.module('bundle')

	.controller('newSection', function (Fire, $scope, $location, $state) {
		var vm = this;

		(function() { 
			Fire.bunName($location.url(), function(snap){ //- Add a title to the bundle editor page
			vm.bName = snap.val();
			$scope.$apply();
			$state.href()
			}) 
		})(); //-fires immediately

		(function() { 
			Fire.secName($location.url(), function(snap){ //- Repeat Section Names below input form
			vm.sName = snap.val();
			$scope.$apply();
		}) 
		})(); //=fires immediately

		vm.nSec = function () {
			Fire.newSec($location.url(), $scope.bundle.section); //- Giving a new section a new title
			console.log(Fire.sKey)
		}

		vm.nContext = function (id, titleContext, urlContext) { //- Adds a new title and bundle
			Fire.newCont($location.url(), id, titleContext, urlContext); //- passes MV data 
			console.log('context posted')
		}

		vm.editSectionName = function (id, newName) {
			Fire.updateSecName($location.url(), id, newName)
			console.log('edited section name')
		}

	});