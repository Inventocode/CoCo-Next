"use strict";

export { o as a };
import r = require("react");
var i = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
function o(e) {
  var t = r.useRef(e);
  i(function () {
    t.current = e;
  });
  return r.useCallback(function () {
    return t.current.apply(undefined, arguments);
  }, []);
}
export default o;