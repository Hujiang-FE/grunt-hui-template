/*
 * grunt-hui-template
 *
 * Copyright (c) 2015 Daniel He
 * Licensed under the MIT license.
 */

var path = require('path');
var template = require('hui-template');
var beautify = require('js-beautify').js_beautify;
var chalk = require('chalk');

module.exports = function(grunt) {
	'use strict';

	var funcTmpl = 'HUI.template.compile("#{it.name}", function(it) {' +
		'#{!it.func}' +
		'});',

		tmpl4tmpljs = '#{!it.banner}' +
		funcTmpl +
		'#{!it.footer}';

	grunt.registerMultiTask('hui-template', 'Generate template js files by hui-template engine.', function(target) {

		var self = this,
			options = this.options({
				banner: '/* this js depand on hui-template-compile.js*/',
				footer: '/* end tag*/',
				beautify: true,
				concat: false,
				dest: ''
			});

		var banner = grunt.template.process(options.banner);
		var footer = grunt.template.process(options.footer);

		this.files.forEach(function(f) {

			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			if (src.length === 0) {
				grunt.log.warn('Destination (' + f.dest + ') not written because src files were empty.');
				return;
			}

			src.forEach(function(file) {
				var tmplStr = grunt.file.read(file),
					output = template.script(tmplStr),
					basename = path.basename(file),
					destFile = basename + '.js';


				output = template.render(tmpl4tmpljs, {
					name: basename,
					footer: options.footer,
					banner: options.banner,
					func: output
				});

				if (options.beautify) {
					output = beautify(output, {
						indent_size: 2
					})
				}
				destFile = path.join(f.dest, destFile);

				grunt.file.write(destFile, output);
				grunt.log.writeln('Template File ' + chalk.cyan(destFile) + ' created.');
			});

			grunt.log.writeln(chalk.green('All Template of ' + self.nameArgs + ' JS File created.'));

		});
	});
};