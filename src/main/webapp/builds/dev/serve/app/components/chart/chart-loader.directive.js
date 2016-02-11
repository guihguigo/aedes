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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQtbG9hZGVyLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxhQURiLEVBQzRCLFNBQUE7SUFDeEI7QUFBQSxRQUFBO1dBRUEsU0FBQSxHQUNJO01BQUEsUUFBQSxFQUFXLEdBQVg7TUFDQSxXQUFBLEVBQWEsaUNBRGI7TUFFQSxJQUFBLEVBQU0sU0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixLQUFoQjtBQUVKLFlBQUE7UUFBQSxVQUFBLEdBQWEsU0FBQTtpQkFDWCxNQUFNLENBQUMsTUFBUCxHQUFnQjtRQURMO1FBSWIsU0FBQSxHQUFZLFNBQUE7VUFDVixNQUFNLENBQUMsTUFBUCxHQUFnQjtpQkFFaEIsVUFBQSxDQUFXLFNBQUE7QUFDVCxnQkFBQTtZQUFBLElBQUMsQ0FBQSxHQUFELEdBQU8sQ0FBQSxDQUFFLEtBQU0sQ0FBQSxDQUFBLENBQVIsQ0FBVyxDQUFDLElBQVosQ0FBaUIsa0JBQWpCLENBQXFDLENBQUEsQ0FBQTtZQUk1QyxLQUFBLEdBQVEsTUFBTSxDQUFDLEtBQVAsQ0FBYSxLQUFLLENBQUMsT0FBbkI7WUFNUixJQUFHLEtBQUg7Y0FDRSxFQUFBLEdBQUssS0FBSyxDQUFDO2NBQ1gsT0FBQSxHQUFVLEtBQUssQ0FBQztjQUNoQixTQUFBLEdBQVksS0FBSyxDQUFDO2NBRWxCLFdBQUEsR0FBa0IsSUFBQSxNQUFNLENBQUMsYUFBYyxDQUFBLFNBQUEsQ0FBckIsQ0FBZ0MsSUFBQyxDQUFBLEdBQWpDO3FCQUNsQixXQUFXLENBQUMsSUFBWixDQUFpQixFQUFqQixFQUFvQixPQUFwQixFQU5GOztVQVhTLENBQVgsRUFrQkUsR0FsQkY7UUFIVTtlQTBCWixNQUFNLENBQUMsTUFBUCxDQUFjLHlCQUFkLEVBQXlDLFNBQUMsR0FBRDtVQUN2QyxJQUFHLGFBQUEsSUFBUyxHQUFaO21CQUNLLFNBQUgsQ0FBQSxFQURGO1dBQUEsTUFBQTttQkFHSyxVQUFILENBQUEsRUFIRjs7UUFEdUMsQ0FBekM7TUFoQ0ksQ0FGTjs7RUFKb0IsQ0FENUI7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL2NoYXJ0L2NoYXJ0LWxvYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnYWVkZXMnXG4gIC5kaXJlY3RpdmUgJ2dvb2dsZUNoYXJ0JywgLT5cbiAgICAnbmdJbmplY3QnXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgICByZXN0cmljdCA6IFwiQVwiLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0Lmh0bWwnXG4gICAgICAgIGxpbms6ICgkc2NvcGUsICRlbGVtLCAkYXR0cikgLT5cblxuICAgICAgICAgIGluaXRMb2FkZXIgPSAtPlxuICAgICAgICAgICAgJHNjb3BlLmxvYWRlciA9IHRydWVcblxuICAgICAgICAgICNGdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdHJpZ2dlciBpcyBhY3RpdmF0ZWRcbiAgICAgICAgICBpbml0Q2hhcnQgPSAtPlxuICAgICAgICAgICAgJHNjb3BlLmxvYWRlciA9IGZhbHNlXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgICAgICAgQCRlbCA9ICQoJGVsZW1bMF0pLmZpbmQoJy5jaGFydC1kaXJlY3RpdmUnKVswXVxuXG4gICAgICAgICAgICAgICMgUnVuICRldmFsIG9uIHRoZSAkc2NvcGUgbW9kZWwgcGFzc2VkXG4gICAgICAgICAgICAgICMgYXMgYW4gSFRNTCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgbW9kZWwgPSAkc2NvcGUuJGV2YWwgJGF0dHIubmdNb2RlbFxuXG4gICAgICAgICAgICAgICNJZiB0aGUgbW9kZWwgaXMgZGVmaW5lZCBvbiB0aGUgc2NvcGUsXG4gICAgICAgICAgICAgICNncmFiIHRoZSBkYXRhVGFibGUgdGhhdCB3YXMgc2V0IHVwXG4gICAgICAgICAgICAgICNkdXJpbmcgdGhlIEdvb2dsZSBMb2FkZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgI2Z1bmN0aW9uLCBhbmQgZHJhdyB0aGUgY2hhcnRcbiAgICAgICAgICAgICAgaWYgbW9kZWxcbiAgICAgICAgICAgICAgICBkdCA9IG1vZGVsLmRhdGFcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gbW9kZWwub3B0aW9uc1xuICAgICAgICAgICAgICAgIGNoYXJ0VHlwZSA9ICRhdHRyLmdvb2dsZUNoYXJ0XG5cbiAgICAgICAgICAgICAgICBnb29nbGVDaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbltjaGFydFR5cGVdIEAkZWxcbiAgICAgICAgICAgICAgICBnb29nbGVDaGFydC5kcmF3IGR0LG9wdGlvbnNcbiAgICAgICAgICAgICwgMTAwXG5cblxuICAgICAgICAgICMgV2F0Y2ggdGhlIHNjb3BlIHZhbHVlIHBsYWNlZCBvbiB0aGUgdHJpZ2dlciBhdHRyaWJ1dGVcbiAgICAgICAgICAjIGlmIGl0IGV2ZXIgZmxpcHMgdG8gdHJ1ZSwgYWN0aXZhdGUgdGhlIGNoYXJ0XG4gICAgICAgICAgJHNjb3BlLiR3YXRjaCAnZGF0YU1vZGVsLmFjdGl2YXRlQ2hhcnQnLCAodmFsKSAtPlxuICAgICAgICAgICAgaWYgdmFsPyBhbmQgdmFsXG4gICAgICAgICAgICAgIGRvIGluaXRDaGFydFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBkbyBpbml0TG9hZGVyXG5cbiJdfQ==