(function() {
  angular.module('aedes').controller('HeaderController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      return $timeout(function() {
        return $(".button-collapse").sideNav({
          menuWidth: 300,
          edge: 'left',
          closeOnClick: false
        });
      }, 1000);
    };
    init();
  });

}).call(this);
