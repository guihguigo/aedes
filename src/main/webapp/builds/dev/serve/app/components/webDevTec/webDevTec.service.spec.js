(function() {
  describe('service webDevTec', function() {
    beforeEach(module('aedes'));
    it('should be registered', inject(function(webDevTec) {
      return expect(webDevTec).not.toEqual(null);
    }));
    return describe('getTec function', function() {
      it('should exist', inject(function(webDevTec) {
        return expect(webDevTec.getTec).not.toEqual(null);
      }));
      return it('should return array of object', inject(function(webDevTec) {
        var data;
        data = webDevTec.getTec();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        return expect(data.length > 5).toBeTruthy();
      }));
    });
  });

}).call(this);
