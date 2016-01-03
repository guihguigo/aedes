(function() {
  angular.module('aedes').controller('HeaderController', function($timeout, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      return $timeout(function() {
        return $(".button-collapse").sideNav({
          menuWidth: 300,
          edge: 'left',
          closeOnClick: true
        });
      }, 1000);
    };
    init();
  });

}).call(this);
