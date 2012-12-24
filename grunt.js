module.exports = function(grunt) {
	
	// Concat and minify files
	grunt.initConfig({
		pkg:'<json:package.json>',
		meta: {
			banner: "/*! <%= pkg.name %> - <%= grunt.template.today('yyyy-mm-dd') %>\n" +
					"	author: <%= pkg.author %>\n" +
					"	dependencies: <%= pkg.dependencies %>\n" +
					"	description: <%= pkg.description %> */"
		},
		lint: {
			files: ['src/*.js']
		},
		qunit: {
			all: ['tests/index.html']
		},
		concat: {
			dist: {
				src: ['src/main.js', 'src/*.js'],
				dest: 'build/li3_filemanager.js'
			}
		},
		min: {
			dist: {
				src: ['build/li3_filemanager.js'],
				dest: 'build/li3_filemanager.min.js'
			}
		},
		watch: {
			files: ['src/*'],
			tasks: ['test']
		}
	});
	
	// Default tasks
	grunt.registerTask('default', 'test build');

	// Test tasks
	grunt.registerTask('test', 'lint qunit');

	// Build and minify
	grunt.registerTask('build', 'concat min');
};