(function() {
  angular.module('aedes').directive('googleChart', function() {
    'ngInject';
    var directive;
    return directive = {
      restrict: "A",
      link: function($scope, $elem, $attr) {
        var initChart;
        initChart = function() {
          var chartPackage, chartType, dt, googleChart, model, options;
          this.$el = $elem[0];
          model = $scope.$eval($attr.ngModel);
          if (model) {
            dt = model.data;
            options = model.options;
            chartType = $attr.googleChart;
            chartPackage = $attr.googlePackage;
            googleChart = new google[chartPackage][chartType](this.$el);
            return googleChart.draw(dt, options);
          }
        };
        return $scope.$watch('dataModel.data', function(val) {
          if (val != null) {
            return initChart();
          }
        });
      }
    };
  });

}).call(this);
