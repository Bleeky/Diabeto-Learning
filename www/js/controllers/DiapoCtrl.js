function DiapoCtrl($scope, $http) {

	$scope.index = 0;
	$scope.templates = [
		{url: ""},
		{url: "templates/diapos/image.html"},
		{url: "templates/diapos/text.html"},
		{url: "templates/diapos/text_image.html"},
		{url: "templates/diapos/img-left_text-right.html"},
		{url: "templates/diapos/text-left_img-right.html"},
	];

	function getSuccess(response) {
		$scope.index = 0;
		$scope.diapo = response.diapo;
		$scope.diapo.content = JSON.parse($scope.diapo.content);
		$scope.diapo.content = $scope.diapo.content[0];
		$scope.index = parseInt($scope.diapo.content.type) + 1;
	}

	$scope.onSwipe = function(direction) {
		$scope.url = "http://10.14.60.15:8888/LearnerApi/public/api/diapos/" + $scope.diapo.id + "/" + direction;
		if ((direction == 'next' && $scope.diapo.next_id == null) || (direction == 'prev' && $scope.diapo.prev_id == null))
			return ;
		$http({method: 'GET',
			url: $scope.url,
		}).success(getSuccess).error(function (response){
			console.log(response);
		});
	}

	$scope.url = "http://10.14.60.15:8888/LearnerApi/public/api/diapos/6";
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
		console.log(response);
	});
}