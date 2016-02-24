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
            googleChart.draw(dt, options);
            return typeof model.setChart === "function" ? model.setChart(googleChart) : void 0;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsU0FESCxDQUNhLGFBRGIsRUFDNEIsU0FBQTtJQUN4QjtBQUFBLFFBQUE7V0FFQSxTQUFBLEdBQ0k7TUFBQSxRQUFBLEVBQVcsR0FBWDtNQUNBLElBQUEsRUFBTSxTQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCO0FBR0osWUFBQTtRQUFBLFNBQUEsR0FBWSxTQUFBO0FBQ1YsY0FBQTtVQUFBLElBQUMsQ0FBQSxHQUFELEdBQU8sS0FBTSxDQUFBLENBQUE7VUFJYixLQUFBLEdBQVEsTUFBTSxDQUFDLEtBQVAsQ0FBYSxLQUFLLENBQUMsT0FBbkI7VUFNUixJQUFHLEtBQUg7WUFDRSxFQUFBLEdBQUssS0FBSyxDQUFDO1lBQ1gsT0FBQSxHQUFVLEtBQUssQ0FBQztZQUNoQixTQUFBLEdBQVksS0FBSyxDQUFDO1lBQ2xCLFlBQUEsR0FBZSxLQUFLLENBQUM7WUFFckIsV0FBQSxHQUFrQixJQUFBLE1BQU8sQ0FBQSxZQUFBLENBQWMsQ0FBQSxTQUFBLENBQXJCLENBQWdDLElBQUMsQ0FBQSxHQUFqQztZQUNsQixXQUFXLENBQUMsSUFBWixDQUFpQixFQUFqQixFQUFxQixPQUFyQjswREFDQSxLQUFLLENBQUMsU0FBVSxzQkFSbEI7O1FBWFU7ZUF1QlosTUFBTSxDQUFDLE1BQVAsQ0FBYyxnQkFBZCxFQUFnQyxTQUFDLEdBQUQ7VUFDOUIsSUFBRyxXQUFIO21CQUNLLFNBQUgsQ0FBQSxFQURGOztRQUQ4QixDQUFoQztNQTFCSSxDQUROOztFQUpvQixDQUQ1QjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2hhcnQvY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuZGlyZWN0aXZlICdnb29nbGVDaGFydCcsIC0+XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgZGlyZWN0aXZlID1cbiAgICAgICAgcmVzdHJpY3QgOiBcIkFcIixcbiAgICAgICAgbGluazogKCRzY29wZSwgJGVsZW0sICRhdHRyKSAtPlxuXG4gICAgICAgICAgI0Z1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB0cmlnZ2VyIGlzIGFjdGl2YXRlZFxuICAgICAgICAgIGluaXRDaGFydCA9IC0+XG4gICAgICAgICAgICBAJGVsID0gJGVsZW1bMF1cblxuICAgICAgICAgICAgIyBSdW4gJGV2YWwgb24gdGhlICRzY29wZSBtb2RlbCBwYXNzZWRcbiAgICAgICAgICAgICMgYXMgYW4gSFRNTCBhdHRyaWJ1dGVcbiAgICAgICAgICAgIG1vZGVsID0gJHNjb3BlLiRldmFsICRhdHRyLm5nTW9kZWxcblxuICAgICAgICAgICAgI0lmIHRoZSBtb2RlbCBpcyBkZWZpbmVkIG9uIHRoZSBzY29wZSxcbiAgICAgICAgICAgICNncmFiIHRoZSBkYXRhVGFibGUgdGhhdCB3YXMgc2V0IHVwXG4gICAgICAgICAgICAjZHVyaW5nIHRoZSBHb29nbGUgTG9hZGVyIGNhbGxiYWNrXG4gICAgICAgICAgICAjZnVuY3Rpb24sIGFuZCBkcmF3IHRoZSBjaGFydFxuICAgICAgICAgICAgaWYgbW9kZWxcbiAgICAgICAgICAgICAgZHQgPSBtb2RlbC5kYXRhXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBtb2RlbC5vcHRpb25zXG4gICAgICAgICAgICAgIGNoYXJ0VHlwZSA9ICRhdHRyLmdvb2dsZUNoYXJ0XG4gICAgICAgICAgICAgIGNoYXJ0UGFja2FnZSA9ICRhdHRyLmdvb2dsZVBhY2thZ2VcblxuICAgICAgICAgICAgICBnb29nbGVDaGFydCA9IG5ldyBnb29nbGVbY2hhcnRQYWNrYWdlXVtjaGFydFR5cGVdIEAkZWxcbiAgICAgICAgICAgICAgZ29vZ2xlQ2hhcnQuZHJhdyBkdCwgb3B0aW9uc1xuICAgICAgICAgICAgICBtb2RlbC5zZXRDaGFydD8gZ29vZ2xlQ2hhcnRcblxuICAgICAgICAgICMgV2F0Y2ggdGhlIHNjb3BlIHZhbHVlIHBsYWNlZCBvbiB0aGUgdHJpZ2dlciBhdHRyaWJ1dGVcbiAgICAgICAgICAjIGlmIGl0IGV2ZXIgZmxpcHMgdG8gdHJ1ZSwgYWN0aXZhdGUgdGhlIGNoYXJ0XG4gICAgICAgICAgJHNjb3BlLiR3YXRjaCAnZGF0YU1vZGVsLmRhdGEnLCAodmFsKSAtPlxuICAgICAgICAgICAgaWYgdmFsP1xuICAgICAgICAgICAgICBkbyBpbml0Q2hhcnRcblxuIl19