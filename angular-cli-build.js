// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'moment/moment.js',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/fonts/*',
      'ng2-bootstrap/**',
      'ng2-select/**',
      'angular2-jwt/angular2-jwt.js',
      'angular2-moment/**',
      'ng2-pagination/**',
      'nouislider/**',
      'ng2-nouislider/**'
    ]
  });
};
