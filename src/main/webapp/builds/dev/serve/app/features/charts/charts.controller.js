(function() {
  angular.module('aedes').controller('ChartsController', function($scope, $timeout, $log, EnderecoService) {
    'ngInject';
    var renderChart, vm;
    vm = this;
    $scope.options = {
      country: 'br'
    };
    $scope.localidade = '';
    $scope.$on('result:locale', (function(_this) {
      return function(emit, data) {
        var endereco;
        endereco = _.pick(EnderecoService.getEnderecoFromLocalidade(data), 'bairro', 'cidade', 'estado');
        return renderChart(endereco);
      };
    })(this));
    return renderChart = (function(_this) {
      return function(fields) {
        return $scope.$broadcast('render:chart', fields);
      };
    })(this);
  });

}).call(this);
