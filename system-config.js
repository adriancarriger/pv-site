// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'moment': 'vendor/moment/moment.js',
    'angular2-moment': 'vendor/angular2-moment/index.js',
    'angular2-jwt': 'vendor/angular2-jwt/angular2-jwt.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap/ng2-bootstrap.js',
    'ng2-select': 'vendor/ng2-select/ng2-select.js',
    'ng2-pagination': 'vendor/ng2-pagination/index.js',
    'nouislider': 'vendor/nouislider/distribute/nouislider.js',
    'ng2-nouislider': 'vendor/ng2-nouislider/src/nouislider.js'
};
/** User packages configuration. */
var packages = {
    'vendor/angular2-jwt': {
        defaultExtension: 'js'
    },
    'vendor/ng2-bootstrap': {
        defaultExtension: 'js'
    },
    'vendor/ng2-select': {
        defaultExtension: 'js'
    },
    'vendor/angular2-moment': {
        defaultExtension: 'js'
    },
    'vendor/ng2-pagination': {
        defaultExtension: 'js'
    },
    'vendor/nouislider': {
        defaultExtension: 'js'
    },
    'vendor/ng2-nouislider': {
        defaultExtension: 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+home',
    'app/navbar',
    'app/footer',
    'app/+default-page',
    'app/+test-template',
    'app/sermons-page',
    'app/+sermons-page',
    'app/header-default',
    'app/filter-default',
    'app/sermon-list',
    'app/preload',
    'app/pagination',
    'app/components/player',
    'app/components/slider',
    'app/pv-logo',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map