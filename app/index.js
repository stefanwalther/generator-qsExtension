/*global module,define, require, console, process*/
/*jshint
 camelcase: false
 */
(function () {
	'use strict';
	var util = require( 'util' );
	var path = require( 'path' );
	var yeoman = require( 'yeoman-generator' );
	var chalk = require( 'chalk' );
	var _ = require( 'underscore' );
	var moment = require( 'moment' );
	var utils = require( './utils' );

	var qsExtension = yeoman.generators.Base.extend( {

		init: function () {

			this.pkg = require( "../package.json" );

			this.on( 'end', function () {
				if ( !this.options['skip-install'] ) {
					var npmdir = process.cwd() + '/grunt';
					process.chdir( npmdir );

					this.installDependencies( {
						bower: false,
						npm: true
					} );
				}
			} );
		},

		// Retrieve the local extension folder, e.g. %USERPROFILE%\My Documents\Qlik\Sense\Extensions\
		getLocalExtensionDir: function () {

			var done = this.async();
			var that = this;

			utils.getExtensionPath().then( function ( result ) {
				that.localExtensionDir = result;
				done();
			} ).catch( function ( err ) {
				console.error( 'Could  not retrieve the local extension path', err );
				done();
			} );
		},

		askFor: function () {
			var done = this.async();

			// replace it with a short and sweet description of your generator
			this.log( chalk.magenta( 'You\'re using qsextension generator.' ) );

			var prompts = [
				{
					type: "confirm",
					name: "advancedMode",
					message: "Do you want to choose advanced mode? (Choose [N]o if you are unsure).",
					default: false
				},
				{
					name: 'extensionName',
					message: 'What\'s the name of the extension?'
				},
				{
					name: 'extensionDescription',
					message: 'Describe your extension:'
				},
				{
					name: 'authorName',
					message: 'What\'s your name?'
				},
				{
					when: function ( props ) {
						return (/y/i).test( props.advancedMode );
					},
					name: 'extensionNamespace',
					message: 'Advanced Mode: What\'s the namespace for your extension? (Leave it blank if you are unsure).'
				},
				{
					when: function ( props ) {
						return (/y/i).test( props.advancedMode );
					},
					type: 'list',
					name: 'extensionType',
					message: 'Advanced Mode: What\'s the type of your extension? This will define the icon used (Default: extension).',
					default: "extension",
					choices: [
						"extension",
						"bar-chart-vertical",
						"line-chart",
						"pie-chart",
						"gauge-chart",
						"scatter-chart",
						"text-image",
						"table",
						"list",
						"filterpane",
						"treemap"
					]
				},
				{
					when: function ( props ) {
						return (/y/i).test( props.advancedMode );
					},
					type: 'confirm',
					name: 'lessSupport',
					message: 'Advanced Mode: Would you like to write your styles in Less (instead of pure CSS)?',
					default: false
				}
			];

			this.prompt( prompts, function ( props ) {

				this.advancedMode = props.advancedMode;
				this.extensionName = props.extensionName;
				this.extensionNameSafe = this.extensionName.replace( /\s/g, "" );
				this.extensionType = props.extensionType;
				this.extensionNamespace = _.isEmpty( props.extensionNamespace ) ? '' : props.extensionNamespace + '-';
				this.extensionDescription = props.extensionDescription;
				this.authorName = props.authorName;
				this.lessSupport = props.lessSupport;

				var d = new Date();
				this.publishingYear = d.getFullYear();
				this.creationDate = moment( d ).format( 'YYYY-MM-DD' );

				// Debug
				console.log( 'advancedMode', this.advancedMode );
				console.log( 'extensionName', this.extensionName );
				console.log( 'extensionNameSafe', this.extensionNameSafe );
				console.log( 'extensionType', this.extensionType );
				console.log( 'extensionNamespace', this.extensionNamespace );
				console.log( 'extensionDescription', this.extensionDescription );
				console.log( 'authorName', this.authorName );
				console.log( 'lessSupport', this.lessSupport );
				console.log( 'publishingYear', this.publishingYear );
				console.log( 'creationDate', this.creationDate );
				done();
			}.bind( this ) );
		},

		root: function () {

			// root
			this.copy( 'gitattributes.txt', '.gitattributes' );
			this.copy( 'gitignore.txt', '.gitignore' );
			this.template( 'readme.md', 'README.md' );
			this.template( 'license.md', 'LICENSE.md' );
			this.template( 'changelog.md', 'CHANGELOG.md' );

			// Grunt
			this.mkdir( 'grunt' );
			this.copy( 'grunt/.jshintrc-dev', 'grunt/.jshintrc-dev' );
			this.copy( 'grunt/.jshintrc-release', 'grunt/.jshintrc-release' );
			this.template( 'grunt/grunt-config.yml', 'grunt/grunt-config.yml' );
			this.copy( 'grunt/_package.json', 'grunt/package.json' );
			this.copy( 'grunt/Gruntfile.projectconfig.js', 'grunt/Gruntfile.projectconfig.js' );
			this.copy( 'grunt/Gruntfile.clean.js', 'grunt/Gruntfile.clean.js' );
			this.copy( 'grunt/Gruntfile.cleanempty.js', 'grunt/Gruntfile.cleanempty.js' );
			this.copy( 'grunt/Gruntfile.compress.js', 'grunt/Gruntfile.compress.js' );
			this.copy( 'grunt/Gruntfile.copy.js', 'grunt/Gruntfile.copy.js' );

			// Gruntfile.Less will be added in the createStyles task
			this.template( 'grunt/Gruntfile.js', 'grunt/Gruntfile.js' );
			this.copy( 'grunt/Gruntfile.jshint.js', 'grunt/Gruntfile.jshint.js' );
			this.copy( 'grunt/Gruntfile.replace.js', 'grunt/Gruntfile.replace.js' );
			this.copy( 'grunt/Gruntfile.uglify.js', 'grunt/Gruntfile.uglify.js' );
			this.copy( 'grunt/gruntReplacements.yml', 'grunt/gruntReplacements.yml' );
			this.copy( 'grunt/gruntReplacements_dev.yml', 'grunt/gruntReplacements_dev.yml' );
			this.copy( 'grunt/gruntReplacements_release.yml', 'grunt/gruntReplacements_release.yml' );

			// src dir
			this.mkdir( 'src' );
			this.copy( '.jshintrc', 'src/.jshintrc' );
			this.template( 'extension.js', 'src/' + this.extensionNamespace.toLowerCase() + this.extensionNameSafe.toLowerCase() + '.js' );
			this.template( 'extension.qext', 'src/' + this.extensionNamespace.toLowerCase() + this.extensionNameSafe.toLowerCase() + '.qext' );
			this.copy( 'extension.png', 'src/' + this.extensionNameSafe.toLowerCase() + '.png' );
			this.template( 'extension-properties.js', 'src/properties.js' );
			this.template( 'extension-initialproperties.js', 'src/initialproperties.js' );

			// src/lib
			this.mkdir( 'src/lib' );
			this.mkdir( 'src/lib/css' );
			this.mkdir( 'src/lib/js' );
			this.mkdir( 'src/lib/external' );
			this.mkdir( 'src/lib/images' );
			this.mkdir( 'src/lib/fonts' );
			this.mkdir( 'src/lib/icons' );
			this.mkdir( 'src/lib/data' );
			this.mkdir( 'src/lib/partials' );

			// src/lib/content
			this.copy( 'lib/js/extensionUtils.js', 'src/lib/js/extensionUtils.js' );

			// Build Dir
			this.mkdir( 'build' );
			this.mkdir( 'dist' );
		},

		createStyles: function () {

			//console.log( 'lessSupport: ', this.lessSupport );

			if ( this.lessSupport === true ) {
				this.mkdir( 'src/lib/less' );
				this.template( '_root.less', 'src/lib/less/_root.less' );
				this.template( 'styles.less', 'src/lib/less/styles.less' );
				this.template( 'variables.less', 'src/lib/less/variables.less' );
				this.template( 'style_Less.css', 'src/lib/css/style.css' );
				this.copy( 'grunt/Gruntfile.less.js', 'grunt/Gruntfile.less.js' );

			} else {
				this.template( 'style_noLess.css', 'src/lib/css/style.css' );
			}
		}
	} );

	module.exports = qsExtension;
}());
