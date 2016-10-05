app.controller("pinsNewCtrl", ['$scope', "pinService", "$rootScope", function($scope, pinService, $rootScope){
  $scope.form = {
    pin: {
      buy_sell: true,
      user_id: 11
    }
  };

  $scope.createPin = function(){
    pinService.createPin($scope.form).then(function(response){
      $rootScope.$broadcast('pin.create');
    });
  };
}]);
