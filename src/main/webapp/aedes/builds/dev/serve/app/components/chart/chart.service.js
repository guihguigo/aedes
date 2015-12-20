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
