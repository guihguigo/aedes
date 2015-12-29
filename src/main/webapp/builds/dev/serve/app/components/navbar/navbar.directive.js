(function() {
  angular.module('aedes').directive('acmeNavbar', function($state) {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = true;
      vm.currentState = $state.current.name;
      vm.abas = [
        {
          sref: 'infograficos.exibicao',
          name: 'Consultar infográficos?',
          showIf: $state.current.name !== 'infograficos.exibicao'
        }
      ];
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
