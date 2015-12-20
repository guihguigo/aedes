angular.module 'aedes'
  .controller 'ChartMensalController', ($scope, moment, ChartService, ChartsService) ->
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

    initMaterialSelect = ->
      $('select').material_select()

    $scope.methods.showMensalChart = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.
      do hideChart

      ChartsService.getPrevencoesMensais().then(
        (response) ->
          mappedRows = ChartsService.objectToArray response.data

          dataTable = new google.visualization.DataTable()
          dataTable.addColumn 'string', 'Mês'
          dataTable.addColumn 'number', 'Em dia'
          dataTable.addColumn 'number', 'Atrasadas'
          dataTable.addRows mappedRows

          $scope.dataModel.data = dataTable

          $scope.dataModel.options =
            'width': 800
            'height': 300
            chart:
              title: "Percentual dos últimos #{mappedRows.length} meses"
              subtitle: "Em dia e atrasadas: #{moment().get('year')}"

          do showChart

        (error) =>
          console.log 'FAIO'
      )

    do $scope.methods.showMensalChart
    do initMaterialSelect

    return

