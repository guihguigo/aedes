angular.module 'aedes'
  .controller 'ChartsController', ($scope, $timeout, $log, focos, prevencoesByFoco) ->
    'ngInject'

    vm = this
    $scope.focos = focos.data
    $scope.prevencoesByFoco = prevencoesByFoco.data

