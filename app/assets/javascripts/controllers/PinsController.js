App.controller('PinsCtrl', ['$scope', 'Restangular', '$stateParams', 'PinService',
                            function($scope, Restangular, $stateParams, PinService){


  $scope.pins = PinService.all();
  $scope.pinForm = {};


  $scope.createPin = function(){
    console.log($scope.pinForm);
    Restangular.all('pins').post({
      pin: {
        item_name: $scope.pinForm.item_name,
        buy_sell: true,
        description: $scope.pinForm.description,
        user_id: 7
      }
    }).then(function(response){
      console.log(response);
      $scope.pins = PinService.all();
      $scope.pinForm = {};
    });
  };


  $scope.id = $stateParams.id;

}]);
