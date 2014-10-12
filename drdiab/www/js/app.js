document.addEventListener('deviceready', function(){
	// au lancement
}, false)

var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {templateUrl: 'partials/home.html'})
			.when('/about', {templateUrl: 'partials/about.html'})
			.otherwise({redirectTo: '/home'});
}]);