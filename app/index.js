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

        //console.log('1: init');
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
    getLocalExtensionDir: function() {

        var done = this.async();
        var that = this;

        utils.getExtensionPath().then( function ( result ) {
            that.localExtensionDir = result;
            done();
        } ).catch( function ( err ) {
            console.error('Could  not retrieve the local extension path', err);
            done();
        });
    },

    askFor: function () {
        //console.log('3: askFor');
        var done = this.async();

        // have Yeoman greet the user
        //this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log( chalk.magenta( 'You\'re using qsExtension generator.' ) );

        var prompts = [
            {
                name: 'extensionName',
                message: 'What\'s the name of the extension?'
            },
            {
                name: 'extensionNamespace',
                message: 'What\'s the namespace for your extension?'
            },
            {
                name: 'extensionDescription',
                message: 'Describe your extension:'
            },
            {
                type: 'list',
                name: 'extensionType',
                message: 'What\'s the type of your extension? This will define the icon used (Default: extension).',
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
                name: 'authorName',
                message: 'What\'s your name?'
            }
        ];

        this.prompt( prompts, function ( props ) {

            this.extensionName = props.extensionName;
            this.extensionNameSafe = this.extensionName.replace(/\s/g, "");
            this.extensionType = props.extensionType;
            this.extensionNamespace = _.isEmpty( props.extensionNamespace ) ? '' : props.extensionNamespace + '-';
            this.extensionDescription = props.extensionDescription;
            this.authorName = props.authorName;

            var d = new Date();
            this.publishingYear = d.getFullYear();
            this.creationDate = moment( d ).format( 'YYYY-MM-DD' );

            done();
        }.bind( this ) );
    },

    root: function () {

        // root
        this.copy( '_gitattributes.txt', '.gitattributes' );
        this.copy( '_gitignore.txt', '.gitignore' );
        this.copy( '_editorconfig', 'editorconfig' );
        this.template( '_readme.md', 'README.md' );
        this.template( '_license.md', 'LICENSE.md' );
        this.template( '_ChangeLog.md', 'CHANGELOG.md' );


        // Grunt
        this.mkdir( 'grunt' );
        this.template( 'grunt/_grunt-config.yml', 'grunt/grunt-config.yml');

        this.template( 'grunt/_gruntfile.clean.js', 'grunt/Gruntfile.clean.js' );
        this.template( 'grunt/_gruntfile.cleanempty.js', 'grunt/Gruntfile.cleanempty.js' );
        this.template( 'grunt/_gruntfile.compress.js', 'grunt/Gruntfile.compress.js' );
        this.template( 'grunt/_gruntfile.copy.js', 'grunt/Gruntfile.copy.js' );

        this.template( 'grunt/_gruntfile.js', 'grunt/Gruntfile.js' );

        this.template( 'grunt/_gruntfile.replace.js', 'grunt/Gruntfile.replace.js' );
        this.template( 'grunt/_gruntfile.uglify.js', 'grunt/Gruntfile.uglify.js' );


        this.template( 'grunt/_package.json', 'grunt/package.json' );
        this.template( 'grunt/_gruntReplacements.yml', 'grunt/gruntReplacements.yml' );
        this.template( 'grunt/_gruntReplacements_dev.yml', 'grunt/gruntReplacements_dev.yml' );
        this.template( 'grunt/_gruntReplacements_release.yml', 'grunt/gruntReplacements_release.yml' );


        // sample dir
        this.mkdir( 'sample' );

        // src dir
        this.mkdir( 'src' );
        this.template( '_extension.js', 'src/' + this.extensionNamespace + this.extensionNameSafe.toLowerCase() + '.js' );
        this.template( '_extension.qext', 'src/' + this.extensionNamespace + this.extensionNameSafe.toLowerCase() + '.qext' );
        this.template( '_extension-properties.js', 'src/' + this.extensionNameSafe.toLowerCase() + '-properties.js' );
        this.template( '_extension-initialproperties.js', 'src/' + this.extensionNameSafe.toLowerCase() + '-initialproperties.js' );



        // scr/lib
        this.mkdir( 'src/lib' );
        this.mkdir( 'src/lib/js' );
        this.mkdir( 'src/lib/external' );
        this.mkdir( 'src/lib/css' );
        this.template( '_style.css', 'src/lib/css/style.css' );
        this.mkdir( 'src/lib/images' );
        this.mkdir( 'src/lib/fonts' );
        this.mkdir( 'src/lib/icons' );
        this.mkdir( 'src/lib/data' );

        // Build Dir
        this.mkdir( 'build' );

        // dist Dir
        this.mkdir( 'dist' );
    }
} );

module.exports = qsExtension;