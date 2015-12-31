(function() {
  angular.module('aedes').controller('ChartsController', function($scope, $timeout, $log, focos, prevencoesByFoco) {
    'ngInject';
    var vm;
    vm = this;
    $scope.focos = focos.data;
    return $scope.prevencoesByFoco = prevencoesByFoco.data;
  });

}).call(this);
