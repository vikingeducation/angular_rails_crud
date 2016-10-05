app.controller("pinsNewCtrl", ['$scope', "pinService", "$rootScope", function($scope, pinService, $rootScope){
  $scope.form = {
    pin: {
      buy_sell: true,
    }
  };

  $scope.createPin = function(){
    pinService.createPin($scope.form).then(function(response){
      $rootScope.$broadcast('pin.create');
    });
  };
}]);
