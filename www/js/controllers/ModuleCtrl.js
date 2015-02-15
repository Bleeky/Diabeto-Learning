function ModuleCtrl($scope, $state, $routeParams, $http) {

	$scope.moduleId = $state.params.moduleId;
	function getSuccess(response) {
		$scope.module = response.module;
	}

	$scope.url = "http://10.14.60.15:8888/LearnerApi/public/api/modules/" + $scope.moduleId;
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
		console.log(response);
	});
}