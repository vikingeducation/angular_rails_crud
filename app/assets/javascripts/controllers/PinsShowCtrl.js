"use strict";
angular.module('app').controller('PinsShowCtrl', ['$scope', 'PinService','$stateParams', '$state', "Auth", 'currentUser', function($scope, PinService, $stateParams, $state, Auth, currentUser){


  // Auth.currentUser().then(function(user) {
  //   $scope.currentUser = user;
  // })


	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.pin = pin;
	});

  $scope.isCurrentUser = function(userId) {

    return userId === currentUser.id;
  };

	$scope.delete = function(){
		$scope.pin.remove();
		$state.go('pins.index');
	};

}]);