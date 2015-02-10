function ModuleCtrl($scope, $state, $routeParams, $http) {
	console.log($state.params.moduleId);

	$scope.moduleId = $state.params.moduleId;
	$scope.modules = [
		{ id: 1, name: "Module 1", description: "Petite description maggle" },
		{ id: 2, name: "Module 2", description: "Module pourri lol", img: "img/ionic.png" },
		{ id: 3, name: "Module 3", description: "la aussi" },
		{ id: 4, name: "Module 4", description: "Nul", img: "img/ionic.png" },
		{ id: 5, name: "Module 5", description: "ca saoule ca tiens" },
		{ id: 6, name: "Module 6", description: "spas repetitif lol" },
		{ id: 7, name: "Module 7", description: "poual" },
		{ id: 8, name: "Module 8", description: "test" },
		{ id: 9, name: "Module 9", description: "Un ptit dernier ?" }
	]

		function getSuccess (response) {
			console.log("OMFG");
			$scope.modules = response;
		}

	$http.get("10.14.60.28:8888/LearnerApi/public/api/module").success(getSuccess).error(function (){
		alert("Impossible de récupérer les modules");
	})
	$scope.module = $scope.modules[$scope.moduleId - 1];
}