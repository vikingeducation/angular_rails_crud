PinBoard.directive('pinForm', ['PinService', '$state', function(PinService, $state) {
  return {
    restrict: 'E',
    templateUrl: '/templates/directives/pin_form.html',
    scope: {
      pin: '='
    },
    link: function(scope) {
      if (scope.pin) {
        scope.formData = scope.pin;
      } else {
        scope.formData= {};
      }
      scope.createOrUpdatePin = function() {
        if (scope.pin) {
          PinService.patchPin(scope.formData, scope.pin);
          $state.go('pins.show', {id: scope.pin.id})
        } else {
          PinService.postPin(scope.formData);
          scope.formData = {};
        }
      };
    }
  }
}])
