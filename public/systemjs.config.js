/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    '@angular2-material':         'node_modules/@angular2-material',
	  'moment':                     'node_modules/moment'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
	  'moment':                     { main: 'moment.js', type: 'cjs', defaultExtension: 'js'}
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade'
  ];

  // Angular Material 2 Packages to load.
  var _materialPackages = [
    'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
    'progress-circle', 'radio', 'sidenav', 'grid-list', 'tabs', 'slide-toggle'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  function materialPackIndex(item) {
    packages['@angular2-material/' + item] = { main: item, defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // REMOVE - TEMPORARY FIX FOR ROUTER ALPHA VERSION
  var setPackageConfig = packIndex;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  _materialPackages.forEach(materialPackIndex);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
