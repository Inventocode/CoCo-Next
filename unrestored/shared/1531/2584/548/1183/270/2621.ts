"use strict";

export { i as a };
import r = require("../../../19");
function i() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  var t = e.baseClasses;
  var n = e.newClasses;
  e.Component;
  if (!n) {
    return t;
  }
  var i = r.a({}, t);
  Object.keys(n).forEach(function (e) {
    if (n[e]) {
      i[e] = "".concat(t[e], " ").concat(n[e]);
    }
  });
  return i;
}
export default i;