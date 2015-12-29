(function() {
  angular.module('aedes').controller('ChartAtrasadasController', function($timeout, $scope, webDevTec, toastr) {
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
      $scope.prevencoes = [
        {
          index: 1,
          prevencao: "Caixa D'água",
          atrasadas: 20.4
        }, {
          index: 2,
          prevencao: "Calhas",
          atrasadas: 30.4
        }, {
          index: 3,
          prevencao: "Ralos",
          atrasadas: 10.4
        }, {
          index: 4,
          prevencao: "Recipientes Descartáveis",
          atrasadas: 60.4
        }, {
          index: 5,
          prevencao: "Lixos",
          atrasadas: 50.4
        }
      ];
      return hideLoader();
    };
    init();
  });

}).call(this);
