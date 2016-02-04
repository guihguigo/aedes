(function() {
  angular.module('aedes').factory('githubContributor', function($log, $http) {
    'ngInject';
    var apiHost, getContributors, service;
    apiHost = 'https://api.github.com/repos/guihguigo/aedes';
    getContributors = function(limit) {
      var getContributorsComplete, getContributorsFailed;
      if (limit == null) {
        limit = 30;
      }
      getContributorsComplete = function(response) {
        return response.data;
      };
      getContributorsFailed = function(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      };
      return $http.get(apiHost + '/contributors?per_page=' + limit).then(getContributorsComplete)["catch"](getContributorsFailed);
    };
    return service = {
      apiHost: apiHost,
      getContributors: getContributors
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxtQkFEWCxFQUNnQyxTQUFDLElBQUQsRUFBTyxLQUFQO0lBQzVCO0FBQUEsUUFBQTtJQUVBLE9BQUEsR0FBVTtJQUVWLGVBQUEsR0FBa0IsU0FBQyxLQUFEO0FBRWhCLFVBQUE7O1FBRmlCLFFBQU07O01BRXZCLHVCQUFBLEdBQTBCLFNBQUMsUUFBRDtlQUN4QixRQUFRLENBQUM7TUFEZTtNQUcxQixxQkFBQSxHQUF3QixTQUFDLEtBQUQ7UUFDdEIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxtQ0FBQSxHQUFzQyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQUssQ0FBQyxJQUFyQixFQUEyQixJQUEzQixDQUFqRDtNQURzQjthQUl4QixLQUFLLENBQUMsR0FBTixDQUFVLE9BQUEsR0FBVSx5QkFBVixHQUFzQyxLQUFoRCxDQUFzRCxDQUFDLElBQXZELENBQTRELHVCQUE1RCxDQUFvRixDQUFDLE9BQUQsQ0FBcEYsQ0FBMkYscUJBQTNGO0lBVGdCO1dBV2xCLE9BQUEsR0FDRTtNQUFBLE9BQUEsRUFBUyxPQUFUO01BQ0EsZUFBQSxFQUFpQixlQURqQjs7RUFqQjBCLENBRGhDO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuZmFjdG9yeSAnZ2l0aHViQ29udHJpYnV0b3InLCAoJGxvZywgJGh0dHApIC0+XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2d1aWhndWlnby9hZWRlcydcblxuICAgIGdldENvbnRyaWJ1dG9ycyA9IChsaW1pdD0zMCkgLT5cblxuICAgICAgZ2V0Q29udHJpYnV0b3JzQ29tcGxldGUgPSAocmVzcG9uc2UpIC0+XG4gICAgICAgIHJlc3BvbnNlLmRhdGFcblxuICAgICAgZ2V0Q29udHJpYnV0b3JzRmFpbGVkID0gKGVycm9yKSAtPlxuICAgICAgICAkbG9nLmVycm9yICdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICAkaHR0cC5nZXQoYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihnZXRDb250cmlidXRvcnNDb21wbGV0ZSkuY2F0Y2ggZ2V0Q29udHJpYnV0b3JzRmFpbGVkXG5cbiAgICBzZXJ2aWNlID1cbiAgICAgIGFwaUhvc3Q6IGFwaUhvc3RcbiAgICAgIGdldENvbnRyaWJ1dG9yczogZ2V0Q29udHJpYnV0b3JzXG4iXX0=