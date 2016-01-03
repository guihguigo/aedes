(function() {
  angular.module('aedes').controller('ChartMensalController', function($scope, $timeout, moment, ChartsService, UtilsService, EnderecoService) {
    'ngInject';
    var chartConfig, hideChart, initMaterialSelect, ngAutocompleteConfig, setEvents, showChart, vm;
    vm = this;
    this.methods = $scope.methods = {};
    this.attrs = $scope.attrs = {};
    this.attrs.focos = $scope.$parent.focos;
    this.attrs.fields = {
      focoId: '1'
    };
    ngAutocompleteConfig = function() {
      $scope.localidade = '';
      return $scope.options = {
        country: 'br'
      };
    };
    ngAutocompleteConfig();
    chartConfig = function() {
      return $scope.dataModel = {
        visual: {},
        metaData: {},
        data: {},
        options: {}
      };
    };
    chartConfig();
    showChart = function() {
      return $scope.loader = false;
    };
    hideChart = function() {
      return $scope.loader = true;
    };
    initMaterialSelect = function() {
      return $timeout(function() {
        return $('[ui-view="mensal"] select').material_select();
      }, 100);
    };
    $scope.methods.showMensalChart = (function(_this) {
      return function() {
        hideChart();
        return ChartsService.getPrevencoesMensais(_this.attrs.fields).then(function(response) {
          var dataTable, mappedRows;
          mappedRows = UtilsService.objectToArray(response.data);
          dataTable = new google.visualization.DataTable();
          dataTable.addColumn('string', 'Mês');
          dataTable.addColumn('number', 'Em dia');
          dataTable.addColumn('number', 'Atrasadas');
          dataTable.addRows(mappedRows);
          $scope.dataModel.data = dataTable;
          $scope.dataModel.options = {
            'width': 600,
            'height': 300,
            chart: {
              title: mappedRows.length > 1 ? "Percentual dos últimos " + mappedRows.length + " meses" : "Percentual do último mes",
              subtitle: "Em dia e atrasadas: " + (moment().get('year'))
            }
          };
          showChart();
          return initMaterialSelect();
        }, function(error) {
          return console.log('FAIO');
        });
      };
    })(this);
    setEvents = (function(_this) {
      return function() {
        return $scope.$on('result:locale', function(event, data) {
          _this.attrs.fields.endereco = _.pick(EnderecoService.getEnderecoFromLocalidade(data), 'bairro', 'cidade', 'estado');
          return _this.methods.showMensalChart();
        });
      };
    })(this);
    setEvents();
    $scope.methods.showMensalChart();
    initMaterialSelect();
  });

}).call(this);
