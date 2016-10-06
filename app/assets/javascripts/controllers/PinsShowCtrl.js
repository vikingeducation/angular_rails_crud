"use strict";
angular.module('app').controller('PinsShowCtrl', ['$scope', 'PinService','$stateParams', '$state', "Auth", 'currentUser', function($scope, PinService, $stateParams, $state, Auth, currentUser){


  // Auth.currentUser().then(function(user) {
  //   $scope.currentUser = user;
  // })


	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.pin = pin;
		console.log("here's the pin: ", $scope.pin);
	});

  $scope.isCurrentUser = function(userId) {
  	console.log("userID ", userId);
  	console.log("currentUser ", currentUser);
    return userId === currentUser.id;
  };

	$scope.delete = function(){
		$scope.pin.remove();
		$state.go('pins.index');
	};

}]);