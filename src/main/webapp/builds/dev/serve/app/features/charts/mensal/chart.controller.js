(function() {
  angular.module('aedes').controller('ChartMensalController', function($scope, $timeout, moment, ChartsService, UtilsService, EnderecoService) {
    'ngInject';
    var Chart, hideChart, initMaterialSelect, ngAutocompleteConfig, setEvents, showChart, vm;
    vm = this;
    Chart = null;
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
          var chart, dataTable, mappedRows, options;
          mappedRows = UtilsService.objectToArray(response.data);
          _.each(mappedRows, function(row) {
            return row[0] = UtilsService.getMonthPTBR(row[0]);
          });
          dataTable = new google.visualization.DataTable();
          dataTable.addColumn('string', 'Mês');
          dataTable.addColumn('number', 'Em dia');
          dataTable.addColumn('number', 'Atrasadas');
          dataTable.addRows(mappedRows);
          options = {
            width: 650,
            height: 300,
            chart: {
              title: mappedRows.length > 1 ? "Percentual dos últimos " + mappedRows.length + " meses" : "Percentual do último mês",
              subtitle: "Em dia e atrasadas: " + (moment().get('year'))
            }
          };
          chart = new google.charts.Bar(document.getElementById('chartid'));
          chart.draw(dataTable, google.charts.Bar.convertOptions(options));
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
