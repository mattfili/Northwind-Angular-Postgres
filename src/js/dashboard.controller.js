angular.module('Northwind')

.controller('dashController', function ($scope, $q, simpleAPI, NgTableParams) {
	var vm = this;

	// vm.table = {base: '', join: ''}

	vm.dbHeaders = {
		base: ['', 'products', 'orders', 'customers', 'employees', 'suppliers', 'categories', 'shippers', 'order_id', 
		'territories', 'region', 'customerdemographics']
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
    };

    (function() {
    	simpleAPI.extSalesMetrics(function (result) {
	    	console.log(result);
	    	vm.salesMetrics = result;
    	});
    })();

  this.cols = [{
      field: "ProductName",
      title: "Product Name",
      sortable: "ProductName",
      show: true,
      groupable: "ProductName"
    }, {
      field: "OrderDate",
      title: "Order Date",
      sortable: "OrderDate",
      show: true,
      groupable: "OrderDate"
    }, {
      field: "ShipCity",
      title: "Ship City",
      sortable: "ShipCity",
      show: true,
      groupable: "ShipCity"
    },{
      field: "ShipCountry",
      title: "Ship Country",
      sortable: "ShipCountry",
      show: true,
      groupable: "ShipCountry"
    },{
      field: "ShippedDate",
      title: "Shipped Date",
      sortable: "ShippedDate",
      show: true,
      groupable: "ShippedDate"
    }, {
      field: "Quantity",
      title: "Quantity",
      show: true,
    }, {
      field: "UnitPrice",
      title: "Unit Price",
      show: true
    }];




})
