/*global module,define,require */
/*jshint
 camelcase: false
 */
const fs = require( "fs" );

module.exports = function( grunt ) {
    'use strict';

    // Global Configs
    var config = {
        LocalExtensionPath: "<%= localExtensionDir %>",
        ExtensionName: "<%= extensionName %>",
        ExtensionNamespace: "<%= extensionNamespace %>",
        mangle: false,
        dropConsole: false,
        beautify: false,

        // less options
        lessCompress: false,
        lessYuiCompress: false,
        lessCleanCss: false,
        lessOptimization: 2,

        // Variables & replacement
        replacements_build: grunt.file.readJSON('replacements_build.json'),
        replacements_release: grunt.file.readJSON('replacements_release.json')

    };

    var cfg = {};
    // parse all configured tasks automatically:
    fs.readdirSync( "./" ).forEach( function ( file ) {
        if ( file.indexOf( "Gruntfile." ) === 0 && file !== "Gruntfile.js" ) {
            var name = file.split( "Gruntfile." )[1].split( ".js" )[0];
            cfg[name] = require( "./Gruntfile." + name )( grunt );

        }
    } );

    grunt.initConfig( cfg );

};