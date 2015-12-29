(function() {
  angular.module('aedes').controller('ChartRegionalController', function($scope, ChartService, ChartsService, UtilsService) {
    'ngInject';
    var hideChart, populatePercentChart, showChart, vm;
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
    populatePercentChart = (function(_this) {
      return function() {
        return $scope.percentData = [
          {
            chave: "Santos",
            emDia: 20.4,
            atrasadas: 10.4
          }, {
            chave: "Praia Grande",
            emDia: 30.4,
            atrasadas: 10.4
          }, {
            chave: "São Paulo",
            emDia: 10.4,
            atrasadas: 10.4
          }, {
            chave: "São Vicente",
            emDia: 60.4,
            atrasadas: 10.4
          }, {
            chave: "Mongaguá",
            emDia: 50.4,
            atrasadas: 10.4
          }
        ];
      };
    })(this);
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
      }, (function(_this) {
        return function(error) {
          return console.log('FAIO');
        };
      })(this));
    };
    $scope.methods.showCityChart = function() {
      hideChart();
      return ChartsService.getPrevencoesEmCidades().then((function(_this) {
        return function(response) {
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
        };
      })(this), (function(_this) {
        return function(error) {
          throw error;
        };
      })(this));
    };
    $scope.methods.showRegiaoChart();
  });

}).call(this);
