(function() {
  angular.module('aedes').controller('ChartAtrasadasController', function($timeout, $scope, toastr) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9hdHJhc2FkYXMvY2hhcnQuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYywwQkFEZCxFQUMwQyxTQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLE1BQW5CO0lBQ3RDO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUVMLFVBQUEsR0FBYSxTQUFBO2FBQ1gsTUFBTSxDQUFDLE1BQVAsR0FBZ0I7SUFETDtJQUdiLFVBQUEsR0FBYSxTQUFBO2FBQ1gsTUFBTSxDQUFDLE1BQVAsR0FBZ0I7SUFETDtJQUdiLElBQUEsR0FBTyxTQUFBO01BQ0wsTUFBTSxDQUFDLFVBQVAsR0FBb0IsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNoQyxVQUFILENBQUE7SUFGSztJQUlKLElBQUgsQ0FBQTtFQWRzQyxDQUQxQztBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2NoYXJ0cy9hdHJhc2FkYXMvY2hhcnQuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ0NoYXJ0QXRyYXNhZGFzQ29udHJvbGxlcicsICgkdGltZW91dCwgJHNjb3BlLCB0b2FzdHIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgIHZtID0gdGhpc1xuXG4gICAgaGlkZUxvYWRlciA9IC0+XG4gICAgICAkc2NvcGUubG9hZGVyID0gZmFsc2VcblxuICAgIHNob3dMb2FkZXIgPSAtPlxuICAgICAgJHNjb3BlLmxvYWRlciA9IHRydWVcblxuICAgIGluaXQgPSAtPlxuICAgICAgJHNjb3BlLnByZXZlbmNvZXMgPSAkc2NvcGUuJHBhcmVudC5wcmV2ZW5jb2VzQnlGb2NvXG4gICAgICBkbyBoaWRlTG9hZGVyXG5cbiAgICBkbyBpbml0XG5cbiAgICByZXR1cm5cbiJdfQ==