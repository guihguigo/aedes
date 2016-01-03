(function() {
  angular.module('aedes').controller('MainController', function($timeout, $scope, appConfig) {
    'ngInject';
    var checkBrowser, init, isMobile, vm;
    vm = this;
    init = function() {
      $timeout(function() {
        return $('.slider').slider({
          full_width: false
        });
      }, 100);
      return checkBrowser();
    };
    checkBrowser = function() {
      if (isMobile.iOS()) {
        return $scope.storeLink = "https://itunes.apple.com/br/app/temple-run-2/id572395608?mt=8";
      } else {
        return $scope.storeLink = "https://play.google.com/store/apps/details?id=com.facebook.katana";
      }
    };
    isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
    };
    $scope.appName = appConfig.NAME;
    init();
  });

}).call(this);
