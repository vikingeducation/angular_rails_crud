pinboard.controller('PinsShowCtrl', ['$scope', '$state', 'pin', 'Auth',
  function($scope, $state, pin, Auth){

  $scope.signedIn =  Auth.isAuthenticated;

  $scope.pin = pin;

  $scope.delete = function(){
    pin.remove().then(function(){
      $state.go('pins.index');
    });
  };

}]);