pinboard.controller('PinsIndexCtrl', ['$scope', 'pins', 'PinsAPI',
  function($scope, pins, PinsAPI){

  $scope.pins = pins;
  $scope.buySellOptions = {
    'I want to buy': true,
    'For Sale': false
  };

  $scope.create = function(){
    PinsAPI.create($scope.newPin)
      .then(function(pin){
        $scope.pins.push(pin);
        $scope.newPin = {};
      });
  };

  $scope.delete = function(pin){
    PinsAPI.destroy(pin)
      .then(function(){
        pins.splice(pins.indexOf(pin), 1);
      });
  };

}]);