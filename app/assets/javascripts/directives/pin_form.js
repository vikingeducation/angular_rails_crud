PinBoard.directive('pinForm', ['PinService', function(PinService) {
  return {
    restrict: 'E',
    templateUrl: '/templates/directives/pin_form.html',
    scope: {},
    link: function(scope) {
      scope.formData= {};

      scope.createPin = function() {
        PinService.postPin(scope.formData);
        scope.formData = {};
      };
    }
  }
}])
