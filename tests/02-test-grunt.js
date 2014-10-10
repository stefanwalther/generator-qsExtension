/*global describe, beforeEach, it */
'use strict';
var path = require( 'path' );
var helpers = require( 'yeoman-generator' ).test;
var assert = require( 'assert' );

var grunt = require('grunt');


describe( 'Grunt tasks', function (  ) {

    var gruntDir;
    before( function () {
        process.chdir(__dirname + '/try/grunt');
        gruntDir = process.cwd();
    });

    it ( 'package.json exists'  , function ( done ) {
        assert.file(path.join(gruntDir, 'package.json'));
        done();
    });

    it( 'npm packages are installed', function ( done ) {

        require( 'child_process' ).exec
            ( 'npm install '
            , {cwd: gruntDir}
            , function ( err, stdout, stderr ) {

                    assert(!err)
                    done();
            } )
    });
});