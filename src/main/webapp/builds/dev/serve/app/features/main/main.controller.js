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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL21haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsU0FBbkI7SUFDNUI7QUFBQSxRQUFBO0lBQ0EsRUFBQSxHQUFLO0lBRUwsSUFBQSxHQUFPLFNBQUE7TUFDTCxRQUFBLENBQVMsU0FBQTtlQUNQLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxNQUFiLENBQW9CO1VBQUMsVUFBQSxFQUFZLEtBQWI7U0FBcEI7TUFETyxDQUFULEVBRUUsR0FGRjthQUlHLFlBQUgsQ0FBQTtJQUxLO0lBT1AsWUFBQSxHQUFlLFNBQUE7TUFDYixJQUFHLFFBQVEsQ0FBQyxHQUFULENBQUEsQ0FBSDtlQUNFLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLGdFQURyQjtPQUFBLE1BQUE7ZUFHRSxNQUFNLENBQUMsU0FBUCxHQUFtQixvRUFIckI7O0lBRGE7SUFPZixRQUFBLEdBQVc7TUFDVCxPQUFBLEVBQVMsU0FBQTtlQUNQLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBcEIsQ0FBMEIsVUFBMUI7TUFETyxDQURBO01BR1QsVUFBQSxFQUFZLFNBQUE7ZUFDVixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQXBCLENBQTBCLGFBQTFCO01BRFUsQ0FISDtNQUtULEdBQUEsRUFBSyxTQUFBO2VBQ0gsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFwQixDQUEwQixtQkFBMUI7TUFERyxDQUxJO01BT1QsS0FBQSxFQUFPLFNBQUE7ZUFDTCxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQXBCLENBQTBCLGFBQTFCO01BREssQ0FQRTtNQVNULE9BQUEsRUFBUyxTQUFBO2VBQ1AsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFwQixDQUEwQixXQUExQixDQUFBLElBQTBDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBcEIsQ0FBMEIsWUFBMUI7TUFEbkMsQ0FUQTtNQVdULEdBQUEsRUFBSyxTQUFBO2VBQ0YsUUFBUSxDQUFDLE9BQVQsQ0FBQSxDQUFBLElBQXNCLFFBQVEsQ0FBQyxVQUFULENBQUEsQ0FBdEIsSUFBK0MsUUFBUSxDQUFDLEdBQVQsQ0FBQSxDQUEvQyxJQUFpRSxRQUFRLENBQUMsS0FBVCxDQUFBLENBQWpFLElBQXFGLFFBQVEsQ0FBQyxPQUFULENBQUE7TUFEbkYsQ0FYSTs7SUFlWCxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFTLENBQUM7SUFFeEIsSUFBSCxDQUFBO0VBbkM0QixDQURoQztBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCAoJHRpbWVvdXQsICRzY29wZSwgYXBwQ29uZmlnKSAtPlxuICAgICduZ0luamVjdCdcbiAgICB2bSA9IHRoaXNcblxuICAgIGluaXQgPSAtPlxuICAgICAgJHRpbWVvdXQgKCkgLT5cbiAgICAgICAgJCgnLnNsaWRlcicpLnNsaWRlciB7ZnVsbF93aWR0aDogZmFsc2V9XG4gICAgICAsIDEwMFxuXG4gICAgICBkbyBjaGVja0Jyb3dzZXJcblxuICAgIGNoZWNrQnJvd3NlciA9IC0+XG4gICAgICBpZiBpc01vYmlsZS5pT1MoKVxuICAgICAgICAkc2NvcGUuc3RvcmVMaW5rID0gXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vYnIvYXBwL3RlbXBsZS1ydW4tMi9pZDU3MjM5NTYwOD9tdD04XCJcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLnN0b3JlTGluayA9IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5mYWNlYm9vay5rYXRhbmFcIlxuXG5cbiAgICBpc01vYmlsZSA9IHtcbiAgICAgIEFuZHJvaWQ6IC0+XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSlcbiAgICAgIEJsYWNrQmVycnk6IC0+XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICAgIGlPUzogLT5cbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKVxuICAgICAgT3BlcmE6IC0+XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSlcbiAgICAgIFdpbmRvd3M6IC0+XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dQRGVza3RvcC9pKVxuICAgICAgYW55OiAtPlxuICAgICAgICAoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSlcbiAgICB9XG5cbiAgICAkc2NvcGUuYXBwTmFtZSA9IGFwcENvbmZpZy5OQU1FXG5cbiAgICBkbyBpbml0XG5cbiAgICByZXR1cm5cbiJdfQ==