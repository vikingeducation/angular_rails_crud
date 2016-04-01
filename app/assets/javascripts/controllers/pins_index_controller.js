pinboard.controller('PinsIndexCtrl', ['$scope', 'pins', function($scope, pins) {
    $scope.pins = pins;
    $scope.newPin = {};
    $scope.newPin.user_id = 1;

    $scope.buySellOptions = [
        { value: true, label: 'Buy' },
        { value: false, label: 'For Sale' },
    ];

    $scope.createPin = function() {
        if ($scope.newPinForm.$valid) {
            $scope.pins.create($scope.newPin);
        };
    };
}]);
