function ModuleCtrl($scope, $state, $routeParams, $http, $rootScope) {

	$scope.moduleId = $state.params.moduleId;
	function getSuccess(response) {
		$scope.module = response.module;
	}


	$scope.url = $rootScope.config.url + "/modules/" + $scope.moduleId;
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
	});
}