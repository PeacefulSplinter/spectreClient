// Karma configuration
// Generated on Thu Feb 12 2015 18:58:10 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //Dependency files
      'client/app/lib/angular/angular.js',
      'client/app/lib/angular-ui-router/release/angular-ui-router.js',
      'client/app/lib/angular-ui-router/src/**.js',
      'client/app/lib/react/react.js',
      'client/app/lib/d3/d3.min.js',

      //our app files
      'client/app/home/*.js',
      'client/app/example/*.js',
      'client/app/login/*.js',
      'client/app/signup/*.js',
      'client/app/app.js',
      'client/app/services/*.js',

      //our spec file
      'node_modules/expect.js/index.js',
      'test/spec/client/**.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/app/**/*.js' : 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
