app.controller("NewPinCtrl", ['$scope', 'pinService', '$rootScope', function($scope, pinService, $rootScope){

  
  $scope.form = {};

  $scope.createPin = function(){
    pinService.createPin($scope.form);

    $rootScope.$broadcast('pin.created');
  }


  

}]);