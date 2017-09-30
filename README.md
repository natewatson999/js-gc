# js-gc
An API for Javascript to trigger the Garbage Collector

##Background
js-gc is written for when there is memory-intensive code which needs to run on multiple platforms. In theory, the environment's garbage collector should run automatically. In practice, this isn't always true. Thankfully, most environments also provide a means to manually run the garbage collector. Sadly, there is not a standardized interface for this, so multi-platform support is convoluted. This API plans to make that problem less terrible.

## Installation
```
npm install js-gc
```

## Usage
### In Node.js
```
var gc=require("js-gc");
/*A massive memory intense task*/
gc();
```

### In browser code
```
<script src="link/to/js-gc/index.js"></script>
<script>
/*A massive memory intense task*/
window.gc();
</script>
```

## Supported Platforms
js-gc doesn't work everywhere. It works on these platforms so far:
* Opera 7+
* IE 5+, with ActiveX controls enabled. "Edge may or may not be compatible."
* cases where XPCOM is available "certain situations with Firefox and compatibles". By default, these are unsupported.
* Chrome, but only when -js-flags="--expose-gc" is used.
* Node.js, but only the V8 based versions, and only if global.gc is enabled.

If an unsupported environment is encountered, the gc function will be a function that doesn't do anything.
