'use strict';

angular.module('Northwind').controller('dashController', function ($scope, $q, simpleAPI, NgTableParams) {
  var vm = this;
  var queryData = [];

  (function () {
    simpleAPI.extSalesMetrics(function (result) {
      console.log(queryData);
    });
  })();

  // vm.table = {base: '', join: ''}

  vm.dbHeaders = {
    base: ['', 'products', 'orders', 'customers', 'employees', 'suppliers', 'categories', 'shippers', 'order_id', 'territories', 'region', 'customerdemographics']
  };

  vm.submit = function (input) {
    console.log(input);
    simpleAPI.getDynamic(input, function (response) {
      vm.data = response.data;
      vm.headers = Object.keys(response.data[0]);
    });
  };

  vm.options = {
    chart: {
      type: 'stackedAreaChart',
      height: 450,
      margin: {
        top: 20,
        right: 20,
        bottom: 60,
        left: 40
      },
      x: function x(d) {
        return d[0];
      },
      y: function y(d) {
        return d[1];
      },
      useVoronoi: false,
      clipEdge: true,
      transitionDuration: 500,
      useInteractiveGuideline: true,
      xAxis: {
        showMaxMin: false,
        tickFormat: function tickFormat(d) {
          return d3.time.format('%x')(new Date(d));
        }
      },
      yAxis: {
        tickFormat: function tickFormat(d) {
          return d3.format(',.2f')(d);
        }
      }
    }
  };

  (function () {
    _.map(queryData, function (data, i) {
      console.log(queryData);
    });
  })();

  // vm.data = [
  //   {
  //     "key": "Ramen Noodles"
  //     "values": [[490.00, 1996-12-10], [220.43, 1996-1-8]]
  //   },
  //   {
  //     "key": "Bacon Little Ceasars"
  //     "values": [[220.01, 1996-08-10], [222.32, 1996-1-9]]
  //   }
  // ]

  // this.cols = [{
  //     field: "ProductName",
  //     title: "Product Name",
  //     sortable: "ProductName",
  //     show: true,
  //     groupable: "ProductName"
  //   }, {
  //     field: "OrderDate",
  //     title: "Order Date",
  //     sortable: "OrderDate",
  //     show: true,
  //     groupable: "OrderDate"
  //   }, {
  //     field: "ShipCity",
  //     title: "Ship City",
  //     sortable: "ShipCity",
  //     show: true,
  //     groupable: "ShipCity"
  //   },{
  //     field: "ShipCountry",
  //     title: "Ship Country",
  //     sortable: "ShipCountry",
  //     show: true,
  //     groupable: "ShipCountry"
  //   },{
  //     field: "ShippedDate",
  //     title: "Shipped Date",
  //     sortable: "ShippedDate",
  //     show: true,
  //     groupable: "ShippedDate"
  //   }, {
  //     field: "Quantity",
  //     title: "Quantity",
  //     show: true,
  //   }, {
  //     field: "UnitPrice",
  //     title: "Unit Price",
  //     show: true
  //   }];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9kYXNoYm9hcmQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBRTFCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRTtBQUM3RSxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDYixNQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7O0FBRW5CLEdBQUMsWUFBVztBQUNWLGFBQVMsQ0FBQyxlQUFlLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDMUMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtLQUN2QixDQUFDLENBQUM7R0FDSixDQUFBLEVBQUcsQ0FBQzs7OztBQUlOLElBQUUsQ0FBQyxTQUFTLEdBQUc7QUFDZCxRQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFDNUcsYUFBYSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQztHQUNoRCxDQUFBOztBQUVELElBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDNUIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNsQixhQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLFFBQVEsRUFBRTtBQUMvQyxRQUFFLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDeEIsUUFBRSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUMxQyxDQUFDLENBQUE7R0FDRixDQUFBOztBQUdELElBQUUsQ0FBQyxPQUFPLEdBQUc7QUFDVCxTQUFLLEVBQUU7QUFDSCxVQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFlBQU0sRUFBRSxHQUFHO0FBQ1gsWUFBTSxFQUFHO0FBQ0wsV0FBRyxFQUFFLEVBQUU7QUFDUCxhQUFLLEVBQUUsRUFBRTtBQUNULGNBQU0sRUFBRSxFQUFFO0FBQ1YsWUFBSSxFQUFFLEVBQUU7T0FDWDtBQUNELE9BQUMsRUFBRSxXQUFTLENBQUMsRUFBQztBQUFDLGVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQUM7QUFDNUIsT0FBQyxFQUFFLFdBQVMsQ0FBQyxFQUFDO0FBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FBQztBQUM1QixnQkFBVSxFQUFFLEtBQUs7QUFDakIsY0FBUSxFQUFFLElBQUk7QUFDZCx3QkFBa0IsRUFBRSxHQUFHO0FBQ3ZCLDZCQUF1QixFQUFFLElBQUk7QUFDN0IsV0FBSyxFQUFFO0FBQ0gsa0JBQVUsRUFBRSxLQUFLO0FBQ2pCLGtCQUFVLEVBQUUsb0JBQVMsQ0FBQyxFQUFFO0FBQ3BCLGlCQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDM0M7T0FDSjtBQUNELFdBQUssRUFBRTtBQUNILGtCQUFVLEVBQUUsb0JBQVMsQ0FBQyxFQUFDO0FBQ25CLGlCQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7T0FDSjtLQUNKO0dBQ0QsQ0FBQzs7QUFFRixHQUFDLFlBQVc7QUFDVixLQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFTLElBQUksRUFBRSxDQUFDLEVBQUU7QUFDakMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtLQUN2QixDQUFDLENBQUE7R0FDSCxDQUFBLEVBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdFUixDQUFDLENBQUEiLCJmaWxlIjoic3JjL2pzL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ05vcnRod2luZCcpXG5cbi5jb250cm9sbGVyKCdkYXNoQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRxLCBzaW1wbGVBUEksIE5nVGFibGVQYXJhbXMpIHtcblx0dmFyIHZtID0gdGhpcztcbiAgdmFyIHF1ZXJ5RGF0YSA9IFtdO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICBzaW1wbGVBUEkuZXh0U2FsZXNNZXRyaWNzKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5RGF0YSlcbiAgICB9KTtcbiAgfSkoKTtcblxuXHQvLyB2bS50YWJsZSA9IHtiYXNlOiAnJywgam9pbjogJyd9XG5cblx0dm0uZGJIZWFkZXJzID0ge1xuXHRcdGJhc2U6IFsnJywgJ3Byb2R1Y3RzJywgJ29yZGVycycsICdjdXN0b21lcnMnLCAnZW1wbG95ZWVzJywgJ3N1cHBsaWVycycsICdjYXRlZ29yaWVzJywgJ3NoaXBwZXJzJywgJ29yZGVyX2lkJywgXG5cdFx0J3RlcnJpdG9yaWVzJywgJ3JlZ2lvbicsICdjdXN0b21lcmRlbW9ncmFwaGljcyddXG5cdH0gXG5cblx0dm0uc3VibWl0ID0gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0Y29uc29sZS5sb2coaW5wdXQpXG5cdFx0c2ltcGxlQVBJLmdldER5bmFtaWMoaW5wdXQsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0dm0uZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHRcdFx0XG5cdFx0XHR2bS5oZWFkZXJzID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YVswXSlcblx0XHR9KVxuXHR9XG5cblxuXHR2bS5vcHRpb25zID0ge1xuXHQgICAgY2hhcnQ6IHtcblx0ICAgICAgICB0eXBlOiAnc3RhY2tlZEFyZWFDaGFydCcsXG5cdCAgICAgICAgaGVpZ2h0OiA0NTAsXG5cdCAgICAgICAgbWFyZ2luIDoge1xuXHQgICAgICAgICAgICB0b3A6IDIwLFxuXHQgICAgICAgICAgICByaWdodDogMjAsXG5cdCAgICAgICAgICAgIGJvdHRvbTogNjAsXG5cdCAgICAgICAgICAgIGxlZnQ6IDQwXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB4OiBmdW5jdGlvbihkKXtyZXR1cm4gZFswXTt9LFxuXHQgICAgICAgIHk6IGZ1bmN0aW9uKGQpe3JldHVybiBkWzFdO30sXG5cdCAgICAgICAgdXNlVm9yb25vaTogZmFsc2UsXG5cdCAgICAgICAgY2xpcEVkZ2U6IHRydWUsXG5cdCAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA1MDAsXG5cdCAgICAgICAgdXNlSW50ZXJhY3RpdmVHdWlkZWxpbmU6IHRydWUsXG5cdCAgICAgICAgeEF4aXM6IHtcblx0ICAgICAgICAgICAgc2hvd01heE1pbjogZmFsc2UsXG5cdCAgICAgICAgICAgIHRpY2tGb3JtYXQ6IGZ1bmN0aW9uKGQpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkMy50aW1lLmZvcm1hdCgnJXgnKShuZXcgRGF0ZShkKSlcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgeUF4aXM6IHtcblx0ICAgICAgICAgICAgdGlja0Zvcm1hdDogZnVuY3Rpb24oZCl7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KCcsLjJmJykoZCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9XG4gICAgfTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIF8ubWFwKHF1ZXJ5RGF0YSwgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeURhdGEpXG4gICAgICB9KVxuICAgIH0pKCk7XG5cblxuXG4gICAgLy8gdm0uZGF0YSA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgXCJrZXlcIjogXCJSYW1lbiBOb29kbGVzXCJcbiAgICAvLyAgICAgXCJ2YWx1ZXNcIjogW1s0OTAuMDAsIDE5OTYtMTItMTBdLCBbMjIwLjQzLCAxOTk2LTEtOF1dXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBcImtleVwiOiBcIkJhY29uIExpdHRsZSBDZWFzYXJzXCJcbiAgICAvLyAgICAgXCJ2YWx1ZXNcIjogW1syMjAuMDEsIDE5OTYtMDgtMTBdLCBbMjIyLjMyLCAxOTk2LTEtOV1dXG4gICAgLy8gICB9XG4gICAgLy8gXVxuXG5cblxuXG5cblxuXG4gIC8vIHRoaXMuY29scyA9IFt7XG4gIC8vICAgICBmaWVsZDogXCJQcm9kdWN0TmFtZVwiLFxuICAvLyAgICAgdGl0bGU6IFwiUHJvZHVjdCBOYW1lXCIsXG4gIC8vICAgICBzb3J0YWJsZTogXCJQcm9kdWN0TmFtZVwiLFxuICAvLyAgICAgc2hvdzogdHJ1ZSxcbiAgLy8gICAgIGdyb3VwYWJsZTogXCJQcm9kdWN0TmFtZVwiXG4gIC8vICAgfSwge1xuICAvLyAgICAgZmllbGQ6IFwiT3JkZXJEYXRlXCIsXG4gIC8vICAgICB0aXRsZTogXCJPcmRlciBEYXRlXCIsXG4gIC8vICAgICBzb3J0YWJsZTogXCJPcmRlckRhdGVcIixcbiAgLy8gICAgIHNob3c6IHRydWUsXG4gIC8vICAgICBncm91cGFibGU6IFwiT3JkZXJEYXRlXCJcbiAgLy8gICB9LCB7XG4gIC8vICAgICBmaWVsZDogXCJTaGlwQ2l0eVwiLFxuICAvLyAgICAgdGl0bGU6IFwiU2hpcCBDaXR5XCIsXG4gIC8vICAgICBzb3J0YWJsZTogXCJTaGlwQ2l0eVwiLFxuICAvLyAgICAgc2hvdzogdHJ1ZSxcbiAgLy8gICAgIGdyb3VwYWJsZTogXCJTaGlwQ2l0eVwiXG4gIC8vICAgfSx7XG4gIC8vICAgICBmaWVsZDogXCJTaGlwQ291bnRyeVwiLFxuICAvLyAgICAgdGl0bGU6IFwiU2hpcCBDb3VudHJ5XCIsXG4gIC8vICAgICBzb3J0YWJsZTogXCJTaGlwQ291bnRyeVwiLFxuICAvLyAgICAgc2hvdzogdHJ1ZSxcbiAgLy8gICAgIGdyb3VwYWJsZTogXCJTaGlwQ291bnRyeVwiXG4gIC8vICAgfSx7XG4gIC8vICAgICBmaWVsZDogXCJTaGlwcGVkRGF0ZVwiLFxuICAvLyAgICAgdGl0bGU6IFwiU2hpcHBlZCBEYXRlXCIsXG4gIC8vICAgICBzb3J0YWJsZTogXCJTaGlwcGVkRGF0ZVwiLFxuICAvLyAgICAgc2hvdzogdHJ1ZSxcbiAgLy8gICAgIGdyb3VwYWJsZTogXCJTaGlwcGVkRGF0ZVwiXG4gIC8vICAgfSwge1xuICAvLyAgICAgZmllbGQ6IFwiUXVhbnRpdHlcIixcbiAgLy8gICAgIHRpdGxlOiBcIlF1YW50aXR5XCIsXG4gIC8vICAgICBzaG93OiB0cnVlLFxuICAvLyAgIH0sIHtcbiAgLy8gICAgIGZpZWxkOiBcIlVuaXRQcmljZVwiLFxuICAvLyAgICAgdGl0bGU6IFwiVW5pdCBQcmljZVwiLFxuICAvLyAgICAgc2hvdzogdHJ1ZVxuICAvLyAgIH1dO1xuXG5cblxuXG59KVxuIl19
