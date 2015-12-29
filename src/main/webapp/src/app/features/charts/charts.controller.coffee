angular.module 'aedes'
  .controller 'ChartsController', ($scope, $timeout, $log, focos) ->
    'ngInject'

    vm = this

    $log.debug focos

