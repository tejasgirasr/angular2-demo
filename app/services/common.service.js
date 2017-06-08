(function(){
	'use strict';
	angular.module('practical.student-list')
	.factory('commonService',commonService);
	commonService.$inject = ['$resource'];
	function commonService($resource){
		var service  = {
			getToken:getToken,
			login:login
		};
		return service;

		function getToken(param) {
			console.log(param);
			return $resource('/api/getToken');
		}
		function login(param) {
			console.log(param);
			return $resource('/api/login');
		}
		
	}
})();

