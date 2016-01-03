(function() {
  'use strict';
  var runApp;

  google.load('visualization', '1', {
    packages: ["bar", "corechart", "line", "geochart"]
  });

  runApp = function(angular) {
    console.log('google charts is loaded, initializing aedes app.');
    return angular.module('aedes').run(function($log, $state, $rootScope) {
      'ngInject';
      $log.debug('application started');
      $rootScope.$on("$stateChangeError", function(event, toState, toParams) {
        return $log.info("stateChangeError");
      });
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        return $log.info("stateChangeStart");
      });
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
