angular
	.module('bundle', ['ui.router', 'ui.bootstrap', 'xeditable'])
	
	.constant('BUN_URL', 'https://bundlecapstone.firebaseio.com/')

	.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('','/');
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
          url: '/',
          templateUrl: 'assets/landing.html'
        })

        .state('bundleDash', {
        	abstract: true, 
          	templateUrl: 'assets/bundledash.html'	          	
      	})

        .state('bundleDash.data', {
        	url: '', //- need to add auth token to the beginning 
			    views: {
		            'bundleRepeat': {
		              templateUrl: "assets/bundlerepeater.html", 
		              controller: "bundleDash",
		              controllerAs: "bundleDash"
		            },
		             'newBundle': {
		              templateUrl: "assets/newbundle.html", 
		              controller: "bundleDash",
		              controllerAs: "bundleDash"
		            }
		        }
      	})

      	.state('sectionDash', {
        	abstract: true, 
          	templateUrl: 'assets/sectiondash.html'	          	
      	})

        .state('sectionDash.data', {
        	url: '/bundle/{bKey}',
	          views: {
	            'sectionRepeat': {
	              url: '', //- because bundles are not unique to userIDs you'd just store the bundles and search firebase via section IDs (even the ones you edit, those will just store to a new bundleID)
	              templateUrl: "assets/sectionrepeater.html",
	              controller: "newSection",
	              controllerAs: "newSection"
	            },
	           	'newSection': {
	              url: '', 
	              templateUrl: "assets/newsection.html",
	              controller: "newSection",
	              controllerAs: "newSection"
	            },

	          }
        })

  	})

  	.factory('Fire', function (BUN_URL) {
  		return {
  			newBun (data) {
	  				var fb = new Firebase(BUN_URL);
	  				var ref = fb
	  				.child('bundle')
	  				.push({
	  					bun_title: data
	  				});
	  				this.bKey = ref.key()
  			},

  			newSec (location, data) {
  				var fb = new Firebase(BUN_URL + location);
					var ref = fb
					.child('content')
					.push({
						section_title: data
					});
					this.sKey = ref.key()
  			},

  			bunName(location, cb) {
  				var fb = new Firebase(BUN_URL + location)
  				fb
          			.limitToFirst(1)
          			.once("value", cb) 
  			},

	        bunDash(cb){
	          var fb = new Firebase(BUN_URL + 'bundle')
	          fb
	          		.once("value", cb) 
	        },

  			secName(location, cb) {
  				var fb = new Firebase(BUN_URL + location + '/content')
  					fb
  					.orderByChild('section_title')
  					.on("value", cb) 
  			},

  			newCont (location, sectionId, dataURL, dataTitle) {
  				var fb = new Firebase(BUN_URL + location + '/content/' + sectionId);
				  var ref = fb
					.child('context')
					.push({
						content_title: dataURL,
						content_URL: dataTitle
					});
					this.buid = ref.key()
  			},

	        updateBunName (id, newName) {
	          var fb = new Firebase(BUN_URL + '/bundle/' + id)
	            fb
	            .update({
	              bun_title: newName
	            });
	        },

	        updateSecName (location, id, newName) {
	          var fb = new Firebase(BUN_URL + location + '/content/' + id)
	            fb
	            .update({
	              section_title: newName
	            })
	        }

        }
  	});