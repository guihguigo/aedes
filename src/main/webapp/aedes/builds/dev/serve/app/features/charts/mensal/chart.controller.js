(function() {
  angular.module('aedes').controller('ChartMensalController', function($scope, moment, ChartService, ChartsService) {
    'ngInject';
    var hideChart, initMaterialSelect, showChart, vm;
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
    initMaterialSelect = function() {
      return $('select').material_select();
    };
    $scope.methods.showMensalChart = function() {
      hideChart();
      return ChartsService.getPrevencoesMensais().then(function(response) {
        var dataTable, mappedRows;
        mappedRows = ChartsService.objectToArray(response.data);
        dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Mês');
        dataTable.addColumn('number', 'Em dia');
        dataTable.addColumn('number', 'Atrasadas');
        dataTable.addRows(mappedRows);
        $scope.dataModel.data = dataTable;
        $scope.dataModel.options = {
          'width': 800,
          'height': 300,
          chart: {
            title: "Percentual dos últimos " + mappedRows.length + " meses",
            subtitle: "Em dia e atrasadas: " + (moment().get('year'))
          }
        };
        return showChart();
      }, (function(_this) {
        return function(error) {
          return console.log('FAIO');
        };
      })(this));
    };
    $scope.methods.showMensalChart();
    initMaterialSelect();
  });

}).call(this);
