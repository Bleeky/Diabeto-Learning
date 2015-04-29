function LoginCtrl($scope, $http, $state, $rootScope) {

	$rootScope.config = {
		url : "http://195.154.110.125:80/api",
		autoconnect : true
	}

	$scope.loginUrl = $rootScope.config.url + "/login";
	$scope.login = "";
	$scope.password = "";
	

	connectionSuccess = function(response) {
		$state.go('home');
	}

	connectionError = function(response) {
		alert("Impossible de vous connecter")
	}

	$scope.connect = function() {
		connectionSuccess('test');
		$http.get(this.loginUrl + "?login=" + this.login + "&password=" + this.password).success(connectionSuccess).error(connectionError);
	}

	if ($rootScope.config.autoconnect == true || $rootScope.isLogged)
		$state.go('home');
}