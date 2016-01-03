(function() {
  angular.module('aedes').controller('ChartRegionalController', function($scope, ChartService, ChartsService, UtilsService) {
    'ngInject';
    var Chart, hideChart, setChart, showChart, vm;
    vm = this;
    Chart = null;
    this.methods = $scope.methods = {};
    $scope.dataModel = {
      visual: {},
      metaData: {},
      data: {},
      options: {}
    };
    showChart = function() {
      return $scope.loader = false;
    };
    hideChart = function() {
      return $scope.loader = true;
    };
    setChart = function(chart) {
      return Chart = chart;
    };
    $scope.methods.showRegiaoChart = function() {
      hideChart();
      return ChartsService.getPrevencoesRegionais().then(function(response) {
        var DataTable, mappedRows;
        mappedRows = UtilsService.objectToArray(response.data);
        $scope.localidades = response.data;
        DataTable = new google.visualization.DataTable();
        DataTable.addColumn('string', 'States');
        DataTable.addColumn('number', 'Em dias');
        DataTable.addColumn('number', 'Atrasadas');
        DataTable.addRows(mappedRows);
        $scope.dataModel.data = DataTable;
        $scope.dataModel.setChart = setChart;
        $scope.dataModel.options = {
          'width': 500,
          'height': 300,
          region: 'BR',
          resolution: 'provinces',
          displayMode: 'regions',
          colorAxis: {
            colors: ['red', 'blue']
          }
        };
        $scope.percentChartHeader = "Estados mais afestos";
        return showChart();
      }, function(error) {
        return console.log('FAIO');
      });
    };
    $scope.methods.showCityChart = function() {
      hideChart();
      return ChartsService.getPrevencoesEmCidades().then(function(response) {
        var header, mappedRows;
        header = new Array(['City', 'Em dia', 'Atrasada']);
        mappedRows = UtilsService.objectToArray(response.data);
        mappedRows = _.union(header, mappedRows);
        $scope.localidades = response.data;
        $scope.dataModel.data = new google.visualization.arrayToDataTable(mappedRows);
        $scope.dataModel.options = {
          sizeAxis: {
            minValue: 0,
            maxValue: 100
          },
          region: 'BR',
          displayMode: 'markers',
          colorAxis: {
            colors: ['red', 'blue']
          },
          'width': 500,
          'height': 300
        };
        $scope.percentChartHeader = "Cidades mais afestas";
        return showChart();
      }, function(error) {
        throw error;
      });
    };
    $scope.methods.showRegiaoChart();
  });

}).call(this);
