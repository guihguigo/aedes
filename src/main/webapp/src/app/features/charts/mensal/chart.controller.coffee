angular.module 'aedes'
  .controller 'ChartMensalController', ($scope, $timeout, moment, ChartsService, UtilsService, EnderecoService) ->
    'ngInject'

    vm = this
    Chart = null

    @methods = $scope.methods = {}
    @attrs   = $scope.attrs   = {}

    @attrs.focos   = $scope.$parent.focos
    @attrs.fields =
      focoId: '1'

    ngAutocompleteConfig = ->
      $scope.localidade = ''
      $scope.options =
        country: 'br'

    do ngAutocompleteConfig

    showChart = ->
      $scope.loader = false

    hideChart = ->
      $scope.loader = true

    initMaterialSelect = ->
      $timeout () ->
        do $('[ui-view="mensal"] select').material_select
      , 100

    $scope.methods.showMensalChart = =>
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart

      ChartsService.getPrevencoesMensais(@attrs.fields).then(
        (response) ->
          mappedRows = UtilsService.objectToArray response.data

          _.each mappedRows, (row) ->
            row[0] = UtilsService.getMonthPTBR row[0]

          dataTable = new google.visualization.DataTable()
          dataTable.addColumn 'string', 'Mês'
          dataTable.addColumn 'number', 'Em dia'
          dataTable.addColumn 'number', 'Atrasadas'
          dataTable.addRows mappedRows

          options =
            width: 650
            height: 300
            chart:
              title: if mappedRows.length > 1 then "Percentual dos últimos #{mappedRows.length} meses" else "Percentual do último mês"
              subtitle: "Em dia e atrasadas: #{moment().get('year')}"

          chart = new google.charts.Bar document.getElementById('chartid')
          chart.draw dataTable, google.charts.Bar.convertOptions(options)

          do showChart
          do initMaterialSelect

        (error) ->
          console.log 'FAIO'
      )

    $scope.changeLocalMensal = (local) =>
      unless local
        @attrs.fields.endereco = ''
        do @methods.showMensalChart

    setEvents = =>
      $scope.$on 'result:locale', (event, data) =>
        @attrs.fields.endereco = _.pick EnderecoService.getEnderecoFromLocalidade(data), 'bairro', 'cidade', 'estado'
        do @methods.showMensalChart

    do setEvents
    do $scope.methods.showMensalChart
    do initMaterialSelect

    return

