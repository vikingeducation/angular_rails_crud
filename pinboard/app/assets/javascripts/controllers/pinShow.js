pinboard.controller('pinShowCtrl', ['$scope', 'pin', 'Restangular', '$location', function($scope, pin, Restangular, $location){

  $scope.pin = pin;

  $scope.updatePin = function(){
    $scope.pin.put().then(function(){
      $location.path('/pins/index');
    });
  };

  $scope.deletePin = function(){
    $scope.pin.remove().then(function(){
      $location.path('/pins/index');
    });
  };

}]);