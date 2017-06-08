(function() {
	angular.module('practical.student-list',[])
	.run(run)
	.config(config);

	config.$inject = ['$urlRouterProvider', '$httpProvider', '$stateProvider', '$ocLazyLoadProvider'];
	function config($urlRouteProvider, $httpProvider, $stateProvider){
		var isValide = ['$http', 'commonService', '$q', function($http, commonService, $q) {
			if($http.defaults.headers.common['Authorization'] != undefined) return true;

			var deferred = $q.defer();
			commonService.getToken().get(function(response){
				var token = response.token;
				if(token != null && token != ''){
					$http.defaults.headers.common['Authorization'] = 'Bearer '+token;
					deferred.resolve(true);
					return true;
				}else{
					deferred.reject('Unauthenticated User');
				}
			},
            function (error) {
                deferred.reject('Unauthenticated User');
            });
			console.log("run after api call");
			return deferred.promise;
		}];
		$stateProvider
		.state('root', {
			url:'/student-list',
			templateUrl:'modules/student-list/student-list.html',
			controller:'studentListController as vm',
			// resolve:isValide
			resolve:{
				isValide,
				deps:['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load([{
						files:[
							'modules/student-list/student-list.controller.js'	
						]
					}]);
				}]
			}
		})
		.state('nav', {
			url:'/stat',
			templateUrl:'modules/student-list/student-list.html',
			controller:'studentListController as vm',
			// resolve:isValide
			resolve:{
				isValide:isValide,
				deps:['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load([{
						files:[
							'modules/student-list/student-list.controller.js'	
						]
					}]);
				}]
			}
		})
		.state('1', {
	      url: '/runner',
	      templateUrl: 'modules/student-list/student-list.html',
	      controller:'studentListController as vm'
	    })
		.state('2', {
	      parent: '1',
	      url: '/{param:^(?!three$).*}', // Anything that isn't three so the url can't match state 3
	      views :{
	      	'load-two@1':{
	      		template:'<h2>controller 2</h2>'
	      	}
	      },
	      params: {
	        param: {
	          value: '2',
	          squash: true
	        }
	      }
	    })
	    .state('3', {
	      parent: '1',
	      url: '/three',
	      views :{
	      	'load-three@1':{
	      		template:'<h2>Controller 3</h2>'
	      	}
	      }
	    })
		.state('root.details.test', {
			url:'/testone',
			templateUrl:'modules/student-list/student-list.html',
			controller:'studentListController as vm',
			// resolve:isValide
			resolve:{
				isValide:isValide,
				deps:['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load([{
						files:[
							'modules/student-list/student-list.controller.js'	
						]
					}]);
				}]
			}
		})
		;
	}
	function run(){
		console.log('test');
	}
})();