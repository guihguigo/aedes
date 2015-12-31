angular.module 'aedes'
  .controller 'ChartMensalController', ($scope, $timeout, moment, ChartsService, UtilsService, EnderecoService) ->
    'ngInject'

    vm = this

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

    chartConfig = ->
      #This is where my data model will be stored.
      #"visual" will contain the chart's datatable,
      #"activateChart" flips to true once the data from server is ready
      $scope.dataModel = {
        visual: {}
        metaData: {}
        data: {}
        options: {}
      }

    do chartConfig

    showChart = ->
      $scope.loader = false

    hideChart = ->
      $scope.loader = true

    initMaterialSelect = ->
      $timeout () ->
        do $('[ui-view="mensal"] select').material_select
      , 100

    $scope.methods.showMensalChart = (foco) =>
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart
      @attrs.focoId = foco

      ChartsService.getPrevencoesMensais(@attrs.fields).then(
        (response) ->
          mappedRows = UtilsService.objectToArray response.data

          dataTable = new google.visualization.DataTable()
          dataTable.addColumn 'string', 'Mês'
          dataTable.addColumn 'number', 'Em dia'
          dataTable.addColumn 'number', 'Atrasadas'
          dataTable.addRows mappedRows

          $scope.dataModel.data = dataTable

          $scope.dataModel.options =
            'width': 600
            'height': 300
            chart:
              title: "Percentual dos últimos #{mappedRows.length} meses"
              subtitle: "Em dia e atrasadas: #{moment().get('year')}"

          do showChart

        (error) ->
          console.log 'FAIO'
      )

    setEvents = =>
      $scope.$on 'result:locale', (event, data) =>
        @attrs.fields.endereco = _.pick EnderecoService.getEnderecoFromLocalidade(data), 'bairro', 'cidade', 'estado'
        do @methods.showMensalChart

    do setEvents
    do $scope.methods.showMensalChart
    do initMaterialSelect

    return

