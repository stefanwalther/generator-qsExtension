# ChangeLog

# Version 0.0.35
Date: 2015-06-01

**Improvements:**
* Switched over to a changelog.yml instead of a changelog.md

## Version 0.0.32
Date: 2015-04-02

**Improvements:**
* Making the uglify release task more generic to work automatically with all *.js files (but excluding *.min.js files)

## Version 0.0.31
Date: 2015-03-30

**Fixes:**
* Finally fixing the bug to fetch the local extension directory. hopefully ... ;-)

## Version 0.0.30
Date: 2015-03-18

**Fixes:**
* Extension path in grunt-config.yml was not determined correctly during generation of the project.

## Version 0.0.29
Date: 2015-03-08

**Enhancements:**
* There is now a default and an advanced mode (first question in the wizard).
* In the advanced mode the user can select a license type, LICENSE.md will be generated accordingly.
* By using the option --grunt on the grunt based deployment system will be updated.
* Update to all dependencies and used modules
* A default image is now added to the extension (using the correct dimensions).
* Different destinations for Grunt builds (```dist```for release builds and ```dist_dev``` for dev builds)

**Fixes:**
* Issue with some grunt tasks being ignored because of wrong platform detection.

## Version 0.0.28
Date: 2015-03-01

**Enhancements:**
* Finally succeeded to get travis builds to work (with a lot of minor Fixes and corrections)

## Version 0.0.27
Date: 2015-03-01

**Enhancements:**
* Updated all grunt packages
* Different jshint definitions for dev and release
* jshint is disabled by default for dev, enabled for release

## Version 0.0.26
Date: 2015-02-18

**Fixes:**

* Several minor bug fixes

**Enhancements:**

* New grunt task based on grunt-contrib-jshint
* Optimized handling of grunt tasks in general
* Improved existing tests
* Improved documentation of grunt-config.yml
* The extensions' version can now be defined in grunt-config.yml (general.Version) and will be re-used in several places


## Version 0.0.25
Date: 2015-02-14

**Enhancements:**
* Default preview image for the visualization extensions
* Added some further defaults for the README.md

## Version 0.0.24
Date: 2015-02-11

* Minor Enhancements

## Version 0.0.23
Date: 2015-01-19

**Fixes:**

* Included namespace for the Grunt deployment to the local desktop.
* Extension path sometimes not resolved correctly (folder %USERPROFILE% created instead).
* Qualified name not necessary for intialproperties.js and properties.js

**Enhancements:**

* Added parameters $element and layout to the resize function (main.js)

## Version 0.0.20
Date: 2015-01-19

**Fixes:**

* Fixed an issue that images in Dev get corrupted during the Grunt deployment.

## Version 0.0.19
Date: 2014-11-16

**Fixes:**

* Fixed minor bugfix in extension file which caused an "Invalid Visualization"

## Version 0.0.18
Date: 2014-10-26

**Enhancements:**

* Added `lib/js/extensionUtils.js` file to be able to add common functions to an extension
* Improved generated `CHANGELOG.md`
* Improved generated `README.md`
* Added `.jshintrc` to `src` directory

**Fixes:**
  * Fixed `npm install` test in `tests/00-test-grunt.js`

## Version 0.0.17

**Fixes:**

* Images were corrupted during deployment

## Version 0.0.16

**Enhancements:**

* Added an additional Grunt task to create a ZIP-file containing only the source (without installed Node packages)

## Version 0.0.15

**Enhancements:**

* Added support for the release Grunt task
* Added Mocha tests for the Grunt tasks
* Extended documentation (Readme.md)
* All Grunt tasks (both dev and release) are fully configurable using the grunt-config.yml file
* Documentation for the Grunt configuration (grunt/grunt-config.yml)

## Version 0.0.14

**Enhancements:**

* Added (optional) support for Less
    
## Version 0.0.13

**Fixes:**

* Restrict package only for Win32 (#2)

## Version 0.0.12

**Enhancements:**

* Added tests to run both the dev and release task of the generated Grunt deployments

## Version 0.0.11

**Enhancements:**

* Added tests to install the npm packages of the generated Grunt deployments

## Version 0.0.9

**Fixes:**

* Extension Name with whitespaces
* Fixed script file

**Enhancements:**

* Separated Grunt tasks to a separate folder
* Documented grunt tasks for dev
* Improved tests

## Version 0.0.7

* Determine folder for local deployment automatically (%USERPROFILE%\My Documents\Qlik\Sense\Extensions)

## Version 0.0.6
Date: 2014-10-05

* Prepared for NPM
* Added basic documentation in README.md
