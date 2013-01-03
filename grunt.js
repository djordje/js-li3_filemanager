module.exports = function(grunt) {

	grunt.initConfig({
		pkg:'<json:package.json>',
		cmp: '<json:component.json>',
		meta: {
			banner: "/* ==========================================================\n" +
					" * <%= pkg.name %> v<%= pkg.version %>\n" +
					" * Author: <%= cmp.author %>\n" +
					" * Description: <%= cmp.description %>\n" +
					" * ========================================================== */\n",
			version: "FileManager.VERSION = '<%= pkg.version %>';"
		},
		lint: {
			files: [
				'tests/unit/*',
				'src/queue.js',
				'src/url.js',
				'src/actions.js',
				'src/events.js',
				'src/view.js',
				'src/view/*'
			],
		},
		qunit: {
			all: ['tests/index.html']
		},
		concat: {
			dist: {
				src: [
					'<banner>',
					'src/intro.js',
					'<banner:meta.version>',
					'src/url.js',
					'src/queue.js',
					'src/view.js',
					'src/view/*',
					'src/actions.js',
					'src/events.js',
					'src/outro.js'
				],
				dest: 'build/li3_filemanager.js'
			}
		},
		min: {
			dist: {
				src: ['<banner>', 'build/li3_filemanager.js'],
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