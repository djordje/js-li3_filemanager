# JavaScript frontend for [li3_filemanager](https://github.com/djordje/li3_filemanager)

___

## Instalation of development dependencies, runing tests and building script:

You'll need [nodejs](http://nodejs.org/) installed on your machine to run tests and build this script.

First clone repo, install node modules and fetch javascript tests dependencies with `bower`:

	git clone git://github.com/djordje/js-li3_filemanager.git
	cd js-li3_filemanager
	npm install && node_modules/.bin/bower install

So you can run grunt tests from repo root:

	node_modules/.bin/grunt test

You can build script via grunt build task:

	node_modules/.bin/grunt build

And this will output concatonated and minifyed versions of script in `build` directory.


Best wawy to build script is default grunt task:

	node_modules/.bin/grunt

This will run tests first and build scripts if all tests succeed!

There is one more task, `watch` which will watch for changes in `src` directory and run `test` task
every time there is some change!

	node_modules/.bin/grunt watch


## Script production dependencies:

This script require you to have loaded on your page following scripts:

* [jQuery](http://jquery.com/) (tested with 1.8)
* [mustache](https://github.com/janl/mustache.js)
* [twitter bootstrap](https://github.com/twitter/bootstrap) (tested with bootstrap.js v2.2.2)

## Last build status:

[![Build Status](https://travis-ci.org/djordje/js-li3_filemanager.png?branch=master)](https://travis-ci.org/djordje/js-li3_filemanager)