(function() {
  angular.module('aedes').controller('ChartMensalController', function($scope, $timeout, moment, ChartService, ChartsService, UtilsService) {
    'ngInject';
    var hideChart, initMaterialSelect, showChart, vm;
    vm = this;
    this.methods = $scope.methods = {};
    this.attrs = $scope.attrs = {};
    this.attrs.estados = $scope.$parent.estados;
    this.attrs.fields = {
      focoId: '1'
    };
    this.attrs.focos = [
      {
        id: "1",
        nome: "Bebedouros de Animais",
        descricao: "desc"
      }, {
        id: "2",
        nome: "Bromélias (Planta)",
        descricao: "desc"
      }, {
        id: "3",
        nome: "Caixa de Ar Condicionado",
        descricao: "desc"
      }, {
        id: "4",
        nome: "Caixa dágua",
        descricao: "desc"
      }, {
        id: "5",
        nome: "Calhas",
        descricao: "desc"
      }, {
        id: "6",
        nome: "Depressões de Terrenos",
        descricao: "desc"
      }, {
        id: "7",
        nome: "Garagens e Subsolos",
        descricao: "desc"
      }, {
        id: "8",
        nome: "Geladeiras",
        descricao: "desc"
      }, {
        id: "9",
        nome: "Piscinas",
        descricao: "desc"
      }, {
        id: "10",
        nome: "Pneus Velhos",
        descricao: "desc"
      }, {
        id: "11",
        nome: "Ralos",
        descricao: "desc"
      }, {
        id: "12",
        nome: "Recipientes de Água",
        descricao: "desc"
      }, {
        id: "13",
        nome: "Recipientes Descartáveis",
        descricao: "desc"
      }, {
        id: "14",
        nome: "Sacos de Lixo",
        descricao: "desc"
      }, {
        id: "15",
        nome: "Vasos (Flores e Plantas)",
        descricao: "desc"
      }
    ];
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
              title: "Percentual dos últimos " + mappedRows.length + " meses",
              subtitle: "Em dia e atrasadas: " + (moment().get('year'))
            }
          };
          return showChart();
        }, function(error) {
          return console.log('FAIO');
        });
      };
    })(this);
    $scope.$on('render:chart', (function(_this) {
      return function(event, fields) {
        _this.attrs.fields = fields;
        return _this.methods.showMensalChart();
      };
    })(this));
    $scope.methods.showMensalChart();
    initMaterialSelect();
  });

}).call(this);
