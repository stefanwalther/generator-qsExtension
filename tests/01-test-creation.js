/*global describe, beforeEach, it */
'use strict';
var path = require( 'path' );
var helpers = require( 'yeoman-generator' ).test;
var assert = require( 'assert' );

describe( 'qsExtension generator', function () {

    var inputs = {
        'extensionName': 'MyExtension',
        'extensionNamespace': 'swr',
        'extensionDescription': 'A simple extension to test',
        'extensionType': 'line-chart',
        'authorName': 'Stefan Walther'
    };

    beforeEach( function ( done ) {
        helpers.testDirectory( path.join( __dirname, '../test/try' ), function ( err ) {

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

    it( 'creates expected files', function ( done ) {
        var expected = [

            // root
            '.gitattributes',
            '.gitignore',
            'editorconfig',

            // src
            'src/CHANGES.md',
            'src/LICENSE.md',
            'src/README.md',
            'src/' + inputs.extensionName + '-properties.js',
            'src/' + inputs.extensionName + '-initialproperties.js',
            'src/' + inputs.extensionNamespace + '-' + inputs.extensionName + '.js',

            // lib
            'src/lib/css/style.css',

            // grunt
            'grunt/gruntfile.js',
            'grunt/gruntReplacements.json',
            'grunt/gruntReplacements_build.json',
            'grunt/gruntReplacements_release.json'
        ];

        helpers.mockPrompt( this.app, inputs );

        this.app.options['skip-install'] = true;
        this.app.run( {}, function () {
            assert.file( expected );
            done();
        } );
    } );
} );
