/*global describe, beforeEach, it*/
'use strict';
var assert = require( 'assert' );

describe( 'qsExtension generator', function () {
    it( 'can be imported without blowing up', function () {
        var app = require( '../app/index' );
        assert( app !== undefined );
    } );
    it( 'has some utils', function () {
        var utils = require( '../app/utils' );
        assert( utils != undefined );
    } )

} );
