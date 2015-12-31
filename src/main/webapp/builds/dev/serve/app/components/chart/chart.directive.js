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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsU0FESCxDQUNhLGFBRGIsRUFDNEIsU0FBQTtJQUN4QjtBQUFBLFFBQUE7V0FFQSxTQUFBLEdBQ0k7TUFBQSxRQUFBLEVBQVcsR0FBWDtNQUNBLElBQUEsRUFBTSxTQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCO0FBR0osWUFBQTtRQUFBLFNBQUEsR0FBWSxTQUFBO0FBQ1YsY0FBQTtVQUFBLElBQUMsQ0FBQSxHQUFELEdBQU8sS0FBTSxDQUFBLENBQUE7VUFJYixLQUFBLEdBQVEsTUFBTSxDQUFDLEtBQVAsQ0FBYSxLQUFLLENBQUMsT0FBbkI7VUFNUixJQUFHLEtBQUg7WUFDRSxFQUFBLEdBQUssS0FBSyxDQUFDO1lBQ1gsT0FBQSxHQUFVLEtBQUssQ0FBQztZQUNoQixTQUFBLEdBQVksS0FBSyxDQUFDO1lBQ2xCLFlBQUEsR0FBZSxLQUFLLENBQUM7WUFFckIsV0FBQSxHQUFrQixJQUFBLE1BQU8sQ0FBQSxZQUFBLENBQWMsQ0FBQSxTQUFBLENBQXJCLENBQWdDLElBQUMsQ0FBQSxHQUFqQzttQkFDbEIsV0FBVyxDQUFDLElBQVosQ0FBaUIsRUFBakIsRUFBb0IsT0FBcEIsRUFQRjs7UUFYVTtlQXVCWixNQUFNLENBQUMsTUFBUCxDQUFjLGdCQUFkLEVBQWdDLFNBQUMsR0FBRDtVQUM5QixJQUFHLFdBQUg7bUJBQ0ssU0FBSCxDQUFBLEVBREY7O1FBRDhCLENBQWhDO01BMUJJLENBRE47O0VBSm9CLENBRDVCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jaGFydC9jaGFydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnYWVkZXMnXG4gIC5kaXJlY3RpdmUgJ2dvb2dsZUNoYXJ0JywgLT5cbiAgICAnbmdJbmplY3QnXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgICByZXN0cmljdCA6IFwiQVwiLFxuICAgICAgICBsaW5rOiAoJHNjb3BlLCAkZWxlbSwgJGF0dHIpIC0+XG5cbiAgICAgICAgICAjRnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHRyaWdnZXIgaXMgYWN0aXZhdGVkXG4gICAgICAgICAgaW5pdENoYXJ0ID0gLT5cbiAgICAgICAgICAgIEAkZWwgPSAkZWxlbVswXVxuXG4gICAgICAgICAgICAjIFJ1biAkZXZhbCBvbiB0aGUgJHNjb3BlIG1vZGVsIHBhc3NlZFxuICAgICAgICAgICAgIyBhcyBhbiBIVE1MIGF0dHJpYnV0ZVxuICAgICAgICAgICAgbW9kZWwgPSAkc2NvcGUuJGV2YWwgJGF0dHIubmdNb2RlbFxuXG4gICAgICAgICAgICAjSWYgdGhlIG1vZGVsIGlzIGRlZmluZWQgb24gdGhlIHNjb3BlLFxuICAgICAgICAgICAgI2dyYWIgdGhlIGRhdGFUYWJsZSB0aGF0IHdhcyBzZXQgdXBcbiAgICAgICAgICAgICNkdXJpbmcgdGhlIEdvb2dsZSBMb2FkZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICNmdW5jdGlvbiwgYW5kIGRyYXcgdGhlIGNoYXJ0XG4gICAgICAgICAgICBpZiBtb2RlbFxuICAgICAgICAgICAgICBkdCA9IG1vZGVsLmRhdGFcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IG1vZGVsLm9wdGlvbnNcbiAgICAgICAgICAgICAgY2hhcnRUeXBlID0gJGF0dHIuZ29vZ2xlQ2hhcnRcbiAgICAgICAgICAgICAgY2hhcnRQYWNrYWdlID0gJGF0dHIuZ29vZ2xlUGFja2FnZVxuXG4gICAgICAgICAgICAgIGdvb2dsZUNoYXJ0ID0gbmV3IGdvb2dsZVtjaGFydFBhY2thZ2VdW2NoYXJ0VHlwZV0gQCRlbFxuICAgICAgICAgICAgICBnb29nbGVDaGFydC5kcmF3IGR0LG9wdGlvbnNcblxuXG4gICAgICAgICAgIyBXYXRjaCB0aGUgc2NvcGUgdmFsdWUgcGxhY2VkIG9uIHRoZSB0cmlnZ2VyIGF0dHJpYnV0ZVxuICAgICAgICAgICMgaWYgaXQgZXZlciBmbGlwcyB0byB0cnVlLCBhY3RpdmF0ZSB0aGUgY2hhcnRcbiAgICAgICAgICAkc2NvcGUuJHdhdGNoICdkYXRhTW9kZWwuZGF0YScsICh2YWwpIC0+XG4gICAgICAgICAgICBpZiB2YWw/XG4gICAgICAgICAgICAgIGRvIGluaXRDaGFydFxuXG4iXX0=