(function() {
  angular.module('aedes').controller('ChartsController', function($scope, moment, estados) {
    'ngInject';
    var vm;
    vm = this;
    return $scope.estados = estados.data;
  });

}).call(this);
