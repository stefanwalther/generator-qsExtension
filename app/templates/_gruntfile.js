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

    var target = grunt.option('target') || 'debug';

    // Configuration Options:
    // LocalExtensionPath: Path used by QlikView Personal Edition
    // ExtensionName: Name of the extension
    // mangle: set if mangling should be activated 
    // dropConsole: Drop all console.log, console.* code-pieces in the distributed files 
    //              (Should be always true for production mode)
    var config = {
        LocalExtensionPath: "d:/Documents/Qlik/QlikView/Extensions",
        ExtensionName: "<%= extensionName %>",
        ExtensionNamespace: "<%= extensionNamespace %>",
        mangle: false,
        dropConsole: false
    };

    if (target === 'release') {
        config.mangle = true;
        config.dropConsole = true;
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
            },
            // Copy *.md to dist (Readme.md, ChangeLog.md, License.md)
            copy_to_dist_meta: {
                expand: true,
                src: '*.md',
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
                    'dist/<%= extensionNamespace.toLowerCase() + '-' + extensionName.toLowerCase() %>.js': ['dist/<%= extensionNamespace.toLowerCase() + '-' + extensionName.toLowerCase() %>.js']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [
        'clean', 
        'copy:copy_to_dist', 
        'copy:copy_to_dist_meta', 
        'uglify', 
        'copy:copy_to_PE']);

};