(function() {
  'use strict';
  var runApp;

  google.load('visualization', '1', {
    packages: ["bar", "corechart", "line", "geochart"]
  });

  runApp = function(angular) {
    return angular.module('aedes').run(function($log, $state, $rootScope) {
      'ngInject';
      $log.debug('Aedes started');
      return $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
        $rootScope.activeState = toState.name;
        if (toState.name === 'app') {
          return $state.go('app.inicio');
        }
      });
    });
  };

  google.setOnLoadCallback(runApp(angular));

}).call(this);
