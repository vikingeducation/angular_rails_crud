app.controller("PinsCtrl", ['$scope', 'pinService', '$rootScope', function($scope, pinService, $rootScope){

  $scope.pins = pinService.getPins().$object;
  


  $scope.$on('pin.created', function(){
    $scope.pins = pinService.getPins().$object;
  })

}]);