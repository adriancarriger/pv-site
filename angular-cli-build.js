/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.*{js,map}',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.*{js,map}',
      'rxjs/**/*.*{js,map}',
      '@angular/**/*.*{js,map}',
      'moment/moment.js',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/fonts/*',
      'ng2-bootstrap/**',
      'angular2-jwt/angular2-jwt.js'
    ]
  });
};
