function WeatherCtrl($scope, $http){

	$scope.panel = 0;

	$scope.search = function(){
		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + 
		$scope.city + 
		"&mode=json&units=metric&cnt=10";
		$http.get(url).success(httpSuccess).error(function(){
			alert('Recuperation failed');
		})
	}


	httpSuccess = function(response){
		$scope.weather = response;
		$scope.panel = 1;
	}

	$scope.expand = function(e){
		$elem = $(e.currentTarget);
		$elem.addClass('row_active').siblings().removeClass('row_active');
	}

	$scope.goBack = function(e){
		panel = 0;
	}

	$scope.dispBackBtn = function(){
		return ($scope.panel == 0 ? false : true);
	}

	$scope.city = "Paris";

	/*$scope.search();*/

	$scope.Math = Math;
}