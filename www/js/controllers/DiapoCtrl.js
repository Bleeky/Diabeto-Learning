function DiapoCtrl($scope, $http) {

	console.log("POUAL");

	$scope.index = 0;
	$scope.templates = [
		{url: ""},
		{url: "templates/diapos/image.html"},
		{url: "templates/diapos/text.html"},
		{url: "templates/diapos/text_image.html"}
	];

	function getSuccess(response) {
		$scope.index = 0;
		$scope.diapo = response.diapo;
		$scope.diapo[0].content = JSON.parse($scope.diapo[0].content);
		$scope.diapo = $scope.diapo[0];
		$scope.diapo.content = $scope.diapo.content[0];
		$scope.index = parseInt($scope.diapo.content.type) + 1;
		console.log($scope.templates);
		console.log($scope.templates[3]);
		console.log($scope.index);
		console.log($scope.diapo);
	}	

	$scope.url = "http://10.14.60.15:8888/LearnerApi/public/api/diapos/6";
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
		console.log(response);
	});
}