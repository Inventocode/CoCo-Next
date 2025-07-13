"use strict";

export { o as a };
import * as r from "../../../../0/index";
var i = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
function o(e) {
  var t = r.useRef(e);
  i(function () {
    t.current = e;
  });
  return r.useCallback(function () {
    return t.current.apply(void 0, arguments);
  }, []);
}