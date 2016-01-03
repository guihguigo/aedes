angular.module 'aedes'
  .controller 'ContribuitorsController', ($scope, $timeout, $log, contribuitors) ->
    'ngInject'

    vm = this
    console.log contribuitors
    $scope.contribuitors = contribuitors

