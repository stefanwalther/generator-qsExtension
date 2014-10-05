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
md c:\yo\myFirstExtension && cd $_
```

Run yo generator-qsextension
```
yo qsextension
```

Follow the instructions ...

### Features

* Generating a default structure of a working Qlik Sense Extension
* Built-In deployment system based on Grunt
    * Extension will be deployed to the local extension folder
    * A zip file will be automatically generated

## Author
Stefan Walther (http://www.qlikblog.at)

## License
MIT
