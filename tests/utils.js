/*global module, require, console*/
'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var rimraf = require( 'rimraf' )
var wrench = require( 'wrench' );

module.exports = {

	cleanTestDir: function ( cb ) {
		setInterval( function () {
			var testDir = path.join( __dirname, '/try/' );
			if ( fs.existsSync( testDir ) ) {
				wrench.rmdirSyncRecursive( testDir, false );
				console.log( '--------------------------' );
				console.log( 'Cleaned test dir' );
			}
			cb();
		}, 2000 );
		//        cb();
	}
}
;