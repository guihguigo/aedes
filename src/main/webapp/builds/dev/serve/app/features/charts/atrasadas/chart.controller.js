(function() {
  angular.module('aedes').controller('ChartAtrasadasController', function($timeout, $scope, webDevTec, toastr) {
    'ngInject';
    var hideLoader, init, showLoader, vm;
    vm = this;
    hideLoader = function() {
      return $scope.loader = false;
    };
    showLoader = function() {
      return $scope.loader = true;
    };
    init = function() {
      $scope.prevencoes = [
        {
          index: 1,
          prevencao: "Caixa D'água",
          atrasadas: 20.4
        }, {
          index: 2,
          prevencao: "Calhas",
          atrasadas: 30.4
        }, {
          index: 3,
          prevencao: "Ralos",
          atrasadas: 10.4
        }, {
          index: 4,
          prevencao: "Recipientes Descartáveis",
          atrasadas: 60.4
        }, {
          index: 5,
          prevencao: "Lixos",
          atrasadas: 50.4
        }
      ];
      return hideLoader();
    };
    init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9hdHJhc2FkYXMvY2hhcnQuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYywwQkFEZCxFQUMwQyxTQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCO0lBQ3RDO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUVMLElBQUEsR0FBTyxTQUFBO2FBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtJQURLO0lBR1AsSUFBQSxDQUFBO0VBUHNDLENBRDFDO0FBQUEiLCJmaWxlIjoiZmVhdHVyZXMvY2hhcnRzL2F0cmFzYWRhcy9jaGFydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuY29udHJvbGxlciAnQ2hhcnRBdHJhc2FkYXNDb250cm9sbGVyJywgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgdm0gPSB0aGlzXG5cbiAgICBpbml0ID0gLT5cbiAgICAgIGNvbnNvbGUubG9nICdBdHJhc2FkYXMgY2hhcnQnXG5cbiAgICBpbml0KClcblxuICAgIHJldHVyblxuIl19
