/*global module*/
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	return {
		options: {
			jshintrc: ".jshintrc",
			ignores: []
		},
		defaults: ["<%=projectConfig.jsSources%>"]
	};
};
