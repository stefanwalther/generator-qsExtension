/*global define, require, describe, beforeEach, it*/
(function () {

  'use strict';
  var assert = require( 'assert' );
  var path = require('path');
  var rimraf = require( 'rimraf' );
  var utils = require( './utils.js' );

  describe( 'qsExtension generator', function () {

    it( 'can be imported without blowing up', function () {
      var app = require( '../app/index' );
      assert( app !== undefined );
    } );
    it( 'has some utils', function () {
      var utils = require( '../app/utils' );
      assert( utils !== undefined );
    } );
  } );

}());




