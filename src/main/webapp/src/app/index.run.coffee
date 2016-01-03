'use strict'

google.load('visualization', '1', {
  packages: ["bar", "corechart", "line", "geochart"]
})

runApp = (angular) ->
  angular.module 'aedes'
    .run ($log, $state, $rootScope) ->
      'ngInject'

      $log.debug 'Aedes started'

      $rootScope.$on "$stateChangeSuccess", (event, toState, toParams, fromState, fromParams) ->
        $rootScope.activeState = toState.name
        $state.go 'app.inicio' if toState.name is 'app'

google.setOnLoadCallback runApp(angular)
