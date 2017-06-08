(function () {
	angular.module('practical.student-list')
	.controller('studentListController',studentListController);
	studentListController.$inject = ['$state', '$scope', 'commonService', '$auth', '$http', '$location'];
	function studentListController($state, $scope, commonService, $auth, $http , $location){
		// var test = {
  //           "Accept":"application/json, text/plain, */*",
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
  //           "Access-Control-Allow-Origin": "*"
  //         };
  // // res.header("Access-Control-Allow-Origin", "*");
  // 		console.log($http.defaults.headers.common);
  // 		$http.defaults.headers.common = test
  // 		console.log($http.defaults.headers.common);
		// var vm = this;
		// vm.callApi = callApi;
		// function callApi() {
		// 	commonService.login().get(function(response){
		// 		console.log(response);
		// 	});
		// }
		// $scope.authenticate = function(provider) {
	 //      	$auth.authenticate(provider).then(function(succsse){
	 //      		console.log(succsse);
	 //      	}).then(function() {
	 //          $location.path('/');
	 //        })
	 //        .catch(function(error) {
	 //          if (error.error) {
	 //            // Popup error - invalid redirect_uri, pressed cancel button, etc.
	            
	 //          } else if (error.data) {
	 //            // HTTP response error from server
	            
	 //          } else {
	 //            // toastr.error(error);
	 //          }
	 //        });
	 //    };\
	 var vm = this;
  
	  /* Methods */
	  vm.param = 2;
	  vm.setDefaultParamValue = setDefaultParamValue;
	  vm.goToState = goToState;
	  
	  /* Data */
	  vm.otherStateNames = [];
	  
	  activate();
	  //////////
	  
	      $scope.$state = $state;
	      $scope.$location = $location;
	  function activate() {
	      $scope.$on('$stateChangeSuccess', function() {
	        vm.otherStateNames = ['1','2','3'].filter(function(stateName) {
	          return stateName !== $state.$current.name;
	        });
	      });
	      console.log(vm.otherStateNames);
	  }
	  
	  function setDefaultParamValue() {
	    vm.param = 2;
	  }
	  
	  function goToState(stateName) {
	    var state = $state.get(stateName);
	    var params = {};
	    if (state.parent) {
	      params.param = vm.param;
	    }
	    console.log(stateName,params);
	    $state.go(stateName, params);
	  }
		
	}
})();