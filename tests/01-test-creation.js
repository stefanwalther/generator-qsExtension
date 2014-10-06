/*global describe, beforeEach, it */
'use strict';
var path = require( 'path' );
var helpers = require( 'yeoman-generator' ).test;

describe( 'qsExtension generator', function () {
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

            '.gitattributes',
            '.gitignore',
            'editorconfig',

            'src/CHANGES.md',
            'src/LICENSE.md',
            'src/README.md',

            'src/lib/css/style.css'
        ];

        helpers.mockPrompt( this.app, {
            'extensionName': 'MyExtension',
            'extensionNamespace': 'swr',
            'extensionDescription': 'A simple extension to test',
            'extensionType': 'line-chart',
            'authorName': 'Stefan Walther'
        } );

        this.app.options['skip-install'] = true;
        this.app.run( {}, function () {
            helpers.assertFile( expected );
            done();
        } );
    } );
} );
