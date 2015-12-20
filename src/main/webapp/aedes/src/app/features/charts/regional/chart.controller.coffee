angular.module 'aedes'
  .controller 'ChartRegionalController', ($scope, ChartService, ChartsService) ->
    'ngInject'

    vm = this
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

    $scope.methods.showRegiaoChart = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart

      ChartsService.getPrevencoesRegionais().then(
        (response) ->
          mappedRows = ChartsService.objectToArray response.data

          DataTable = new google.visualization.DataTable()
          DataTable.addColumn 'string', 'States'
          DataTable.addColumn 'number', 'Em dias'
          DataTable.addColumn 'number', 'Atrasadas'
          DataTable.addRows mappedRows

          $scope.dataModel.data = DataTable

          $scope.dataModel.options =
            'width': 500
            'height': 300
            region: 'BR'
            resolution: 'provinces'
            displayMode: 'regions'
            colorAxis:
              colors: ['red', 'blue']

          do showChart

        (error) =>
          console.log 'FAIO'
      )

    $scope.methods.showCityChart   = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart

      $scope.dataModel.data = new google.visualization.arrayToDataTable([
        ['City', 'Em dia', 'Atrasada'],
        ['Praia Grande', 100.00, 0],
        ['Santos', 25.75, 74.25],
        ['Cubatão', 10.00, 90.00],
        ['Preuíbe', 0, 100.00],
        ['São Vicente', 50.00, 50.00],
        ['Guarujá', 80.25, 19.75],
        ['Mongaguá', 95.00, 5.00],
        ['Itagenhaem', 80.00, 20.00]
      ])

      $scope.dataModel.options =
        sizeAxis: {minValue: 0, maxValue: 100}
        region: 'BR'
        displayMode: 'markers'
        colorAxis: {colors: ['red', 'blue']}
        'width': 500
        'height': 300

      do showChart

    do $scope.methods.showRegiaoChart

    return
