## Todos & Ideas:

## Bugfixes
- [X] Fix version replacement in .qext file
- [X] LocalExtensionPath is not always initialized correctly
- [ ] Change the way how paths are stored in the grunt-config.yml

### Trivial Additions/Changes
- [X] Add version
- [X] Add MIT license only if appropriate

### General
- [ ] Re-write and document configuration system (!!!)
- [ ] Add parameters to check in to a GitHub repository automatically (should also be added to gruntfile.js)
- [X] Add automated tests
- [X] Add LESS support (as an option)
- [X] Add a default image (with the required image dimensions)
- [X] Sync the usage of the version defined in grunt-config.yml
- [X] Update Grunt plugins

### Documentation
- [ ] Update documentation in general to reflect recent changes
- [ ] Document yo `extension --grunt`
- [X] License file

### Script.js template
- [ ] Pre-generate some comments
- [ ] Generate some console-logging (could also be placed to an optional file??)
- [ ] Create options to work with Angular best-practices (controller, etc.)
- [ ] Offer different templates

### Angular Support
- [ ] Add some basic directives to be used in extensions (e.g. swr-simpletable)

### Build System
- [x] Create a zip-file 
- [ ] Add a possibility to distribute at the same time also to another path (server)
- [ ] Automatically upload the extension to the server using the Qlik Sense Repository API
- [ ] Create some code documentation
- [ ] Work on a unit-testing concept for Extensions
- [X] Delete the 'dist' folder immediately after the build (??)
- [ ] Create some basic log-files (?)
- [X] Add parameters for 'debug', 'release'
- [X] Add ~~jsLint~~ jsHint support
- [ ] Separate general grunt configuration from project configuration

### Tests
- [ ] Better test coverage (more scenarios)
- [ ] Add some tests to double-check if all console.log etc has been removed after the release task ...
- [ ] Add test for source build
- [ ] Add more variants


---
Version 0.2.0

Collection of ideas for a completely rebuild (based on all the learnings of the first version)

### YO Generator
- [ ] Update option for build system
- [ ] Import option for existing projects

### Configuration System

### Build System
- [ ] Separate task configuration from task execution


### Content
- [ ] ChangeLog as YML with "New", "Fixed", "Improved"


