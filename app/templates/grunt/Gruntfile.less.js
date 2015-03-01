/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-less' );
	return {

		// If used converts all the objects in place (mainly used for debugging purposes)
		allInPlace: {
			options: {
				compress: false,
				yuicompress: false,
				optimization: 2,
				cleancss: false,
				paths: ['../dist']
			},
			files: [{
				expand: true,
				cwd: "../dist",
				src: ["**/*.less"],
				ext: ".css",
				dest: "../dist"
			}]
		},
		dev: {
			options: {
				compress: ('<%= projectconfig.dev.less.lessCompress%>' === 'true'),
				yuicompress: ('<%= projectconfig.dev.less.lessYuiCompress%>' === 'true'),
				optimization: parseInt( 'projectconfig.dev.less.lessOptimization' ),
				cleancss: ('<%= projectconfig.dev.less.lessCleanCss%>' === 'true')
			},
			files: {
				"../dist/lib/css/style.css": "../src/lib/less/_root.less"
			}
		},
		release: {
			options: {
				compress: ('<%= projectconfig.release.less.lessCompress%>' === 'true'),
				yuicompress: ('<%= projectconfig.release.less.lessYuiCompress%>' === 'true'),
				optimization: parseInt( 'projectconfig.release.less.lessOptimization' ),
				cleancss: ('<%= projectconfig.release.less.lessCleanCss%>' === 'true')
			},
			files: {
				"../dist/lib/css/style.css": "../src/lib/less/_root.less"
			}
		}
	};
};