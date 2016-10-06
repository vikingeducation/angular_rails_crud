pin.directive('pinForm', ["PinsService", "$state", function(PinsService, $state){

  return {

    restrict: 'AE',
    templateUrl: '/templates/pins/pin_form.html',
    scope: {
      pin: '='
    },
    link: function(scope) {

      if (scope.pin) {
        scope.formData = {
          item_name: scope.pin.item_name,
          description: scope.pin.description,
          buy_sell: scope.pin.buy_sell.toString()
        };
      } else {
        scope.formData = {
          buy_sell: "false"
        };
      }

      scope.createEditPin = function(){
        if (scope.pin) {
          PinsService.editPin(scope.formData, scope.pin)
        } else {
          PinsService.createPin(scope.formData)
        }
      }
    }
  }

}])