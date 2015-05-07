// run this grunt file to test & demo.
module.exports = function (grunt) {
	require('./tasks/hui-template.js')(grunt);
	
	grunt.initConfig({
		'hui-template': {
			compile: {
				src: './demo/**/*.tp',
				dest: './demo'
			}
		}

	});
	
	grunt.registerTask('default', ['hui-template']);

};