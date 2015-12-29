angular.module 'aedes'
  .controller 'ChartAtrasadasController', ($timeout, $scope, webDevTec, toastr) ->
    'ngInject'
    vm = this

    hideLoader = ->
      $scope.loader = false

    showLoader = ->
      $scope.loader = true

    init = ->
      $scope.prevencoes = [
        {index: 1, prevencao: "Caixa D'água", atrasadas: 20.4}
        {index: 2, prevencao: "Calhas"      , atrasadas: 30.4}
        {index: 3, prevencao: "Ralos"       , atrasadas: 10.4}
        {index: 4, prevencao: "Recipientes Descartáveis", atrasadas: 60.4}
        {index: 5, prevencao: "Lixos"       , atrasadas: 50.4}
      ]

      do hideLoader

    do init

    return
