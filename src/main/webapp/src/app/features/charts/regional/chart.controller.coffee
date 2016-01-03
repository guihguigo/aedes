angular.module 'aedes'
  .controller 'ChartRegionalController', ($scope, ChartService, ChartsService, UtilsService) ->
    'ngInject'

    vm = this
    Chart = null

    @methods = $scope.methods = {}

    #This is where my data model will be stored.
    #"visual" will contain the chart's datatable,
    #"activateChart" flips to true once the data from server is ready
    $scope.dataModel = {
      visual: {}
      metaData: {}
      data: {}
      options: {}
    }

    showChart = ->
      $scope.loader = false

    hideChart = ->
      $scope.loader = true

    setChart = (chart) ->
      Chart = chart

    $scope.methods.showRegiaoChart = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart

      ChartsService.getPrevencoesRegionais().then(
        (response) ->
          mappedRows = UtilsService.objectToArray response.data

          $scope.localidades = response.data

          DataTable = new google.visualization.DataTable()
          DataTable.addColumn 'string', 'States'
          DataTable.addColumn 'number', 'Em dias'
          DataTable.addColumn 'number', 'Atrasadas'
          DataTable.addRows mappedRows

          $scope.dataModel.data = DataTable
          $scope.dataModel.setChart = setChart

          $scope.dataModel.options =
            'width': 500
            'height': 300
            region: 'BR'
            resolution: 'provinces'
            displayMode: 'regions'
            colorAxis:
              colors: ['red', 'blue']

          $scope.percentChartHeader = "Estados mais afestos"

          do showChart

        (error) ->
          console.log 'FAIO'
      )

    $scope.methods.showCityChart   = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart

      ChartsService.getPrevencoesEmCidades().then(
        (response) ->
          header     = new Array(['City', 'Em dia', 'Atrasada'])
          mappedRows = UtilsService.objectToArray response.data
          mappedRows = _.union header, mappedRows

          $scope.localidades = response.data
          $scope.dataModel.data = new google.visualization.arrayToDataTable(mappedRows)

          $scope.dataModel.options =
            sizeAxis: {minValue: 0, maxValue: 100}
            region: 'BR'
            displayMode: 'markers'
            colorAxis: {colors: ['red', 'blue']}
            'width': 500
            'height': 300

          $scope.percentChartHeader = "Cidades mais afestas"

          do showChart

        (error) ->
          throw error
      )

    do $scope.methods.showRegiaoChart

    return
