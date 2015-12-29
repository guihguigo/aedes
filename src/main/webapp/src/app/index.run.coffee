'use strict'

google.load('visualization', '1', {
  packages: ["bar", "corechart", "line", "geochart"]
})

angular.module 'aedes'
  .run ($log) ->
    'ngInject'
    $log.debug 'runBlock ended'
