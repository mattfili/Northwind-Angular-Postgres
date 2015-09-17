angular.module('Northwind')

.controller('dashController', function ($scope, $q, simpleAPI) {
	var vm = this;

	// vm.table = {base: '', join: ''}

	vm.dbHeaders = {
		base: ['', 'products', 'orders', 'customers', 'suppliers', 'categories', 'shippers']
	} 

	vm.submit = function (input) {
		console.log(input)
		simpleAPI.getDynamic(input, function (response) {
			vm.data = response.data;			
			vm.headers = Object.keys(response.data[0])
		})
	}


	vm.options = {
	    chart: {
	        type: 'stackedAreaChart',
	        height: 450,
	        margin : {
	            top: 20,
	            right: 20,
	            bottom: 60,
	            left: 40
	        },
	        x: function(d){return d[0];},
	        y: function(d){return d[1];},
	        useVoronoi: false,
	        clipEdge: true,
	        transitionDuration: 500,
	        useInteractiveGuideline: true,
	        xAxis: {
	            showMaxMin: false,
	            tickFormat: function(d) {
	                return d3.time.format('%x')(new Date(d))
	            }
	        },
	        yAxis: {
	            tickFormat: function(d){
	                return d3.format(',.2f')(d);
	            }
	        }
	    }
    }


})
