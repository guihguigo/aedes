'use strict';

google.load('visualization', '1', {
  packages: ['corechart']
})

angular.module 'aedes'
  .run ($log) ->
    'ngInject'
    $log.debug 'runBlock end'
