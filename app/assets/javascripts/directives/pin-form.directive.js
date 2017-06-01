app.directive('pinForm', function() {
  return {

    templateUrl: '/directives/pins/pinForm.html',

    scope:
    {
      formData: '=',
      processPin: '&'
    },

    restrict: 'E'

  };
});
