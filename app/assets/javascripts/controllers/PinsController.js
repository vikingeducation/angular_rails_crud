App.controller('PinsCtrl', ['$scope', 'Restangular', '$stateParams', 'PinService',
                            function($scope, Restangular, $stateParams, PinService){


  $scope.pins = PinService.all();
  $scope.pin = Restangular.one('pins', $stateParams.id).get().$object;
  $scope.pinForm = {};



  $scope.createPin = function(){
    Restangular.all('pins').post({
      pin: {
        item_name: $scope.pinForm.item_name,
        buy_sell: true,
        description: $scope.pinForm.description,
        user_id: 7
      }
    }).then(function(response){
      console.log(response);

    });
    $scope.pinForm = {};
  };

  $scope.update = function(){
    console.log("Updating Pin");
  };

  $scope.id = $stateParams.id;

}]);
