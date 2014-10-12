/*global module,define,require */
/*jshint
 camelcase: false
 */
var fs = require( "fs" );

module.exports = function (grunt) {

    // Target can be either "release" or "dev"
    var target = grunt.option('target') || 'dev';

    grunt.option['debug'] = true;

    var replacements = {
        general: grunt.file.readYAML('gruntReplacements.yml'),
        dev: grunt.file.readYAML('gruntReplacements_dev.yml'),
        release: grunt.file.readYAML('gruntReplacements_release.yml')
    };
    grunt.config.set( 'replacements', replacements);
    grunt.config.set( 'config', grunt.file.readYAML('grunt-config.yml'));

    var cfg = {};
    // parse all configured tasks automatically:
    fs.readdirSync( "./" ).forEach( function ( file ) {
        if ( file.indexOf( "Gruntfile." ) === 0 && file !== "Gruntfile.js" ) {
            var name = file.split( "Gruntfile." )[1].split( ".js" )[0];
            cfg[name] = require( "./Gruntfile." + name )( grunt );

        }
    } );

    grunt.initConfig( cfg );

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-cleanempty');
    <% if (lessSupport) {%>grunt.loadNpmTasks('grunt-contrib-less');<% } %>


    grunt.registerTask('dev', [

        // Clean 'dist' and copy all relevant files to 'dist'
        'clean:empty_dist',
        'copy:copy_to_dist',

        // Replacements
        'replace:general',
        'replace:dev',

        // Less support: <%= lessSupport %>
        <% if (lessSupport) {%>'less:dev',<% } %>

        // Cleanup
        'clean:devFiles',
        'cleanempty:all',


        // Deploy to Qlik Sense Desktop
        'clean:empty_desktop',
        'copy:copy_to_desktop',

        // Zip
        'compress:dev'



    ]);

    grunt.registerTask('release', [

        // Clean 'dist' and copy all relevant files to 'dist'
        'clean:empty_dist',
        'copy:copy_to_dist',

        // Replacements
        'replace:general',
        'replace:release',

        // Less support: <%= lessSupport %>
        <% if (lessSupport) {%>'less:release',<% } %>

        'uglify:release',

        // Cleanup
        'clean:devFiles',
        'cleanempty:all',

        // Deploy to Qlik Sense Desktop
        'clean:empty_desktop',
        'copy:copy_to_desktop',

        // Zip
        'compress:release'


    ]);

    // Pointer to dev task
    grunt.registerTask('default', 'dev');

};