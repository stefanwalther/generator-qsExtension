# ChangeLog

## Version 0.0.20
Date: 2015-01-19
* Fixes:
  * Fixed an issue that images in Dev get corrupted during the Grunt deployment.

## Version 0.0.19
Date: 2014-11-16
* Fixes:
  * Fixed minor bugfix in extension file which caused an "Invalid Visualization"

## Version 0.0.18
Date: 2014-10-26
* Features:
  * Added `lib/js/extensionUtils.js` file to be able to add common functions to an extension
  * Improved generated `CHANGELOG.md`
  * Improved generated `README.md`
  * Added `.jshintrc` to `src` directory
* Fixes:
  * Fixed `npm install` test in `tests/00-test-grunt.js`

## Version 0.0.17
* Fixes:
    * Images were corrupted during deployment

## Version 0.0.16
* Features:
    * Added an additional Grunt task to create a ZIP-file containing only the source (without installed Node packages)

## Version 0.0.15
* Features:
    * Added support for the release Grunt task
    * Added Mocha tests for the Grunt tasks
    * Extended documentation (Readme.md)
    * All Grunt tasks (both dev and release) are fully configurable using the grunt-config.yml file
    * Documentation for the Grunt configuration (grunt/grunt-config.yml)

## Version 0.0.14
* Features:
    * Added (optional) support for Less
    
## Version 0.0.13
* Fixes:
    * Restrict package only for Win32 (#2)

## Version 0.0.12
* Features:
    * Added tests to run both the dev and release task of the generated Grunt deployments

## Version 0.0.11
* Features:
    * Added tests to install the npm packages of the generated Grunt deployments

## Version 0.0.9
* Fixes:
    * Extension Name with whitespaces
    * Fixed script file
* Features:
    * Separated Grunt tasks to a separate folder
    * Documented grunt tasks for dev
    * Improved tests

## Version 0.0.7
* Determine folder for local deployment automatically (%USERPROFILE%\My Documents\Qlik\Sense\Extensions)

## Version 0.0.6 (2014-10-05)
* Prepared for NPM
* Added basic documentation in README.md
