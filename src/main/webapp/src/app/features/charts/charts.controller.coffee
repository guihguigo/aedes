angular.module 'aedes'
  .controller 'ChartsController', ($scope, $timeout, $log, EnderecoService) ->
    'ngInject'

    vm = this

    $scope.options =
      country: 'br',

    $scope.localidade = ''

    $scope.$on 'result:locale', (emit, data) =>
      endereco = _.pick EnderecoService.getEnderecoFromLocalidade(data), 'bairro', 'cidade', 'estado'
      renderChart endereco

    renderChart = (fields) =>
      $scope.$broadcast 'render:chart', fields
