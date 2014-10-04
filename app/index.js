'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore');


var qsExtension = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require("../package.json");

    this.on('end', function () {
      if (!this.options['skip-install']) {
          var npmdir = process.cwd() + '/grunt';
          process.chdir(npmdir);

          this.installDependencies({
              bower: false,
              npm: true
          });
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    //this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using qsExtension generator.'));

      var prompts = [
          {
              name: 'extensionName',
              message: 'What\'s the name of the extension?'
          },
          {
              name: 'extensionNamespace',
              message: 'What\'s the namespace for your extension?'
          },
          {
              name: 'extensionDescription',
              message: 'Describe your extension:'
          },
          {
              name: 'authorName',
              message: 'What\'s your name?'
          }
      ];

      this.prompt(prompts, function (props) {
          this.extensionName = props.extensionName;
          this.extensionNamespace = _.isEmpty(props.extensionNamespace) ? '' : props.extensionNamespace + '-';
          this.extensionDescription = props.extensionDescription;
          this.authorName = props.authorName;
          this.publishingYear = new Date().getFullYear();

          done();
      }.bind(this));
  },

  root: function () {
    
    // root
    this.copy('_bower.json', 'bower.json');
    this.copy('_gitattributes.txt', '.gitattributes');
    this.copy('_gitignore.txt', '.gitignore');
    this.copy('_editorconfig', 'editorconfig');
    this.copy('_config.yml', 'config.yml');


    // Grunt
    this.mkdir('grunt');
        this.template('_gruntfile.js', 'grunt/gruntfile.js');
        this.template('_package.json', 'grunt/package.json');
        this.template('_gruntReplacements.json', 'grunt/gruntReplacements.json');
        this.template('_gruntReplacements_build.json', 'grunt/gruntReplacements_build.json');
        this.template('_gruntReplacements_release.json', 'grunt/gruntReplacements_release.json');


      // sample dir
    this.mkdir('sample');

    // src dir
    this.mkdir('src');
    this.template('_extension.js', 'src/' + this.extensionNamespace + this.extensionName.toLowerCase() + '.js');
      this.template('_extension.qext', 'src/' + this.extensionNamespace + this.extensionName.toLowerCase() + '.qext');
      this.template('_extension-properties.js', 'src/' + this.extensionName.toLowerCase() + '-properties.js');
      this.template('_readme.md', 'src/README.md');
      this.template('_license.md', 'src/LICENSE.md');
      this.template('_ChangeLog.md', 'src/CHANGES.md');

    // scr/lib
    this.mkdir('src/lib');
    this.mkdir('src/lib/js');
    this.mkdir('src/lib/external');
    this.mkdir('src/lib/css');
    this.template('_style.css', 'src/lib/css/style.css');
    this.mkdir('src/lib/images');
    this.mkdir('src/lib/fonts');
    this.mkdir('src/lib/icons');
    this.mkdir('src/lib/data');

    // Build Dir
    this.mkdir('build');

    // dist Dir
    this.mkdir('dist');
  }
});

module.exports = qsExtension;