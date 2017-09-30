if (true) {
  const AmInNode = (typeof module !== 'undefined' && typeof module.exports !== 'undefined');
  const makeGC = function(){
    if (!(AmInNode)) {
      if (window) {
        if (window.CollectGarbage) {
          return window.CollectGarbage;
        }
        if (window.gc) {
          return window.gc;
        }
        if (window.opera) {
          if (window.opera.collect) {
            return window.opera.collect;
          }
        }
        if (window.QueryInterface) {
          return window.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIDOMWindowUtils).garbageCollect;
        }
	if (ProfilerAgent) {
		if (ProfilerAgent.collectGarbage) {
			return ProfilerAgent.collectGarbage;
		}
	}
      } else {
        if (global) {
          if (global.gc) {
            return global.gc;
          }
        }
      }
    }
    if (typeof require !== 'undefined') {
      try {
        const v8  = require("v8");
        v8.setFlagsFromString("--expose-gc");
      } catch (e) {
        return function() {
          return;
        };
      }
      if (global) {
        if (global.gc) {
          return global.gc;
        }
      }
    }
    return function (){
      return;
    };
  }
  if (AmInNode == true) {
    module.exports = exports = makeGC();
  } else {
    window.gc = makeGC();
  }
}
