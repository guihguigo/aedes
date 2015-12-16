(function() {
  angular.module('aedes').factory('ChartService', function($log, $http) {
    'ngInject';
    return {
      loadGoogleVisualization: function() {
        var e, error;
        try {
          google.load('visualization', '1', {
            'callback': 'console.log(\'success\');',
            'packages': ['corechart']
          });
          return true;
        } catch (error) {
          e = error;
          console.log('Could not load Google lib', e);
          return false;
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQvY2hhcnQuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxjQURYLEVBQzJCLFNBQUMsSUFBRCxFQUFPLEtBQVA7SUFDdkI7V0FFQTtNQUFBLHVCQUFBLEVBQXlCLFNBQUE7QUFFdkIsWUFBQTtBQUFBO1VBQ0UsTUFBTSxDQUFDLElBQVAsQ0FBWSxlQUFaLEVBQTZCLEdBQTdCLEVBQWtDO1lBQ2hDLFVBQUEsRUFBVywyQkFEcUI7WUFFaEMsVUFBQSxFQUFXLENBQUMsV0FBRCxDQUZxQjtXQUFsQztBQUtBLGlCQUFPLEtBTlQ7U0FBQSxhQUFBO1VBT007VUFDSixPQUFPLENBQUMsR0FBUixDQUFZLDJCQUFaLEVBQXlDLENBQXpDO0FBQ0EsaUJBQU8sTUFUVDs7TUFGdUIsQ0FBekI7O0VBSHVCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jaGFydC9jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuZmFjdG9yeSAnQ2hhcnRTZXJ2aWNlJywgKCRsb2csICRodHRwKSAtPlxuICAgICduZ0luamVjdCdcblxuICAgIGxvYWRHb29nbGVWaXN1YWxpemF0aW9uOiAoKSAtPlxuXG4gICAgICB0cnlcbiAgICAgICAgZ29vZ2xlLmxvYWQoJ3Zpc3VhbGl6YXRpb24nLCAnMScsIHtcbiAgICAgICAgICAnY2FsbGJhY2snOidjb25zb2xlLmxvZyhcXCdzdWNjZXNzXFwnKTsnLFxuICAgICAgICAgICdwYWNrYWdlcyc6Wydjb3JlY2hhcnQnXVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICBjYXRjaCBlXG4gICAgICAgIGNvbnNvbGUubG9nICdDb3VsZCBub3QgbG9hZCBHb29nbGUgbGliJywgZVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuXG4iXX0=