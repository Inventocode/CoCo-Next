"use strict";

function r(e) {
  return function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var n = t.width ? String(t.width) : e.defaultWidth;
    var r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
export { r as a };