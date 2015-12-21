(function() {
  angular.module('aedes').controller('ChartRegionalController', function($scope, ChartService, ChartsService, UtilsService) {
    'ngInject';
    var hideChart, showChart, vm;
    vm = this;
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
    $scope.methods.showRegiaoChart = function() {
      hideChart();
      return ChartsService.getPrevencoesRegionais().then(function(response) {
        var DataTable, mappedRows;
        mappedRows = UtilsService.objectToArray(response.data);
        DataTable = new google.visualization.DataTable();
        DataTable.addColumn('string', 'States');
        DataTable.addColumn('number', 'Em dias');
        DataTable.addColumn('number', 'Atrasadas');
        DataTable.addRows(mappedRows);
        $scope.dataModel.data = DataTable;
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
        return showChart();
      }, (function(_this) {
        return function(error) {
          return console.log('FAIO');
        };
      })(this));
    };
    $scope.methods.showCityChart = function() {
      hideChart();
      $scope.dataModel.data = new google.visualization.arrayToDataTable([['City', 'Em dia', 'Atrasada'], ['Praia Grande', 100.00, 0], ['Santos', 25.75, 74.25], ['Cubatão', 10.00, 90.00], ['Preuíbe', 0, 100.00], ['São Vicente', 50.00, 50.00], ['Guarujá', 80.25, 19.75], ['Mongaguá', 95.00, 5.00], ['Itagenhaem', 80.00, 20.00]]);
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
      return showChart();
    };
    $scope.methods.showRegiaoChart();
  });

}).call(this);
