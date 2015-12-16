angular.module 'aedes'
  .directive 'acmeNavbar', ->

    NavbarController = (moment) ->
      'ngInject'
      vm = this

      vm.mobileFirst = true
      vm.abas = [
        sref: 'infograficos.exibicao', name: 'Consultar infográficos?'
      ]

      return

    directive =
      restrict: 'E'
      templateUrl: 'app/components/navbar/navbar.html'
      scope:
        creationDate: '='
        appName: '='
      controller: NavbarController
      controllerAs: 'vm'
      bindToController: true
