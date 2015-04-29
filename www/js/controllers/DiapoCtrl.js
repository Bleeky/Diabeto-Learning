function DiapoCtrl($scope, $http, $rootScope, $ionicPopup) {

	$scope.index = 0;
	$scope.templates = [
		{url: ""},
		{url: "templates/diapos/text.html"},
		{url: "templates/diapos/image.html"},
		{url: "templates/diapos/text_image.html"},
		{url: "templates/diapos/img-left_text-right.html"},
		{url: "templates/diapos/text-left_img-right.html"},
		{url: "templates/diapos/response_radio.html"},
		{url: "templates/diapos/response_checkbox.html"},
		{url: "templates/diapos/response_range.html"},
	];

	function getSuccess(response) {
		$scope.index = 0;
		$scope.diapo = response.diapo;
		$scope.diapo.content = JSON.parse($scope.diapo.content);
		$scope.diapo.content = $scope.diapo.content[0];
		$scope.index = parseInt($scope.diapo.content.type);
		if ($scope.index == 8) {
			$scope.rangeValue = (parseInt($scope.diapo.content.range_begin) + parseInt($scope.diapo.content.range_end)) / 2;
			$scope.rangeValue = $scope.rangeValue.toString();
		}
	}

	$scope.onSwipe = function(direction) {
		$scope.url = $rootScope.config.url + "/diapos/" + $scope.diapo.id + "/" + direction;
		if ((direction == 'next' && $scope.diapo.next_id == null) || (direction == 'prev' && $scope.diapo.prev_id == null))
			return ;
		$http({method: 'GET',
			url: $scope.url,
		}).success(getSuccess).error(function (response){
		});
	}

	$scope.check = function(type, index) {
		if (type == 'radio') {
			for (var i = 0; i < $scope.diapo.content.responses.length; i++){
				$scope.diapo.content.responses[i].checked = false;
			}
			$scope.diapo.content.responses[index].checked = ($scope.diapo.content.responses[index].checked ? false : true)
		}
		else if (type == 'checkbox') {
			$scope.diapo.content.responses[index].checked = ($scope.diapo.content.responses[index].checked ? false : true)
		}
	}

	function checkResponse () {
		var str = "";
		for (var i = 0; i < $scope.diapo.content.responses.length; i++){
			if ($scope.diapo.content.responses[i].checked == undefined)
				$scope.diapo.content.responses[i].checked = false;
			if ($scope.diapo.content.responses[i].checked.toString() != $scope.diapo.content.responses[i].valid)
			{
				str += "FAIL";
			}
		}
		if (str.length > 0)
		{
			str = "Réponses attendues : ";
			for (var i = 0; i < $scope.diapo.content.responses.length; ++i){
				if ($scope.diapo.content.responses[i].valid != "false")
					str += "la numéro " + (i + 1) + ", ";
			}
			if (str.length == 21)
				str += "Aucune !";
			else
				str = str.substr(0, str.length - 2);
		}
		return str;
	}

	function checkRange () {
		$scope.rangeValue = document.getElementById('rangeValue');
		$scope.rangeValue = $scope.rangeValue.value;
		var title = ["Bravo ! :D", "Mauvaise réponse :'("];
		var advice = $scope.rangeValue == $scope.diapo.content.response ? "" : "La bonne réponse est : " + $scope.diapo.content.response;
	    var alertPopup = $ionicPopup.alert({
	      title: title[(advice.length ? 1 : 0)],
	      template: advice
	    });
	    alertPopup.then(function(res) {
	    	$scope.onSwipe("next");
	    });
	}

	$scope.submitResponse = function() {
		if ($scope.index == 8) {
			checkRange($scope);
		}
		else {
			var title = ["Bravo ! :D", "Mauvaise réponse :'("];
			var advice = checkResponse($scope);
		    var alertPopup = $ionicPopup.alert({
		      title: title[(advice.length ? 1 : 0)],
		      template: advice
		    });
		    alertPopup.then(function(res) {
		    	$scope.onSwipe("next");
		    });
	    }
	 };

	$scope.url = $rootScope.config.url + "/diapos/1";
	$http({method: 'GET',
		url: $scope.url,
	}).success(getSuccess).error(function (response){
	});
}