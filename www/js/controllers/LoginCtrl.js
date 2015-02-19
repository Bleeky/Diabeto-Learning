function LoginCtrl($scope, $http, $state, $rootScope) {

	$rootScope.config = {
		url : "http://192.168.0.17:8888/LearnerApi/public/api",
		autoconnect : true
	}

	console.log($rootScope.config);

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