angular.module 'aedes'
  .controller 'ChartsController', ($scope, $timeout, $log, focos, prevencoesByFoco) ->
    'ngInject'

    vm = this
    focos.data.unshift({codigo: null, nome: 'Todos os focos'})

    $scope.focos = focos.data
    $scope.prevencoesByFoco = prevencoesByFoco.data

