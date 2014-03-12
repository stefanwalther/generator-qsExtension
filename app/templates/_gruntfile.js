module.exports = function (grunt) {

    // Configuration Options:
    // LocalExtensionPath: Path used by QlikView Personal Edition
    // ExtensionName: Name of the extension
    // mangle: set if mangling should be activated 
    // dropConsole: Drop all console.log, console.* code-pieces in the distributed files 
    //              (Should be always true for production mode)
        var config = {
        LocalExtensionPath: "d:/Documents/Qlik/QlikView/Extensions",
        ExtensionName: "<%= extensionName %>",
        mangle: false,
        dropConsole: false
    };

    grunt.initConfig({
        // Delete existing files
        clean: {
            dist: {
                options: { force: true},
                src: ['dist']
            },
            pe: {
                options: { force: true },
                src: [config.LocalExtensionPath + '/' + config.ExtensionName + '/']
            }
        }

        // Copy to temporary distribution folder and then to the folder being used by
        // QlikView Personal Edition
        , copy: {
            copy_to_dist: {
                expand: true,
                cwd: 'src/',
                src: '**',
                dest: 'dist/'
            }
            , copy_to_PE: {
                expand: true,
                cwd: 'dist/',
                src: '**',
                dest: config.LocalExtensionPath + '/' + config.ExtensionName + '/'

            }
        }
        // Uglify and compress files (as defined in global properties)
        , uglify: {
            options: {
                mangle: config.mangle,
                compress: {
                    drop_console: config.dropConsole
                }
            },
            dist: {
                files: {
                    'dist/<%= extensionName.toLowerCase() %>.js': ['dist/<%= extensionName.toLowerCase() %>.js']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'copy:copy_to_dist', 'uglify', 'copy:copy_to_PE']);

};