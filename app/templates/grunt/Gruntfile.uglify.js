/*global module*/
/*jshint
 camelcase: false
 */
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	return {

		options: {
			mangle: ('<%= projectconfig.release.uglify.mangle%>' === 'true'),
			beautify: ('<%= projectconfig.release.uglify.beautify%>' === 'true'),
			preserveComments: ('<%= projectconfig.release.uglify.preserveComments%>' === 'true'),
			compress: {
				drop_console: ('<%= projectconfig.release.uglify.drop_console%>' === 'true')
			}
		},
		release: {
			files: [
				{
					src: ['./../dist/**/*.js', '!./../dist/**/*.min.js'],
					dest: './../dist/',
					expand: true
				}
			]
		}
	};
};