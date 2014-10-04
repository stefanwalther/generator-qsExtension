# yo qvext  

## Todos & Ideas:

### Bugfixes
* Namespace does not work
* Remove white-spaces caused by vsNet-Regions  
(replace it with WebStorm regions: http://blog.jetbrains.com/webide/2012/03/new-in-4-0-custom-code-folding-regions/)

### Trivial Additions/Changes
* Add version
* Add MIT license if appropriate
* Add property to ask if VisualStudio-Regions should be added
* Rename `dist` to `dir`
	* change also in .gitignore

### IMPORTANT: 
* Create a basic Visual Studio template (including the post-build event)
* Test if whitespace can be used for the name, otherwise remove it
* Add automated tests

### General
* Check how bower can be used the best way
* Add parameters to check in to a GitHub repository automatically (should also be added to gruntfile.js)

### Script.js template
* Pre-generate some comments
* Generate some console-logging (could also be placed to an optional file??)
* Create options to work with Angular best-practices (controller, factory, etc.)

### gruntfile.js
* Create a zip-file
* Add a possibility to distribute at the same time also to another path (server)
* Automatically upload the extension to the server using QlikView.Next APIs
* Create some code documentation
* Work on a unit-testing concept for Extensions
* Delete the 'dist' folder immediately after the build (??)
* Create some basic log-files (?)
* Add parameters for 'debug', 'release'

#Paths (sample)
* **sample/**

# Paths (lib)

* **src/lib/css/** - All .css files used by the current extensions. If you are using **SASS** or **LESS**, these files should also be saved in this directory.
* **src/data/** - .json-files, and other resources needed for loading content
* **src/lib/external/** - external libraries like D3, etc., not only including .js-files but also related content like .css-files, fonts, etc., for every external library a sub-directory should be created
* **src/lib/icons/** - icons used in the application
* **src/lib/images/** - All kind of images (.png/.jpg/.gif)
* **src/lib/svg/** - SVG files
* **src/lib/js/** - JavaScript files used (not external ones)
* **scr/lib/tmpl/** - (angular)-template(s)


