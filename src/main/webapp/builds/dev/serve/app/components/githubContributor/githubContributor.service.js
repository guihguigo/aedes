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
