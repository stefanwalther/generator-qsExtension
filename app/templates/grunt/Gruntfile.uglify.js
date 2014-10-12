/*global module*/
/*jshint
 camelcase: false
 */
module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data.config;

    return {

        options: {
            mangle: config.release.uglify.mangle,
            beautify: config.release.uglify.beautify,
            preserveComments: config.release.uglify.preserveComments,
            compress: {
                drop_console: config.release.uglify.drop_console
            }
        },
        release: {
            files: {
                '../dist/qwidget.js': ['../dist/' + config.general.ExtensionNamespace + config.general.ExtensonNameSafe + '.js'],
                '../dist/qwidget-properties.js': ['../dist/' + config.general.ExtensonNameSafe + '-properties.js']

            }
        }
    };
};