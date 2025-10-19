/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：280
 */

"use strict";

export { o as a };
export { a as b };
import r = require("react");
require("../50/index");
var i = r.createContext(null);
var o = function (e) {
  var t = e.utils;
  var n = e.children;
  var o = e.locale;
  var a = e.libInstance;
  var s = r.useMemo(function () {
    return new t({
      locale: o,
      instance: a
    });
  }, [t, a, o]);
  return r.createElement(i.Provider, {
    value: s,
    children: n
  });
};
function a() {
  var e = r.useContext(i);
  (function (e) {
    if (!e) {
      throw new Error("Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.");
    }
  })(e);
  return e;
}
export default o;