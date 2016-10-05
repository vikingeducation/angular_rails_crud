"use strict";
angular.module('app').controller('PinsShowCtrl', ['$scope', 'PinService','$stateParams', '$state', "Auth", function($scope, PinService, $stateParams, $state, Auth){


  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  })


	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.pin = pin;
	});

  $scope.isCurrentUser = function(userId) {

    return userId === $scope.currentUser.id
  }

	$scope.delete = function(){
		$scope.pin.remove();
		$state.go('pins.index');
	};

}]);