(function() {
  angular.module('aedes').directive('acmeNavbar', function($state) {
    var NavbarController, directive;
    NavbarController = function(moment, $rootScope, $scope, appConfig) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = true;
      vm.currentState = $state.current.name;
      vm.appName = appConfig.NAME;
      vm.abas = [
        {
          sref: 'app.inicio',
          name: 'Início',
          showIf: $state.current.name !== 'app.inicio'
        }, {
          sref: 'app.infograficos.exibicao',
          name: 'Consultar infográficos?',
          showIf: $state.current.name !== 'app.infograficos.exibicao'
        }
      ];
      vm.checkActiveState = function(aba) {
        var current;
        current = $state.current.name;
        if (current) {
          if (current === aba.sref) {
            return true;
          }
        }
        return false;
      };
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '=',
        appName: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);
