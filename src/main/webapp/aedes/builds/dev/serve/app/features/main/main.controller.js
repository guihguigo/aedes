(function() {
  angular.module('aedes').controller('MainController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      setTimeout(function() {
        return $('.slider').slider({
          full_width: false
        });
      }, 100);
      return $(".button-collapse").sideNav();
    };
    vm.appName = "Aedes";
    vm.creationDate = 328938129081;
    init();
  });

}).call(this);
