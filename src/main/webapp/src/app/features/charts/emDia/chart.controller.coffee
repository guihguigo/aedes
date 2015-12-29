angular.module 'aedes'
  .controller 'ChartEmDiaController', ($timeout, $scope, webDevTec, toastr) ->
    'ngInject'
    vm = this

    hideLoader = ->
      $scope.loader = false

    showLoader = ->
      $scope.loader = true

    init = ->
      $scope.prevencoes = [
        {index: 1, prevencao: "Caixa D'água", emDia: 20.4}
        {index: 2, prevencao: "Calhas"      , emDia: 30.4}
        {index: 3, prevencao: "Ralos"       , emDia: 10.4}
        {index: 4, prevencao: "Recipientes Descartáveis", emDia: 60.4}
        {index: 5, prevencao: "Lixos"       , emDia: 50.4}
      ]

      do hideLoader

    do init

    return
