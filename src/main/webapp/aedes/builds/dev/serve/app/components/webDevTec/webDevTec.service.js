(function() {
  angular.module('aedes').service('webDevTec', function() {
    'ngInject';
    var data, getTec;
    data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }, {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      }, {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }, {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      }, {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      }, {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      }, {
        'title': 'Material Design Lite',
        'url': 'http://www.getmdl.io/',
        'description': 'Add a Material Design look and feel to your websites.',
        'logo': 'material-design-lite.png'
      }, {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }, {
        'title': 'CoffeeScript',
        'url': 'http://coffeescript.org/',
        'description': 'CoffeeScript, \'a little language that compiles into JavaScript\'.',
        'logo': 'coffeescript.png'
      }
    ];
    getTec = function() {
      return data;
    };
    this.getTec = getTec;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsT0FESCxDQUNXLFdBRFgsRUFDd0IsU0FBQTtJQUNwQjtBQUFBLFFBQUE7SUFDQSxJQUFBLEdBQU87TUFDTDtRQUNFLE9BQUEsRUFBUyxXQURYO1FBRUUsS0FBQSxFQUFPLHdCQUZUO1FBR0UsYUFBQSxFQUFlLDZCQUhqQjtRQUlFLE1BQUEsRUFBUSxhQUpWO09BREssRUFPTDtRQUNFLE9BQUEsRUFBUyxhQURYO1FBRUUsS0FBQSxFQUFPLHdCQUZUO1FBR0UsYUFBQSxFQUFlLDJDQUhqQjtRQUlFLE1BQUEsRUFBUSxpQkFKVjtPQVBLLEVBYUw7UUFDRSxPQUFBLEVBQVMsUUFEWDtRQUVFLEtBQUEsRUFBTyxvQkFGVDtRQUdFLGFBQUEsRUFBZSw2QkFIakI7UUFJRSxNQUFBLEVBQVEsVUFKVjtPQWJLLEVBbUJMO1FBQ0UsT0FBQSxFQUFTLFNBRFg7UUFFRSxLQUFBLEVBQU8sMkJBRlQ7UUFHRSxhQUFBLEVBQWUsNkJBSGpCO1FBSUUsTUFBQSxFQUFRLGFBSlY7T0FuQkssRUF5Qkw7UUFDRSxPQUFBLEVBQVMsT0FEWDtRQUVFLEtBQUEsRUFBTyxnQ0FGVDtRQUdFLGFBQUEsRUFBZSx5Q0FIakI7UUFJRSxNQUFBLEVBQVEsV0FKVjtPQXpCSyxFQStCTDtRQUNFLE9BQUEsRUFBUyxZQURYO1FBRUUsS0FBQSxFQUFPLHVDQUZUO1FBR0UsYUFBQSxFQUFlLG1GQUhqQjtRQUlFLE1BQUEsRUFBUSxnQkFKVjtPQS9CSyxFQXFDTDtRQUNFLE9BQUEsRUFBUyxzQkFEWDtRQUVFLEtBQUEsRUFBTyx1QkFGVDtRQUdFLGFBQUEsRUFBZSx1REFIakI7UUFJRSxNQUFBLEVBQVEsMEJBSlY7T0FyQ0ssRUEyQ0w7UUFDRSxPQUFBLEVBQVMsYUFEWDtRQUVFLEtBQUEsRUFBTyxtQ0FGVDtRQUdFLGFBQUEsRUFBZSx5RkFIakI7UUFJRSxNQUFBLEVBQVEsZUFKVjtPQTNDSyxFQWlETDtRQUNFLE9BQUEsRUFBUyxjQURYO1FBRUUsS0FBQSxFQUFPLDBCQUZUO1FBR0UsYUFBQSxFQUFlLG9FQUhqQjtRQUlFLE1BQUEsRUFBUSxrQkFKVjtPQWpESzs7SUF5RFAsTUFBQSxHQUFTLFNBQUE7YUFDUDtJQURPO0lBR1QsSUFBQyxDQUFBLE1BQUQsR0FBVTtFQTlEVSxDQUR4QjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuc2VydmljZSAnd2ViRGV2VGVjJywgKCkgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnTWF0ZXJpYWwgRGVzaWduIExpdGUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cuZ2V0bWRsLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBZGQgYSBNYXRlcmlhbCBEZXNpZ24gbG9vayBhbmQgZmVlbCB0byB5b3VyIHdlYnNpdGVzLicsXG4gICAgICAgICdsb2dvJzogJ21hdGVyaWFsLWRlc2lnbi1saXRlLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQ29mZmVlU2NyaXB0JyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vY29mZmVlc2NyaXB0Lm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQ29mZmVlU2NyaXB0LCBcXCdhIGxpdHRsZSBsYW5ndWFnZSB0aGF0IGNvbXBpbGVzIGludG8gSmF2YVNjcmlwdFxcJy4nLFxuICAgICAgICAnbG9nbyc6ICdjb2ZmZWVzY3JpcHQucG5nJ1xuICAgICAgfVxuICAgIF1cblxuICAgIGdldFRlYyA9IC0+XG4gICAgICBkYXRhXG5cbiAgICBAZ2V0VGVjID0gZ2V0VGVjXG4gICAgcmV0dXJuXG4iXX0=