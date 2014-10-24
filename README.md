# dtreemap-build

Build version of [ibm-js/dtreemap](https://github.com/ibm-js/dtreemap).

## Status

No official release yet.

## Installation

_Bower_ release installation:

    $ bower install dtreemap-build

_Manual_ master installation:

    $ git clone git://github.com/ibm-js/dtreemap-build.git

Then install dependencies with bower (or manually from github if you prefer to):

	$ cd dtreemap-build
	$ bower install


## How to use

To load the minified layer you need to wrap your main `require` call with another `require`, requiring `"dtreemap-build/layer"`. Then you should continue to
refer to modules with `"dtreemap/foo"`.

For example, this:
```
require(["app/main", "dtreemap/foo"], function() {
	...
});
```
Becomes:
```
require(["dtreemap-build/layer"], function() {
	require(["app/main", "dtreemap/foo"], function() {
		...
	});
});
```

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).
