(function() {
  angular.module('aedes').controller('HeaderController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      return $(".button-collapse").sideNav();
    };
    vm.appName = "Aedes";
    init();
  });

}).call(this);
