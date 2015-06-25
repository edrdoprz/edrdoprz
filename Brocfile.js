/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	defeatureify: {
	    'enableStripDebug': true,
	    'debugStatements': [
	        'Ember.default.warn',
	        'Ember.default.assert',
	        'Ember.default.deprecate',
	        'Ember.default.debug',
	        'Ember.default.Logger.assert',
	        'Ember.default.Logger.debug',
	        'Ember.default.Logger.error',
	        'Ember.default.Logger.info',
	        'Ember.default.Logger.log',
	        'Ember.default.Logger.warn',
	        'console.assert',
	        'console.clear',
	        'console.count',
	        'console.debug',
	        'console.dir',
	        'console.dirxml',
	        'console.error',
	        'console.group',
	        'console.groupCollapsed',
	        'console.groupEnd',
	        'console.info',
	        'console.log',
	        'console.profile',
	        'console.profileEnd',
	        'console.select',
	        'console.table',
	        'console.time',
	        'console.timeEnd',
	        'console.trace',
	        'console.warn'
	    ],
	    'features': {}
	}
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('vendor/octicons.woff', {
	destDir: 'assets'
});
app.import('vendor/In-Black-28px.png', {
	destDir: 'assets'
});

module.exports = app.toTree();
