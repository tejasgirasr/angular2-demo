(function() {
	var app = angular.module('practical',[
		'ui.router', 
		'ngResource',
		'oc.lazyLoad',
		'practical.student-list',
		'satellizer'
	])
	.run(run)
	.config(config)
	run.$inject = ['$rootScope', '$window'];
	config.$inject = ['$urlRouterProvider', '$httpProvider', '$stateProvider','$authProvider'];

	function config($urlRouterProvider, $httpProvider, $stateProvider, $authProvider) {
		if (!$httpProvider.defaults.headers.get) {
        	$httpProvider.defaults.headers.get = {};    
	    }    

	    // Answer edited to include suggestions from comments
	    // because previous version of code introduced browser-related errors

	    //disable IE ajax request caching
	    console.log($httpProvider.defaults.headers.get);
	    console.log($httpProvider.defaults.headers);
	    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
	    // extra
	    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
	    console.log($httpProvider.defaults.headers.get);
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state("/", {
			url:'/',
			template:"<h3>Hii</h3>"
		});
		// Optional: For client-side use (Implicit Grant), set responseType to 'token' (default: 'code')
		$authProvider.facebook({
	      clientId: '1023661574434100',
	      responseType: 'token',
	      scope: ['email'],
		  scopeDelimiter: ',',
		  requiredUrlParams: ['display', 'scope'],
		});

	    $authProvider.google({
	      clientId: 'Google Client ID'
	    });

	    $authProvider.github({
	      clientId: 'GitHub Client ID'
	    });

	    $authProvider.linkedin({
	      clientId: 'LinkedIn Client ID'
	    });

	    $authProvider.instagram({
	      clientId: 'Instagram Client ID'
	    });

	    $authProvider.yahoo({
	      clientId: 'Yahoo Client ID / Consumer Key'
	    });

	    $authProvider.live({
	      clientId: 'Microsoft Client ID'
	    });

	    $authProvider.twitch({
	      clientId: 'Twitch Client ID'
	    });

	    $authProvider.bitbucket({
	      clientId: 'Bitbucket Client ID'
	    });

	    $authProvider.twitter({
		   url: 'https://vyaapaarsamachar.com/auth/twitter'
		});

	    $authProvider.spotify({
	      clientId: 'Spotify Client ID'
	    });

	    // No additional setup required for Twitter
		$authProvider.oauth2({
	      name: 'foursquare',
	      url: '/auth/foursquare',
	      clientId: 'Foursquare Client ID',
	      redirectUri: window.location.origin,
	      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
	    });
	}

	function run($rootScope, $window) {
	}
})();