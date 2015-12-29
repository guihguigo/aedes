(function() {
  angular.module('aedes').filter("orderByEmDia", [
    function() {
      return function(filter) {
        return console.log(filter);
      };
    }
  ]);

}).call(this);
