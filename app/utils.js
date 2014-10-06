var async = require('async');
var Winreg = require( 'winreg' );
var path = require( 'path' );
var Q = require('Q');

module.exports = {

    getExtensionPath: function() {

        var deferred = Q.defer();

        var regKey = new Winreg({
            hive: Winreg.HKCU,
            key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders'
        });

        regKey.values(function(err, items) {
            for (var i in items) {
                if (items[i].name === 'Personal') {
                    var dir = path.join(items[i].value, 'Qlik/Sense/Extensions' ).replace(/\\/g, "\\\\");

                    deferred.resolve(dir);

                }
            }
        });

        return deferred.promise;

    }
}