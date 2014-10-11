/*global module*/
module.exports = function ( grunt ) {
    'use strict';

    var config = grunt.config.data.config;

    return {
        dev: {
            options: {
                compress: config.dev.less.lessCompress,
                yuicompress: config.dev.less.lessYuiCompress,
                optimization: config.dev.less.lessOptimization,
                cleancss: config.dev.less.lessCleanCss
            },
            files: {
                "../dist/lib/css/style.css": "../src/lib/less/_root.less"
            }
        },
        release: {
            options: {
                compress: config.release.less.lessCompress,
                yuicompress: config.release.less.lessYuiCompress,
                optimization: config.release.less.lessOptimization,
                cleancss: config.release.less.lessCleanCss
            },
            files: {
                "../dist/lib/css/style.css": "../src/lib/less/_root.less"
            }
        }
    };
};