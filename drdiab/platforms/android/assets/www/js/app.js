document.addEventListener('deviceready', function(){
	// au lancement
}, false)

var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/login', {templateUrl: 'partials/login.html'})
			.when('/home', {templateUrl: 'partials/myhome.html'})
			.otherwise({redirectTo: '/login'});
}]);