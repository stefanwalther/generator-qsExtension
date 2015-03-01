/*global module, define, require*/
'use strict';
var async = require( 'async' );
var Winreg = require( 'winreg' );
var path = require( 'path-extra' );
var Q = require( 'q' );
var fs = require( 'fs' );

module.exports = {

	getExtensionPath: function () {

		var deferred = Q.defer();

		if ( process.platform === 'win32' ) {

			var regKey = new Winreg( {
				hive: Winreg.HKCU,
				key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders'
			} );

			try {
				regKey.values( function ( err, items ) {
					for ( var i in items ) {
						if ( items[i].name === 'Personal' ) {
							var dir = path.join( items[i].value, 'Qlik/Sense/Extensions' ).replace( /\\/g, "\\\\" );

							dir = dir.replace( '%USERPROFILE%', process.env['USERPROFILE'].replace( /\\/g, "\\\\" ) );

							//console.info( 'getExtensionPath:win32', dir );
							deferred.resolve( dir );
						}
					}
				} );
			}
			catch ( err ) {
				deferred.reject( err );
			}
		}
		else {
			var dir = path.homedir() + '\\Documents\\Qlik\\Sense\\Extensions';
			//console.info( 'getExtensionPath:non-win32', dir );
			deferred.resolve( dir );
		}
		return deferred.promise;

	},

	getLicense: function ( options ) {

		var license_file = __dirname + '/licenses/' + options.license + '.txt';
		var lic_content = fs.readFileSync( license_file, 'utf8' );

		// Make replacements for year and fullname.
		var temp_result = lic_content
			.replace( /\[year\]/g, options.publishingYear )
			.replace( /\[fullname\]/g, options.authorName )
			.replace( /\[project\]/g, options.extensionName );

		// Prefix every line with a >
		var lineArray = temp_result.split( '\n' );
		var result = [];
		for ( var i = 0; i < lineArray.length; i++ ) {
			result.push( '> ' + lineArray[i] );
		}
		return result.join( '\n' );

	}
}
;
