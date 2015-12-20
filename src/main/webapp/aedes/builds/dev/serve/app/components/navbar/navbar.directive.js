(function() {
  angular.module('aedes').directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = true;
      vm.abas = [
        {
          sref: 'infograficos.exibicao',
          name: 'Consultar infográficos?'
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
