/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-sass' );
	return {

		// If used converts all the objects in place (mainly used for debugging purposes)
		allInPlace_dev: {
			options: {
				sourceMap: true,
				includePaths: ['../dist_dev']
			},
		},
		dev: {
			options: {
				sourceMap: '<%= projectconfig.dev.sass.sassSourceMap %>',
			},
			files: {
				"../dist_dev/lib/css/style.css": "../src/lib/sass/_root.scss"
			}
		},
		release: {
			options: {
				sourceMap: '<%= projectconfig.release.sass.sassSourceMap %>',
			},
			files: {
				"../dist/lib/css/style.css": "../src/lib/less/_root.scss"
			}
		}
	};
};