angular.module 'aedes'
  .controller 'ChartRegionalController', ($timeout, $scope, ChartService) ->
    'ngInject'

    vm = this
    @attrs = $scope.attrs = {}
    @methods = $scope.methods = {}

    #activateChart flips to true once the Google
    #Loader callback fires
    $scope.activateChart = false

    #This is where my data model will be stored.
    #"visual" will contain the chart's datatable
    $scope.dataModel = {
      visual: {}
      metaData: {}
      data: {}
      options: {}
    }

    $scope.methods.showRegiaoChart = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.

      $scope.activateChart = false

      $scope.dataModel.data = new google.visualization.arrayToDataTable([
        ['States', 'Popularity']
        ['São Paulo', 200]
        ['Rio de Janeiro', 300]
      ])

      $scope.dataModel.options =
        'width': 500
        'height': 300
        region: 'BR'
        resolution: 'provinces'
        displayMode: 'regions'
        colorAxis: {colors: ['red', 'blue']}

      do showChart

    $scope.methods.showCityChart   = ->
      #Update the model to activate the chart on the DOM
      #Note the use of $scope.$apply since we're in the
      #Google Loader callback.

      $scope.activateChart = false

      $scope.dataModel.data = new google.visualization.arrayToDataTable([
        ['States', 'Popularity']
        ['São Paulo', 200]
        ['Rio de Janeiro', 300]
      ])

      $scope.dataModel.options =
        sizeAxis: {minValue: 0, maxValue: 100}
        region: 'BR'
        displayMode: 'markers'
        colorAxis: {colors: ['red', 'blue']}
        'width': 500
        'height': 300

      do showChart

    showChart = ->
      $scope.activateChart = true


    #First, we attempt to load the Visualization module
    loadGoogle = ChartService.loadGoogleVisualization()

    #If the Google Loader request was made with no errors,
    #register a callback, and construct the chart data
    #model within the callback function
    if loadGoogle
      do $scope.methods.showRegiaoChart
      do showChart

    return
