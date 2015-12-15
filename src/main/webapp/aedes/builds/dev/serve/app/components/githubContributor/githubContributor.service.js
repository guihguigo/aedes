(function() {
  angular.module('aedes').factory('githubContributor', function($log, $http) {
    'ngInject';
    var apiHost, getContributors, service;
    apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxtQkFEWCxFQUNnQyxTQUFDLElBQUQsRUFBTyxLQUFQO0lBQzVCO0FBQUEsUUFBQTtJQUNBLE9BQUEsR0FBVTtJQUVWLGVBQUEsR0FBa0IsU0FBQyxLQUFEO0FBRWhCLFVBQUE7O1FBRmlCLFFBQU07O01BRXZCLHVCQUFBLEdBQTBCLFNBQUMsUUFBRDtlQUN4QixRQUFRLENBQUM7TUFEZTtNQUcxQixxQkFBQSxHQUF3QixTQUFDLEtBQUQ7UUFDdEIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxtQ0FBQSxHQUFzQyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQUssQ0FBQyxJQUFyQixFQUEyQixJQUEzQixDQUFqRDtNQURzQjthQUl4QixLQUFLLENBQUMsR0FBTixDQUFVLE9BQUEsR0FBVSx5QkFBVixHQUFzQyxLQUFoRCxDQUFzRCxDQUFDLElBQXZELENBQTRELHVCQUE1RCxDQUFvRixDQUFDLE9BQUQsQ0FBcEYsQ0FBMkYscUJBQTNGO0lBVGdCO1dBV2xCLE9BQUEsR0FDRTtNQUFBLE9BQUEsRUFBUyxPQUFUO01BQ0EsZUFBQSxFQUFpQixlQURqQjs7RUFoQjBCLENBRGhDO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuZmFjdG9yeSAnZ2l0aHViQ29udHJpYnV0b3InLCAoJGxvZywgJGh0dHApIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgIGFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJ1xuXG4gICAgZ2V0Q29udHJpYnV0b3JzID0gKGxpbWl0PTMwKSAtPlxuXG4gICAgICBnZXRDb250cmlidXRvcnNDb21wbGV0ZSA9IChyZXNwb25zZSkgLT5cbiAgICAgICAgcmVzcG9uc2UuZGF0YVxuXG4gICAgICBnZXRDb250cmlidXRvcnNGYWlsZWQgPSAoZXJyb3IpIC0+XG4gICAgICAgICRsb2cuZXJyb3IgJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgICRodHRwLmdldChhcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KS50aGVuKGdldENvbnRyaWJ1dG9yc0NvbXBsZXRlKS5jYXRjaCBnZXRDb250cmlidXRvcnNGYWlsZWRcblxuICAgIHNlcnZpY2UgPVxuICAgICAgYXBpSG9zdDogYXBpSG9zdFxuICAgICAgZ2V0Q29udHJpYnV0b3JzOiBnZXRDb250cmlidXRvcnNcbiJdfQ==