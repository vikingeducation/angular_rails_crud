PinBoard.directive('pinForm', ['PinService', '$state', '_', function(PinService, $state, _) {
  return {
    restrict: 'E',
    templateUrl: '/templates/directives/pin_form.html',
    scope: {
      pin: '='
    },
    link: function(scope) {

      if (scope.pin) {
        scope.formData = scope.pin;
        scope.formData.buy_sell = scope.formData.buy_sell ? "true" : "false"
      } else {
        scope.formData= {};
      }

      scope.createOrUpdatePin = function() {
        if (scope.pin) {
          PinService.patchPin(scope.formData, scope.pin)
            .then(function() {
              $state.go('pins.show', {id: scope.pin.id});
            });
        } else {
          PinService.postPin(scope.formData);
          scope.formData = {};
        }
      };
    }
  }
}])
