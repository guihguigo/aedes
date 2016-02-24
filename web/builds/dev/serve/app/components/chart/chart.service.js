(function() {
  angular.module('aedes').factory('ChartService', function($log, $http) {
    'ngInject';
    return {
      loadGoogleVisualization: function() {
        var e, error;
        try {
          return google.load("visualization", "1.1", {
            packages: ["bar", "corechart"]
          });
        } catch (error) {
          e = error;
          console.log('Could not load Google lib', e);
          return false;
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxjQURYLEVBQzJCLFNBQUMsSUFBRCxFQUFPLEtBQVA7SUFDdkI7V0FFQTtNQUFBLHVCQUFBLEVBQXlCLFNBQUE7QUFFdkIsWUFBQTtBQUFBO2lCQUNFLE1BQU0sQ0FBQyxJQUFQLENBQVksZUFBWixFQUE2QixLQUE3QixFQUFvQztZQUFDLFFBQUEsRUFBVSxDQUFDLEtBQUQsRUFBUSxXQUFSLENBQVg7V0FBcEMsRUFERjtTQUFBLGFBQUE7VUFFTTtVQUNKLE9BQU8sQ0FBQyxHQUFSLENBQVksMkJBQVosRUFBeUMsQ0FBekM7QUFDQSxpQkFBTyxNQUpUOztNQUZ1QixDQUF6Qjs7RUFIdUIsQ0FEM0I7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnYWVkZXMnXG4gIC5mYWN0b3J5ICdDaGFydFNlcnZpY2UnLCAoJGxvZywgJGh0dHApIC0+XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgbG9hZEdvb2dsZVZpc3VhbGl6YXRpb246ICgpIC0+XG5cbiAgICAgIHRyeVxuICAgICAgICBnb29nbGUubG9hZChcInZpc3VhbGl6YXRpb25cIiwgXCIxLjFcIiwge3BhY2thZ2VzOiBbXCJiYXJcIiwgXCJjb3JlY2hhcnRcIl19KVxuICAgICAgY2F0Y2ggZVxuICAgICAgICBjb25zb2xlLmxvZyAnQ291bGQgbm90IGxvYWQgR29vZ2xlIGxpYicsIGVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cblxuIl19