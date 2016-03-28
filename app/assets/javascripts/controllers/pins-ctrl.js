// ----------------------------------------
// PinsCtrl
// ----------------------------------------

Pinnacle.controller('PinsCtrl',
  ['_', '$scope', '$state', 'Restangular', 'pins', 'pinTypes', 'ActionService',
  function(_, $scope, $state, Restangular, pins, pinTypes, ActionService) {

    var _createPin = function(pin) {
      console.log(pin);
      return Restangular.all('pins').post({
        pin: pin
      });
    };


    _.each(pins, function(pin, index) {
      pin.destroy = function() {
        pin.remove()
          .then(function(response) {
            console.log(response);
            $scope.pins = _.reject($scope.pins, function(item) {
              return item.id === pin.id;
            });
          }, function(response) {
            console.error(response);
          });
      };
    });


    ActionService.init($state).create({
      "pins": {

        "index": function() {
          $scope.pins = pins;
          $scope.pinTypes = pinTypes;
          $scope.pinParams = {
            pin_type_id: (pinTypes[0]) ? pinTypes[0].id : 0
          };

          $scope.createPin = function() {
            _createPin($scope.pinParams)
              .then(function(response) {
                console.log(response);
                $scope.pins.unshift(response);
                $scope.pinParams = {
                  pin_type_id: (pinTypes[0]) ? pinTypes[0].id : 0
                };
              }, function(response) {
                console.error(response);
              });
          };
        },


        "show": function(params) {
          $scope.pin = _.find(pins, function(pin) {
            return pin.id === parseInt(params.id);
          });
        },


        "edit": function(params) {
          $scope.pin = _.find(pins, function(pin) {
            return pin.id === parseInt(params.id);
          });
          console.log($scope.pin);
          $scope.pinTypes = pinTypes;
          $scope.pin.update = function() {
            $scope.pin.put()
              .then(function(response) {
                console.log(response);
                $scope.pin = _.extend(response, $scope.pin);
              }, function(response) {
                console.error(response);
              });
          };
        }

      }
    });

  }]);

