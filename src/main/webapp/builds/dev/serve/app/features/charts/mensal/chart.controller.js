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
      return function(foco) {
        hideChart();
        _this.attrs.focoId = foco;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9tZW5zYWwvY2hhcnQuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYyx1QkFEZCxFQUN1QyxTQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLFlBQTNCLEVBQXlDLGFBQXpDLEVBQXdELFlBQXhEO0lBQ25DO0FBQUEsUUFBQTtJQUVBLEVBQUEsR0FBSztJQUNMLElBQUMsQ0FBQSxPQUFELEdBQVcsTUFBTSxDQUFDLE9BQVAsR0FBaUI7SUFFNUIsSUFBQyxDQUFBLEtBQUQsR0FBVyxNQUFNLENBQUMsS0FBUCxHQUFpQjtJQUM1QixJQUFDLENBQUEsS0FBSyxDQUFDLE9BQVAsR0FBaUIsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FDRTtNQUFBLE1BQUEsRUFBUSxHQUFSOztJQUVGLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlO01BQ2I7UUFBQyxFQUFBLEVBQUksR0FBTDtRQUFXLElBQUEsRUFBTSx1QkFBakI7UUFBOEMsU0FBQSxFQUFXLE1BQXpEO09BRGEsRUFFYjtRQUFDLEVBQUEsRUFBSSxHQUFMO1FBQVcsSUFBQSxFQUFNLG9CQUFqQjtRQUE4QyxTQUFBLEVBQVcsTUFBekQ7T0FGYSxFQUdiO1FBQUMsRUFBQSxFQUFJLEdBQUw7UUFBVyxJQUFBLEVBQU0sMEJBQWpCO1FBQThDLFNBQUEsRUFBVyxNQUF6RDtPQUhhLEVBSWI7UUFBQyxFQUFBLEVBQUksR0FBTDtRQUFXLElBQUEsRUFBTSxhQUFqQjtRQUE4QyxTQUFBLEVBQVcsTUFBekQ7T0FKYSxFQUtiO1FBQUMsRUFBQSxFQUFJLEdBQUw7UUFBVyxJQUFBLEVBQU0sUUFBakI7UUFBOEMsU0FBQSxFQUFXLE1BQXpEO09BTGEsRUFNYjtRQUFDLEVBQUEsRUFBSSxHQUFMO1FB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Q0FBQyxHQUFSLENBQVksTUFBWjtRQURGLENBckJGO01BTitCO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTtJQStCakMsTUFBTSxDQUFDLEdBQVAsQ0FBVyxjQUFYLEVBQTJCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxLQUFELEVBQVEsTUFBUjtRQUN6QixLQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsR0FBZ0I7ZUFDYixLQUFDLENBQUEsT0FBTyxDQUFDLGVBQVosQ0FBQTtNQUZ5QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBM0I7SUFJRyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWxCLENBQUE7SUFDRyxrQkFBSCxDQUFBO0VBdEZtQyxDQUR2QztBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2NoYXJ0cy9tZW5zYWwvY2hhcnQuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ0NoYXJ0TWVuc2FsQ29udHJvbGxlcicsICgkc2NvcGUsICR0aW1lb3V0LCBtb21lbnQsIENoYXJ0U2VydmljZSwgQ2hhcnRzU2VydmljZSwgVXRpbHNTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcblxuICAgIHZtID0gdGhpc1xuICAgIEBtZXRob2RzID0gJHNjb3BlLm1ldGhvZHMgPSB7fVxuXG4gICAgQGF0dHJzICAgPSAkc2NvcGUuYXR0cnMgICA9IHt9XG4gICAgQGF0dHJzLmVzdGFkb3MgPSAkc2NvcGUuJHBhcmVudC5lc3RhZG9zXG4gICAgQGF0dHJzLmZpZWxkcyA9XG4gICAgICBmb2NvSWQ6ICcxJ1xuXG4gICAgQGF0dHJzLmZvY29zID0gW1xuICAgICAge2lkOiBcIjFcIiwgIG5vbWU6IFwiQmViZWRvdXJvcyBkZSBBbmltYWlzXCIgICAsICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjJcIiwgIG5vbWU6IFwiQnJvbcOpbGlhcyAoUGxhbnRhKVwiICAgICAgLCAgZGVzY3JpY2FvOiBcImRlc2NcIn1cbiAgICAgIHtpZDogXCIzXCIsICBub21lOiBcIkNhaXhhIGRlIEFyIENvbmRpY2lvbmFkb1wiLCAgZGVzY3JpY2FvOiBcImRlc2NcIn1cbiAgICAgIHtpZDogXCI0XCIsICBub21lOiBcIkNhaXhhIGTDoWd1YVwiICwgICAgICAgICAgICAgIGRlc2NyaWNhbzogXCJkZXNjXCJ9XG4gICAgICB7aWQ6IFwiNVwiLCAgbm9tZTogXCJDYWxoYXNcIiAgICAgICwgICAgICAgICAgICAgIGRlc2NyaWNhbzogXCJkZXNjXCJ9XG4gICAgICB7aWQ6IFwiNlwiLCAgbm9tZTogXCJEZXByZXNzw7VlcyBkZSBUZXJyZW5vc1wiICAsICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjdcIiwgIG5vbWU6IFwiR2FyYWdlbnMgZSBTdWJzb2xvc1wiICAgICAsICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjhcIiwgIG5vbWU6IFwiR2VsYWRlaXJhc1wiICAsICAgICAgICAgICAgICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjlcIiwgIG5vbWU6IFwiUGlzY2luYXNcIiAgICAsICAgICAgICAgICAgICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjEwXCIsIG5vbWU6IFwiUG5ldXMgVmVsaG9zXCIgICAgICAsICAgICAgICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjExXCIsIG5vbWU6IFwiUmFsb3NcIiAsICAgICAgICAgICAgICAgICAgICBkZXNjcmljYW86IFwiZGVzY1wifVxuICAgICAge2lkOiBcIjEyXCIsIG5vbWU6IFwiUmVjaXBpZW50ZXMgZGUgw4FndWFcIiAgICAgLCAgZGVzY3JpY2FvOiBcImRlc2NcIn1cbiAgICAgIHtpZDogXCIxM1wiLCBub21lOiBcIlJlY2lwaWVudGVzIERlc2NhcnTDoXZlaXNcIiAsIGRlc2NyaWNhbzogXCJkZXNjXCJ9XG4gICAgICB7aWQ6IFwiMTRcIiwgbm9tZTogXCJTYWNvcyBkZSBMaXhvXCIgICAgICwgICAgICAgIGRlc2NyaWNhbzogXCJkZXNjXCJ9XG4gICAgICB7aWQ6IFwiMTVcIiwgbm9tZTogXCJWYXNvcyAoRmxvcmVzIGUgUGxhbnRhcylcIiAsIGRlc2NyaWNhbzogXCJkZXNjXCJ9XG4gICAgXVxuXG4gICAgI1RoaXMgaXMgd2hlcmUgbXkgZGF0YSBtb2RlbCB3aWxsIGJlIHN0b3JlZC5cbiAgICAjXCJ2aXN1YWxcIiB3aWxsIGNvbnRhaW4gdGhlIGNoYXJ0J3MgZGF0YXRhYmxlLFxuICAgICNcImFjdGl2YXRlQ2hhcnRcIiBmbGlwcyB0byB0cnVlIG9uY2UgdGhlIGRhdGEgZnJvbSBzZXJ2ZXIgaXMgcmVhZHlcbiAgICAkc2NvcGUuZGF0YU1vZGVsID0ge1xuICAgICAgdmlzdWFsOiB7fVxuICAgICAgbWV0YURhdGE6IHt9XG4gICAgICBkYXRhOiB7fVxuICAgICAgb3B0aW9uczoge31cbiAgICB9XG5cbiAgICBzaG93Q2hhcnQgPSAtPlxuICAgICAgJHNjb3BlLmxvYWRlciA9IGZhbHNlXG5cbiAgICBoaWRlQ2hhcnQgPSAtPlxuICAgICAgJHNjb3BlLmxvYWRlciA9IHRydWVcblxuICAgIGluaXRNYXRlcmlhbFNlbGVjdCA9IC0+XG4gICAgICAkdGltZW91dCAoKSAtPlxuICAgICAgICAgIGRvICQoJ1t1aS12aWV3PVwibWVuc2FsXCJdIHNlbGVjdCcpLm1hdGVyaWFsX3NlbGVjdFxuICAgICAgICAsIDEwMFxuXG4gICAgJHNjb3BlLm1ldGhvZHMuc2hvd01lbnNhbENoYXJ0ID0gPT5cbiAgICAgICNVcGRhdGUgdGhlIG1vZGVsIHRvIGFjdGl2YXRlIHRoZSBjaGFydCBvbiB0aGUgRE9NXG4gICAgICAjTm90ZSB0aGUgdXNlIG9mICRzY29wZS4kYXBwbHkgc2luY2Ugd2UncmUgaW4gdGhlXG4gICAgICAjR29vZ2xlIExvYWRlciBjYWxsYmFjay5cbiAgICAgIGRvIGhpZGVDaGFydFxuXG4gICAgICBDaGFydHNTZXJ2aWNlLmdldFByZXZlbmNvZXNNZW5zYWlzKEBhdHRycy5maWVsZHMpLnRoZW4oXG4gICAgICAgIChyZXNwb25zZSkgLT5cbiAgICAgICAgICBtYXBwZWRSb3dzID0gVXRpbHNTZXJ2aWNlLm9iamVjdFRvQXJyYXkgcmVzcG9uc2UuZGF0YVxuXG4gICAgICAgICAgZGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpXG4gICAgICAgICAgZGF0YVRhYmxlLmFkZENvbHVtbiAnc3RyaW5nJywgJ03DqnMnXG4gICAgICAgICAgZGF0YVRhYmxlLmFkZENvbHVtbiAnbnVtYmVyJywgJ0VtIGRpYSdcbiAgICAgICAgICBkYXRhVGFibGUuYWRkQ29sdW1uICdudW1iZXInLCAnQXRyYXNhZGFzJ1xuICAgICAgICAgIGRhdGFUYWJsZS5hZGRSb3dzIG1hcHBlZFJvd3NcblxuICAgICAgICAgICRzY29wZS5kYXRhTW9kZWwuZGF0YSA9IGRhdGFUYWJsZVxuXG4gICAgICAgICAgJHNjb3BlLmRhdGFNb2RlbC5vcHRpb25zID1cbiAgICAgICAgICAgICd3aWR0aCc6IDYwMFxuICAgICAgICAgICAgJ2hlaWdodCc6IDMwMFxuICAgICAgICAgICAgY2hhcnQ6XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlBlcmNlbnR1YWwgZG9zIMO6bHRpbW9zICN7bWFwcGVkUm93cy5sZW5ndGh9IG1lc2VzXCJcbiAgICAgICAgICAgICAgc3VidGl0bGU6IFwiRW0gZGlhIGUgYXRyYXNhZGFzOiAje21vbWVudCgpLmdldCgneWVhcicpfVwiXG5cbiAgICAgICAgICBkbyBzaG93Q2hhcnRcblxuICAgICAgICAoZXJyb3IpID0+XG4gICAgICAgICAgY29uc29sZS5sb2cgJ0ZBSU8nXG4gICAgICApXG5cbiAgICAkc2NvcGUuJG9uICdyZW5kZXI6Y2hhcnQnLCAoZXZlbnQsIGZpZWxkcykgPT5cbiAgICAgIEBhdHRycy5maWVsZHMgPSBmaWVsZHNcbiAgICAgIGRvIEBtZXRob2RzLnNob3dNZW5zYWxDaGFydFxuXG4gICAgZG8gJHNjb3BlLm1ldGhvZHMuc2hvd01lbnNhbENoYXJ0XG4gICAgZG8gaW5pdE1hdGVyaWFsU2VsZWN0XG5cbiAgICByZXR1cm5cblxuIl19
