if (true) {
  var AmInNode = false;
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    AmInNode = true;
  }
  var makeGC = function(){
    if (AmInNode==false) {
      if (window) {
        if (window.CollectGarbage) {
          return window.CollectGarbage;
        }
        if (window.opera) {
          if (window.opera.collect) {
            return window.opera.collect;
          }
        }
        if (window.QueryInterface) {
          window.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIDOMWindowUtils).garbageCollect();
        }
      } else {
        if (global) {
          if (global.gc) {
            return global.gc;
          }
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
