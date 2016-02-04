(function() {
  angular.module('aedes').controller('ChartEmDiaController', function($timeout, $scope, toastr) {
    'ngInject';
    var hideLoader, init, showLoader, vm;
    vm = this;
    hideLoader = function() {
      return $scope.loader = false;
    };
    showLoader = function() {
      return $scope.loader = true;
    };
    init = function() {
      $scope.prevencoes = $scope.$parent.prevencoesByFoco;
      return hideLoader();
    };
    init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9lbURpYS9jaGFydC5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsVUFESCxDQUNjLHNCQURkLEVBQ3NDLFNBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsTUFBbkI7SUFDbEM7QUFBQSxRQUFBO0lBQ0EsRUFBQSxHQUFLO0lBRUwsVUFBQSxHQUFhLFNBQUE7YUFDWCxNQUFNLENBQUMsTUFBUCxHQUFnQjtJQURMO0lBR2IsVUFBQSxHQUFhLFNBQUE7YUFDWCxNQUFNLENBQUMsTUFBUCxHQUFnQjtJQURMO0lBR2IsSUFBQSxHQUFPLFNBQUE7TUFDTCxNQUFNLENBQUMsVUFBUCxHQUFvQixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2hDLFVBQUgsQ0FBQTtJQUZLO0lBSUosSUFBSCxDQUFBO0VBZGtDLENBRHRDO0FBQUEiLCJmaWxlIjoiZmVhdHVyZXMvY2hhcnRzL2VtRGlhL2NoYXJ0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnYWVkZXMnXG4gIC5jb250cm9sbGVyICdDaGFydEVtRGlhQ29udHJvbGxlcicsICgkdGltZW91dCwgJHNjb3BlLCB0b2FzdHIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgIHZtID0gdGhpc1xuXG4gICAgaGlkZUxvYWRlciA9IC0+XG4gICAgICAkc2NvcGUubG9hZGVyID0gZmFsc2VcblxuICAgIHNob3dMb2FkZXIgPSAtPlxuICAgICAgJHNjb3BlLmxvYWRlciA9IHRydWVcblxuICAgIGluaXQgPSAtPlxuICAgICAgJHNjb3BlLnByZXZlbmNvZXMgPSAkc2NvcGUuJHBhcmVudC5wcmV2ZW5jb2VzQnlGb2NvXG4gICAgICBkbyBoaWRlTG9hZGVyXG5cbiAgICBkbyBpbml0XG5cbiAgICByZXR1cm5cbiJdfQ==