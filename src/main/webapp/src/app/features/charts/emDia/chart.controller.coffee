angular.module 'aedes'
  .controller 'ChartEmDiaController', ($timeout, $scope, webDevTec, toastr) ->
    'ngInject'
    vm = this

    hideLoader = ->
      $scope.loader = false

    showLoader = ->
      $scope.loader = true

    init = ->
      $scope.prevencoes = $scope.$parent.prevencoesByFoco
      do hideLoader

    do init

    return
