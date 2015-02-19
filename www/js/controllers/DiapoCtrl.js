function DiapoCtrl($scope, $http, $rootScope) {

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
		$scope.index = parseInt($scope.diapo.content.type);
		$scope.index = 3;
		console.log($scope.diapo);
	}

	$scope.onSwipe = function(direction) {
		$scope.url = $rootScope.config.url + "/diapos/" + $scope.diapo.id + "/" + direction;
		if ((direction == 'next' && $scope.diapo.next_id == null) || (direction == 'prev' && $scope.diapo.prev_id == null))
			return ;
		$http({method: 'GET',
			url: $scope.url,
		}).success(getSuccess).error(function (response){
			console.log(response);
		});
	}

	$scope.url = $rootScope + "/diapos/1";
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
		console.log(response);
	});
}