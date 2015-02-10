function LoginCtrl($scope, $http, $state) {

	$scope.loginUrl = "myapiurl/login";
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

}