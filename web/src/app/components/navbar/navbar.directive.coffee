angular.module 'aedes'
  .directive 'acmeNavbar', ($state) ->

    NavbarController = (moment, $rootScope, $scope, appConfig) ->
      'ngInject'
      vm = this

      vm.mobileFirst  = false
      vm.currentState = $state.current.name
      vm.appName      = appConfig.NAME
      vm.abas = [
        {sref: 'app.inicio',                name: 'Início',                  showIf: $state.current.name != 'app.inicio'}
        {sref: 'app.infograficos.exibicao', name: 'Consultar infográficos?', showIf: $state.current.name != 'app.infograficos.exibicao'}
        # {sref: 'app.contribuidores',        name: 'Contribuidores',          showIf: $state.current.name != 'app.contribuidores'}
      ]

      vm.checkActiveState = (aba) ->
        current = $state.current.name
        if current
          if current is aba.sref
            return true

        return false

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
