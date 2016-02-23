(function() {
  angular.module('aedes').controller('ChartsController', function($scope, $timeout, $log, focos, prevencoesByFoco) {
    'ngInject';
    var vm;
    vm = this;
    focos.data.unshift({
      codigo: null,
      nome: 'Todos os focos'
    });
    $scope.focos = focos.data;
    return $scope.prevencoesByFoco = prevencoesByFoco.data;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYyxrQkFEZCxFQUNrQyxTQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLElBQW5CLEVBQXlCLEtBQXpCLEVBQWdDLGdCQUFoQztJQUM5QjtBQUFBLFFBQUE7SUFFQSxFQUFBLEdBQUs7SUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQVgsQ0FBbUI7TUFBQyxNQUFBLEVBQVEsSUFBVDtNQUFlLElBQUEsRUFBTSxnQkFBckI7S0FBbkI7SUFFQSxNQUFNLENBQUMsS0FBUCxHQUFlLEtBQUssQ0FBQztXQUNyQixNQUFNLENBQUMsZ0JBQVAsR0FBMEIsZ0JBQWdCLENBQUM7RUFQYixDQURsQztBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ0NoYXJ0c0NvbnRyb2xsZXInLCAoJHNjb3BlLCAkdGltZW91dCwgJGxvZywgZm9jb3MsIHByZXZlbmNvZXNCeUZvY28pIC0+XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgdm0gPSB0aGlzXG4gICAgZm9jb3MuZGF0YS51bnNoaWZ0KHtjb2RpZ286IG51bGwsIG5vbWU6ICdUb2RvcyBvcyBmb2Nvcyd9KVxuXG4gICAgJHNjb3BlLmZvY29zID0gZm9jb3MuZGF0YVxuICAgICRzY29wZS5wcmV2ZW5jb2VzQnlGb2NvID0gcHJldmVuY29lc0J5Rm9jby5kYXRhXG5cbiJdfQ==