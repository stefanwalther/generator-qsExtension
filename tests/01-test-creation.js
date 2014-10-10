/*global describe, beforeEach, it */
'use strict';
var path = require( 'path' );
var helpers = require( 'yeoman-generator' ).test;
var assert = require( 'assert' );

describe( 'Expected files ', function () {

    var inputs = {
        'extensionName': 'My Extension',
        'extensionNameSafe': 'MyExtension',
        'extensionNamespace': 'swr',
        'extensionDescription': 'A simple extension to test',
        'extensionType': 'line-chart',
        'authorName': 'Stefan Walther'
    };

    beforeEach( function ( done ) {
        helpers.testDirectory( path.join( __dirname, '/try' ), function ( err ) {

            if ( err ) {
                return done( err );
            }

            // Path is based on the Test Directory
            this.app = helpers.createGenerator( 'qsExtension:app', [
                '../../app'
            ] );

            done();
        }.bind( this ) );
    } );

    it( 'are created', function ( done ) {
        var expected = [

            // root
            '.gitattributes',
            '.gitignore',
            'editorconfig',
            'CHANGELOG.md',
            'LICENSE.md',
            'README.md',

            // src
            'src/' + inputs.extensionNameSafe + '-properties.js',
            'src/' + inputs.extensionNameSafe + '-initialproperties.js',
            'src/' + inputs.extensionNamespace + '-' + inputs.extensionNameSafe + '.js',

            // lib
            'src/lib/css/style.css',

            // grunt
            'grunt/grunt-config.yml',
            'grunt/Gruntfile.clean.js',
            'grunt/Gruntfile.cleanempty.js',
            'grunt/Gruntfile.compress.js',
            'grunt/Gruntfile.copy.js',
            'grunt/Gruntfile.js',
            'grunt/Gruntfile.replace.js',
            'grunt/gruntReplacements.yml',
            'grunt/gruntReplacements_dev.yml',
            'grunt/gruntReplacements_release.yml',
            'grunt/package.json'
        ];

        helpers.mockPrompt( this.app, inputs );

        this.app.options['skip-install'] = true;
        this.app.run( {}, function () {
            assert.file( expected );
            done();
        } );
    } );
} );
