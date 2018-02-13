app.directive("datetimepickerdir", function() {
  return {
    require: 'ngModel',
    restrict: "A",
    link: function(scope, el, attr,ngModel) {
      $(el).datetimepicker({

      });
      $(el).on('change', function (e) {
        ngModel.$setViewValue(el.val());
      })
    }
  };
});

