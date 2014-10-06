// parameter: grunt --option1=myValue
// console.log( grunt.option( "option1" ) );

// Post Build Event for Visual Studio
/*
CD $(ProjectDir)

IF $(ConfigurationName) == Debug (
     grunt
) ELSE (
     grunt --target=release
)
*/
// (end)


module.exports = function (grunt) {

    //var target = grunt.option('target') || 'debug';

    // Configuration Options:
    // ~~
    // LocalExtensionPath: Path used by Qlik Sense Desktop (will be determined automatically)
    // ExtensionName: Name of the extension (Defined by prompt)
    // dropConsole: Drop all console.log, console.* code-pieces in the distributed files
    //              (Should be always true for production mode)
    var config = {
        LocalExtensionPath: "<%= localExtensionDir %>",
        ExtensionName: "<%= extensionName %>",
        ExtensionNamespace: "<%= extensionNamespace %>",

        replacements: grunt.file.readJSON('gruntReplacements.json'),
        replacementsBuild: grunt.file.readJSON('gruntReplacements_build.json'),
        replacementsRelease: grunt.file.readJSON('gruntReplacements_release.json')
    };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                options: { force: true},
                src: ['../dist']
            },
            local: {
                options: { force: true },
                src: [config.LocalExtensionPath + '/' + config.ExtensionName + '/']
            }
        },

        // Copy to temporary distribution folder and then to the folder being used by
        // Qlik Sense Desktop
        copy: {
            copy_to_dist: {
                expand: true,
                cwd: '../src/',
                src: '**',
                dest: '../dist/'
            },
            copy_to_local: {
                expand: true,
                cwd: '../dist/',
                src: '**',
                dest: config.LocalExtensionPath + '/' + config.ExtensionName + '/'
            }
        },

        // Uglify and compress files (as defined in global properties)
        uglify: {

            // Just the main file
            mainFile: {
                options: {
                    mangle: true,
                    beautify: false,
                    compress: {
                        drop_console: true
                    }
                },
                dist: {
                    files: {
                        '../dist/<%= extensionName.toLowerCase() %>.js': ['../dist/<%= extensionName.toLowerCase() %>.js']
                    }
                }
            }
        },
        compress: {
            build: {
                options: {
                    archive: '../build/<%= extensionName.toLowerCase() %>_build.zip'
                },
                files: [
                    {expand: true, cwd: '../tmp/', src: ['**'], dest: '/'}
                ]
            },
            release: {
                options: {
                    archive: '../build/<%= extensionName.toLowerCase() %>_' + config.replacements.version + '.zip'
                },
                files: [
                    {expand: true, cwd: '../tmp/', src: ['**'], dest: '/'}
                ]
            }
        },

        replace: {
            build: {
                options: {
                    patterns: [
                        {
                            json: config.replacementsBuild
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: false,
                        cwd: '../dist/',
                        src: ['**/*.*',['!**/*.png']],
                        dest: '../dist/'}
                ]
            },
            release: {
                options: {
                    patterns: [
                        {
                            json: config.replacementsRelease
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: false,
                        cwd: '../dist/',
                        src: ['**/*.*',['!**/*.png']],
                        dest: '../dist/'}
                ]
            }
        },

        cleanempty: {
            options: {
                force: true
            },
            lib: {
                options: {
                    files: false
                },
                src: ['../dist/**/*']
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: '../dist/lib/css/',
                src: ['*.css', '!*.min.css'],
                dest: '../dist/lib//css/'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-cleanempty');

    grunt.registerTask('build', [

        'clean:dist',
        'clean:local',

        'copy:copy_to_dist', 

        'replace:build',

        'copy:copy_to_local',

        'compress:build'
    ]);

    grunt.registerTask('release', [

        'clean:dist',
        'clean:local',

        'copy:copy_to_dist',

        'replace:release',
        'uglify:mainFile',
        'cssmin',

        'cleanempty',

        'copy:copy_to_local',
        'compress:release'
    ]);

};