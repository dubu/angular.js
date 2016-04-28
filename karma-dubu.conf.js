'use strict';

var angularFiles = require('./angularFiles');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'AngularJS: jqLite', logFile: 'karma-jqlite.log'});

  config.set({
    files: angularFiles.mergeFilesFor('dubu'),
    junitReporter: {
      outputFile: 'test_out/jqlite.xml',
      suite: 'jqLite'
    }
  });
};
