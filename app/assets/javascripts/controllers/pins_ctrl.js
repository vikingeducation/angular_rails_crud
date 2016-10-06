pin.controller('PinsCtrl', ['$scope', 'Auth', 'PinsService', 'pins', function($scope, Auth, PinsService, pins) {


  Auth.currentUser()
      .then(function(user){
        $scope.currentUser = user;
      }, function(response) {
        console.error(response);
      });

  $scope.pins = PinsService.getPins();
  // console.log($scope.pins);
  
  $scope.createPin = function() {
    PinsService.createPin($scope.newPin);
  };

  

}]);