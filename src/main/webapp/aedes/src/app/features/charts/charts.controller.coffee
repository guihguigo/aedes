angular.module 'aedes'
  .controller 'ChartsController', ($scope, moment, estados) ->
    'ngInject'

    vm = this
    $scope.estados = estados.data
