pin.directive('pinForm', ["PinsService", function(PinsService){

  return {

    restrict: 'AE',
    templateUrl: '/templates/pins/pin_form.html',
    scope: {
      pin: '='
    },
    link: function(scope) {

      if (scope.pin) {
        scope.formData = pin;
      } else {
        scope.formData = {
          buy_sell: "false"
        };
      }

      scope.createEditPin = function(){
        if (scope.pin) {
          PinsService.editPin(scope.formData)
        } else {
          PinsService.createPin(scope.formData)
        }
      }
    }
  }

}])