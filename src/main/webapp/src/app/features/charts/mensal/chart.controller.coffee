angular.module 'aedes'
  .controller 'ChartMensalController', ($scope, $timeout, moment, ChartService, ChartsService, UtilsService) ->
    'ngInject'

    vm = this
    @methods = $scope.methods = {}

    @attrs   = $scope.attrs   = {}
    @attrs.estados = $scope.$parent.estados
    @attrs.fields =
      focoId: '1'

    @attrs.focos = [
      {id: "1",  nome: "Bebedouros de Animais"   ,  descricao: "desc"}
      {id: "2",  nome: "Bromélias (Planta)"      ,  descricao: "desc"}
      {id: "3",  nome: "Caixa de Ar Condicionado",  descricao: "desc"}
      {id: "4",  nome: "Caixa dágua" ,              descricao: "desc"}
      {id: "5",  nome: "Calhas"      ,              descricao: "desc"}
      {id: "6",  nome: "Depressões de Terrenos"  ,  descricao: "desc"}
      {id: "7",  nome: "Garagens e Subsolos"     ,  descricao: "desc"}
      {id: "8",  nome: "Geladeiras"  ,              descricao: "desc"}
      {id: "9",  nome: "Piscinas"    ,              descricao: "desc"}
      {id: "10", nome: "Pneus Velhos"      ,        descricao: "desc"}
      {id: "11", nome: "Ralos" ,                    descricao: "desc"}
      {id: "12", nome: "Recipientes de Água"     ,  descricao: "desc"}
      {id: "13", nome: "Recipientes Descartáveis" , descricao: "desc"}
      {id: "14", nome: "Sacos de Lixo"     ,        descricao: "desc"}
      {id: "15", nome: "Vasos (Flores e Plantas)" , descricao: "desc"}
    ]

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

        (error) =>
          console.log 'FAIO'
      )

    $scope.$on 'render:chart', (event, fields) =>
      @attrs.fields = fields
      do @methods.showMensalChart

    do $scope.methods.showMensalChart
    do initMaterialSelect

    return

