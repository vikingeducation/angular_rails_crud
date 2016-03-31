pinboard.controller('PinsIndexCtrl', ['$scope', 'pins', 'Restangular', function($scope, pins, Restangular) {

  $scope.pins = pins;
  $scope.description;
  $scope.title;
  $scope.buy_sell;

  $scope.createPin = function() {
    var newPin = {};
    newPin.item_name = $scope.title;
    newPin.description = $scope.description;
    newPin.buy_sell = $scope.buy_sell;
    newPin.user_id = 1;
    Restangular.all('pins').post(newPin)
    .then(function(response) {
      console.log(response);
      $scope.pins.unshift(response); 
    });
  };

  $scope.$watch($scope.buy_sell, function() {
    console.log($scope.buy_sell);
  });
}])