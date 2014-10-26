/*global require, describe, beforeEach, it */
(function () {
  'use strict';

  var path = require( 'path' );
  var helpers = require( 'yeoman-generator' ).test;
  var assert = require( 'assert' );
  var assert = require( 'yeoman-generator' ).assert;
  var fs = require( 'fs' );
  var utils = require( './utils' );
  var _ = require( 'underscore' );

  describe( 'Running qsExtension Generator ', function () {

    var options = {
      'skip-install-message': true,
      'skip-install'        : true,
      'skip-welcome-message': true,
      'skip-message'        : true
    };

    beforeEach( function ( done ) {

//        helpers.testDirectory( path.join( __dirname, testDir ), function ( err ) {
//            if ( err ) {
//                return done( err );
//            }
//
//            this.gen = helpers.createGenerator(
//                'qsExtension:app',
//                ['../../app', [helpers.createDummyGenerator(), 'mocha:app']],
//                false,
//                this.options
//            );
//            done();
//        }.bind(this));
      done();
    } );

    describe( 'creates', function () {

      var inputs = {
        'extensionName'       : 'My Extension',
        'extensionNameSafe'   : 'MyExtension',
        'extensionNamespace'  : 'swr',
        'extensionDescription': 'A simple extension to test',
        'extensionType'       : 'line-chart',
        'authorName'          : 'Stefan Walther'
      };

      var expectedFiles = [

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
        'src/.jshintrc',

        // dist
        'dist/',
        'build/',

        // grunt
        'grunt/grunt-config.yml',
        'grunt/Gruntfile.projectConfig.js',
        'grunt/Gruntfile.clean.js',
        'grunt/Gruntfile.cleanempty.js',
        'grunt/Gruntfile.compress.js',
        'grunt/Gruntfile.copy.js',
        'grunt/Gruntfile.js',
        'grunt/Gruntfile.replace.js',
        'grunt/gruntReplacements.yml',
        'grunt/gruntReplacements_dev.yml',
        'grunt/gruntReplacements_release.yml',
        'grunt/package.json',

        'src/lib/css/style.css',
        'src/lib/js/extensionUtils.js'

      ];
      var expectedFilesLess = [
        'src/lib/less/_root.less',
        'src/lib/less/styles.less',
        'src/lib/less/variables.less',
        'grunt/Gruntfile.less.js'
      ];

      it( 'the expected files with default options', function ( done ) {

        helpers.run( path.join( __dirname, '../app' ) )
          .inDir( path.join( __dirname, './try' ) )  // Clear the directory and set it as the CWD
          .withOptions( options )            // Mock options passed in
          .withPrompts( _.extend( inputs, {lessSupport: false} ) )          // Mock the prompt answers
          .on( 'end', function () {
            assert.file( expectedFiles );
            assert.noFile( expectedFilesLess );
            done();
          } );

      } );

      it( 'the expected files if lessSupport is TRUE', function ( done ) {

        helpers.run( path.join( __dirname, '../app' ) )
          .inDir( path.join( __dirname, './try' ) )  // Clear the directory and set it as the CWD
          .withOptions( options )            // Mock options passed in
          .withPrompts( _.extend( inputs, {lessSupport: true} ) )          // Mock the prompt answers
          .on( 'end', function () {
            assert.file( _.extend( expectedFiles, expectedFilesLess ) );
            done();
          } );

      } );

    } );

  } );


}());
