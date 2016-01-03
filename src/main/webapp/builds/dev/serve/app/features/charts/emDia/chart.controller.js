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
