pin.controller('PinsShowCtrl', ['$scope', 'Auth', '$state', 'PinsService', 'pins', '$stateParams', 'pin', function($scope, Auth,  $state, PinsService, pins, $stateParams, pin) {

  Auth.currentUser()
      .then(function(user){
        $scope.currentUser = user;
      }, function(response) {
        console.error(response);
      });

  $scope.pins = pins;
  $scope.pin = pin

  $scope.deletePin = function(){
    PinsService.deletePin($scope.pin);
  }

  $scope.isCurrentUser = function(){
    return $scope.currentUser.id === $scope.pin.user.id;
  }
  

}]);