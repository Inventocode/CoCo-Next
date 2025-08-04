"use strict";

export { o as a };
export { a as b };
var r = require("react");
require("../50/index");
var i = Object(r.createContext)(null);
var o = function (e) {
  var t = e.utils;
  var n = e.children;
  var o = e.locale;
  var a = e.libInstance;
  var s = Object(r.useMemo)(function () {
    return new t({
      locale: o,
      instance: a
    });
  }, [t, a, o]);
  return Object(r.createElement)(i.Provider, {
    value: s,
    children: n
  });
};
function a() {
  var e = Object(r.useContext)(i);
  (function (e) {
    if (!e) {
      throw new Error("Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.");
    }
  })(e);
  return e;
}
export default o;