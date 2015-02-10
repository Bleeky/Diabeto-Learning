function HomeCtrl($scope) {

	$scope.modules = [
		{ name: "Module 1", description: "Petite description maggle" },
		{ name: "Module 2", description: "Module pourri lol", img: "img/ionic.png" },
		{ name: "Module 3", description: "la aussi" },
		{ name: "Module 4", description: "Nul", img: "img/ionic.png" },
		{ name: "Module 5", description: "ca saoule ca tiens" },
		{ name: "Module 6", description: "spas repetitif lol" },
		{ name: "Module 7", description: "poual" },
		{ name: "Module 8", description: "test" },
		{ name: "Module 9", description: "Un ptit dernier ?" }
	]

	$scope.list = $scope.modules;
	$scope.search = [
		{str: ""}
	];

	$scope.updateList = function() {
		$scope.list = [];
		console.log($scope.search);
		if ($scope.search.length == 0){
			$scope.list = $scope.modules;
			return ;
		}
		else
		{
			for (var i = 0; i <= $scope.modules.length - 1; i++) {
				if ($scope.modules[i].name.search($scope.search.str) >= 0 || $scope.modules[i].description.search($scope.search.str) >= 0)
					$scope.list.push($scope.modules[i]);
			}
		}
	}
}