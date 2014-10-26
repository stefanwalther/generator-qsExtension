/*global require, describe, xdescribe, it, xit, before, after, beforeEach, afterEach, console  */
'use strict';
var path = require( 'path' );
var helpers = require( 'yeoman-generator' ).test;
var assert = require( 'assert' );
var grunt = require( 'grunt' );


describe( 'Grunt tasks', function (  ) {

    var gruntDir;
    before( function ( done ) {

        var options = {
            'skip-install-message': true,
            'skip-install': true,
            'skip-welcome-message': true,
            'skip-message': true
        };
        var inputs = {
            'extensionName': 'My Extension',
            'extensionNameSafe': 'MyExtension',
            'extensionNamespace': 'swr',
            'extensionDescription': 'A simple extension to test',
            'extensionType': 'line-chart',
            'authorName': 'Stefan Walther',
            'lessSupport': true
        };
        helpers.run(path.join( __dirname, '../app'))
            .inDir(path.join( __dirname, './try'))
            .withOptions(options)
            .withPrompts(inputs)
            .on('end', function (  ) {
                process.chdir(__dirname + '/try/grunt');
                gruntDir = process.cwd();
                done();
            });
    });

    it ( 'package.json exists'  , function ( done ) {
        assert.file(path.join(gruntDir, 'package.json'));
        done();
    });

  /**
   * Add a timeout of about 20000 ms to the mocha options: --timeout 20000
   */
    it( 'npm packages are installed', function ( done ) {

        require( 'child_process' ).exec
            (
                'npm install',
                {
                  cwd: gruntDir
                },
                function ( err, stdout, stderr ) {
                  if (err) { throw err; }

                  assert(!err);
                  done();
            } );
    });

    it('dev task works properly', function ( done ) {
        require( 'child_process' ).exec(
            'grunt',
            {cwd: gruntDir},
            function ( err, stdout, stderr ) {
                assert(!err);
                done();
            });
    });

    it('release task works properly', function ( done ) {
        require( 'child_process' ).exec(
            'grunt -release',
            {cwd: gruntDir},
            function ( err, stdout, stderr ) {
                assert(!err);
                done();
            });

    });
});
