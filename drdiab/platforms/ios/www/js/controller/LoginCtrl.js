function LoginCtrl($scope, $http, $location, $window){

	$scope.login = function(){
		/*$request. onSuccess(function(){*/
		$location.path('/home');
		console.log("Nique");
/*	}
		}).onError(){
		alert("Ce NIP est inconnu.");
	}*/
	}
}