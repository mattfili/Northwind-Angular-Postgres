angular.module('Color Wheel')

.controller('colorController', function ($scope) {
	var vm = this;

	 var init = function() {
	    vm.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	    vm.colorChanged = colorChanged;
	    vm.colorHistory = []
  	}

	var colorChanged = function() {
	    console.log("color changed:", vm.color );
	    vm.colorHistory.push( vm.color );

	    if (vm.colorHistory.length > 50) {
	      vm.colorHistory.shift()
	    }
	  }

	 init();
	 return;
});