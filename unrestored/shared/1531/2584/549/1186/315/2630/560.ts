/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：560
 */

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