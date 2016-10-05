pin.directive('pinForm', ["PinsService", function(PinsService){

  return {

    restrict: 'AE',
    templateUrl: '/templates/pins/pin_form.html',
    scope: {
      pin: '='
    },
    link: function(scope) {

      console.log(scope.pin)
      if (scope.pin) {
        scope.formData = {
          item_name: scope.pin.item_name,
          description: scope.pin.description,
          buy_sell: scope.pin.buy_sell
        };
      } else {
        scope.formData = {
          buy_sell: "false"
        };
      }
      console.log(scope.formData)

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