(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.contribuidores', {
      url: '/contribuidores',
      views: {
        "": {
          templateUrl: 'app/features/contribuitors/contribuitors.html',
          controller: 'ContribuitorsController',
          resolve: {
            contribuitors: function(githubContributor) {
              return githubContributor.getContributors();
            }
          }
        }
      }
    });
    return $urlRouterProvider.otherwise('/inicio');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NvbnRyaWJ1aXRvcnMvY29udHJpYnVpdG9ycy5yb3V0ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsU0FBQyxjQUFELEVBQWlCLGtCQUFqQjtJQUNOO0lBQ0EsY0FFRSxDQUFDLEtBRkgsQ0FFUyxvQkFGVCxFQUdJO01BQUEsR0FBQSxFQUFLLGlCQUFMO01BQ0EsS0FBQSxFQUNFO1FBQUEsRUFBQSxFQUNFO1VBQUEsV0FBQSxFQUFhLCtDQUFiO1VBQ0EsVUFBQSxFQUFhLHlCQURiO1VBRUEsT0FBQSxFQUNFO1lBQUEsYUFBQSxFQUFlLFNBQUMsaUJBQUQ7cUJBQ2IsaUJBQWlCLENBQUMsZUFBbEIsQ0FBQTtZQURhLENBQWY7V0FIRjtTQURGO09BRkY7S0FISjtXQVlBLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLFNBQTdCO0VBZE0sQ0FEVjtBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2NvbnRyaWJ1aXRvcnMvY29udHJpYnVpdG9ycy5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnYWVkZXMnXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRzdGF0ZVByb3ZpZGVyXG5cbiAgICAgIC5zdGF0ZSAnYXBwLmNvbnRyaWJ1aWRvcmVzJyxcbiAgICAgICAgdXJsOiAnL2NvbnRyaWJ1aWRvcmVzJ1xuICAgICAgICB2aWV3czpcbiAgICAgICAgICBcIlwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY29udHJpYnVpdG9ycy9jb250cmlidWl0b3JzLmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyIDogJ0NvbnRyaWJ1aXRvcnNDb250cm9sbGVyJ1xuICAgICAgICAgICAgcmVzb2x2ZTpcbiAgICAgICAgICAgICAgY29udHJpYnVpdG9yczogKGdpdGh1YkNvbnRyaWJ1dG9yKSAtPlxuICAgICAgICAgICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygpXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvaW5pY2lvJ1xuIl19