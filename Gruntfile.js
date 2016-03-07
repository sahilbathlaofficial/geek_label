module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Build the site using grunt-includes
		includes: {
			build: {
				src: [ '*.html' ],
				cwd: '.',
				dest: 'site',
				options: {
					flatten: true,
					includePath: 'include'
				}
			}
		}
	});

	// Load plugins used by this task gruntfile
	grunt.loadNpmTasks('grunt-includes');

	// Task definitions
	grunt.registerTask('build', ['includes']);
	grunt.registerTask('default', ['build']);
};