(function() {
  describe('service githubContributor', function() {
    beforeEach(module('aedes'));
    it('should be registered', inject(function(githubContributor) {
      return expect(githubContributor).not.toEqual(null);
    }));
    describe('apiHost variable', function() {
      return it('should exist', inject(function(githubContributor) {
        return expect(githubContributor.apiHost).not.toEqual(null);
      }));
    });
    return describe('getContributors function', function() {
      it('should exist', inject(function(githubContributor) {
        return expect(githubContributor.getContributors).not.toEqual(null);
      }));
      it('should return data', inject(function(githubContributor, $httpBackend) {
        var data;
        $httpBackend.when('GET', githubContributor.apiHost + '/contributors?per_page=1').respond(200, [
          {
            pprt: 'value'
          }
        ]);
        data = void 0;
        githubContributor.getContributors(1).then(function(fetchedData) {
          return data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data.length === 1).toBeTruthy();
        return expect(data[0]).toEqual(jasmine.any(Object));
      }));
      it('should define a limit per page as default value', inject(function(githubContributor, $httpBackend) {
        var data;
        $httpBackend.when('GET', githubContributor.apiHost + '/contributors?per_page=30').respond(200, new Array(30));
        data = void 0;
        githubContributor.getContributors().then(function(fetchedData) {
          return data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        return expect(data.length === 30).toBeTruthy();
      }));
      return it('should log a error', inject(function(githubContributor, $httpBackend, $log) {
        $httpBackend.when('GET', githubContributor.apiHost + '/contributors?per_page=1').respond(500);
        githubContributor.getContributors(1);
        $httpBackend.flush();
        return expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
      }));
    });
  });

}).call(this);
