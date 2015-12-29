(function() {
  angular.module('aedes').directive('googleChart', function() {
    'ngInject';
    var directive;
    return directive = {
      restrict: "A",
      templateUrl: 'app/components/chart/chart.html',
      link: function($scope, $elem, $attr) {
        var initChart, initLoader;
        initLoader = function() {
          return $scope.loader = true;
        };
        initChart = function() {
          $scope.loader = false;
          return setTimeout(function() {
            var chartType, dt, googleChart, model, options;
            this.$el = $($elem[0]).find('.chart-directive')[0];
            model = $scope.$eval($attr.ngModel);
            if (model) {
              dt = model.data;
              options = model.options;
              chartType = $attr.googleChart;
              googleChart = new google.visualization[chartType](this.$el);
              return googleChart.draw(dt, options);
            }
          }, 100);
        };
        return $scope.$watch('dataModel.activateChart', function(val) {
          if ((val != null) && val) {
            return initChart();
          } else {
            return initLoader();
          }
        });
      }
    };
  });

}).call(this);
