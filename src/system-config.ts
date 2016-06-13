/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'moment': 'vendor/moment/moment.js',
  'angular2-moment': 'vendor/angular2-moment/index.js',
  'angular2-jwt': 'vendor/angular2-jwt/angular2-jwt.js',
  'ng2-bootstrap': 'vendor/ng2-bootstrap/ng2-bootstrap.js',
  'ng2-select': 'vendor/ng2-select/ng2-select.js',
  'ng2-pagination': 'vendor/ng2-pagination/index.js'
};

/** User packages configuration. */
const packages: any = {
  'vendor/angular2-jwt': {
    defaultExtension: 'js'
  },
  'vendor/ng2-bootstrap': {
    defaultExtension: 'js',
  },
  'vendor/ng2-select': {
    defaultExtension: 'js',
  },
  'vendor/angular2-moment': {
    defaultExtension: 'js',
  },
   'vendor/ng2-pagination': {
    defaultExtension: 'js',
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
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
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

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
System.config({ map, packages });
