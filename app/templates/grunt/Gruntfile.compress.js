/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-compress');
    return {

        dev: {
            options: {
                archive: '../build/<%=projectConfig.general.ExtensionNameSafe%>_dev.zip'
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/',
                    src: ['**'],
                    dest: '/'
                }
            ]
        },
        release: {
            options: {
                archive: '../build/<%=projectConfig.general.ExtensionNameSafe%>_v<%=projectConfig.general.Version%>.zip'
            },
            files: [
                {
                    expand: true,
                    cwd: '../dist/',
                    src: ['**'],
                    dest: '/'
                }
            ]
        }
    };
};