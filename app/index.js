'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var QvextGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    //this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Qvext generator.'));

    var prompts = [{
      name: 'extensionName',
      message: 'What\'s the name of the extension?'
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
      this.extensionDescription = props.extensionDescription;
      this.authorName = props.authorName;

      this.publishingYear = new Date().getFullYear();

      done();
    }.bind(this));
  },

  root: function () {
    
    // root
    this.template('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.template('_gruntfile.js', 'gruntfile.js');
    this.copy('_gitattributes.txt', '.gitattributes');
    this.copy('_gitignore.txt', '.gitignore');
    this.template('_readme.md', 'README.md');
    this.template('_license.md', 'LICENSE.md');
    this.template('_changes.md', 'CHANGES.md');


    // src dir
    this.mkdir('src');
    this.template('_extension.js', 'src/' + this.extensionName.toLowerCase() + '.js');
      this.template('_extension.qext', 'src/' + this.extensionName.toLowerCase() + '.qext');
      this.template('_extension-properties.js', 'src/' + this.extensionName.toLowerCase() + '-properties.js');

    // scr/lib
    this.mkdir('src/lib');
    this.mkdir('src/lib/js');
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

module.exports = QvextGenerator;