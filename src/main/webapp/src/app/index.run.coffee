'use strict'

google.load('visualization', '1', {
  packages: ["bar", "corechart", "line", "geochart"]
})

runApp = (angular) ->
  console.log 'google charts is loaded, initializing aedes app.'

  angular.module 'aedes'
    .run ($log, $state, $rootScope) ->
      'ngInject'

      $log.debug 'application started'

      $rootScope.$on "$stateChangeError", (event, toState, toParams) ->
        $log.info "stateChangeError"

      $rootScope.$on "$stateChangeStart", (event, toState, toParams, fromState, fromParams) ->
        $log.info "stateChangeStart"

      $rootScope.$on "$stateChangeSuccess", (event, toState, toParams, fromState, fromParams) ->
        $rootScope.activeState = toState.name
        $state.go 'app.inicio' if toState.name is 'app'

google.setOnLoadCallback runApp(angular)
