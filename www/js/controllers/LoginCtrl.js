function LoginCtrl($scope, $http, $state, $rootScope) {

	$rootScope.config = {
		"url" : "http://10.14.59.196:8888/LearnerApi/public/api",
		"autoconnect" : "true"
	}

	$scope.loginUrl = $rootScope.connectionSuccess.url + "/login";
	$scope.login = "";
	$scope.password = "";
	
	$scope

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

	if ($rootScope.config.autoconnect || $rootScope.isLogged)
		$state.go('home');
}