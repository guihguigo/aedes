(function() {
  angular.module('aedes').controller('ContribuitorsController', function($scope, $timeout, $log, contribuitors) {
    'ngInject';
    var vm;
    vm = this;
    console.log(contribuitors);
    return $scope.contribuitors = contribuitors;
  });

}).call(this);
