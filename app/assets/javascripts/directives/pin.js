crudpin.directive('pin', function() {
  return {
    templateUrl: '/templates/pins/directives/pin.html',
    restrict: 'E',
    scope: {
      pin: '='
    }
  };
});