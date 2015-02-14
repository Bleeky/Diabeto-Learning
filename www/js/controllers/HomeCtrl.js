function HomeCtrl($scope, $http, $state) {

	function getSuccess(response) {
		$scope.modules = response.modules;
		$scope.list = $scope.modules;
		$scope.search = [
			{str: ""}
		];
	}

	$scope.url = "http://10.14.60.15:8888/LearnerApi/public/api/modules";
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
		console.log(response);
		console.log("Non ? OMFG");
	});

	$scope.goToModule = function (moduleId) {
		console.log(moduleId);
	}

	$scope.updateList = function() {
		$scope.list = [];
		if ($scope.search.str.length == 0){
			$scope.list = $scope.modules;
			return ;
		}
		else
		{
			for (var i = 0; i <= $scope.modules.length - 1; i++) {
				if ($scope.modules[i].title.toLowerCase().search($scope.search.str.toLowerCase()) >= 0 ||
				 $scope.modules[i].description.toLowerCase().search($scope.search.str.toLowerCase()) >= 0)
					$scope.list.push($scope.modules[i]);
			}
		}
	}
}