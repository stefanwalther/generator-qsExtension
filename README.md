# YeoMan Generator for Qlik Sense Extensions 

Simple YeoMan Generator for Qlik Sense Extensions.

## Usage
This little tool is based on YEOMAN (http://yeoman.io/) and allows you to create a starter-kit for Qlik Sense Extensions in less than five minutes.

## Installation

Install nodeJs (http://nodejs.org/)
Open the Node.js command prompt and install yo
 

```
npm install -g yo
```

Download the `qenerator-qsExtension` from GitHub

```
npm install -g generator-qsextension
```

## Documentation

### Init

Initialize the generator by entering the following command into your command prompt:


Make a new directory, and cd into it:
```
md c:\yo\myFirstExtension
cd c:\yo\myFirstExtension
```

Run yo generator-qsextension
```
yo qsextension
```

Follow the instructions ...

### Generated Folder Structure

**build**  
Destination of compressed automated builds (.zip-files).

**dist**  
Destination of automated builds

**grunt**  
Source of the Grunt-based build system.

**src**  
Source files.

**src/lib**  
Suggested folder structure for assets included in the extension.



# Features

* Generating a default structure of a working Qlik Sense Extension
* Built-In deployment system based on Grunt
    * Extension will be deployed to the local extension folder
    * A zip file will be automatically generated

## Generated Grunt Deployment
The Grunt based deployment offers two different modes, `dev` and `release`:

### dev Task

* Preparations
	* Delete existing content in the `dist` directory
	* All directories and files are copied to the `dist` directory
	* Variables are replaced in all files or the `src` folder, first by using gruntReplacements.json, then gruntReplacments_dev.json
* Cleanup Tasks
	* Typical development files will be deleted (*.tmp, *.tmpl, *.log, *.bak, *.less)
	* Empty folders are deleted
* Deployment to Qlik Sense Desktop
	* All modified files of the dist folder will be copied to the local Qlik Sense Extension directory (first the entire content of the target folder will be deleted)
* Package
	* Finally the content of the extension will be zipped to a fill called %ExtensionName%_dev.zip and stored to the `build` directory. 

### release Task

*Not released, yet.*

## Author
### Stefan Walther 
* http://www.qlikblog.at
* http://github.com/stefanwalther
* http://twitter.com/waltherstefan

## License
Copyright (c) 2014 Stefan Walther, contributors.
Release under the MIT license.
