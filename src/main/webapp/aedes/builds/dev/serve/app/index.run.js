(function() {
  'use strict';
  google.load('visualization', '1', {
    packages: ["bar", "corechart", "line", "geochart"]
  });

  angular.module('aedes').run(function($log) {
    'ngInject';
    return $log.debug('runBlock end');
  });

}).call(this);
