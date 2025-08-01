"use strict";

function r(e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166;
  function r() {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    var a = this;
    var s = function () {
      e.apply(a, i);
    };
    clearTimeout(t);
    t = setTimeout(s, n);
  }
  r.clear = function () {
    clearTimeout(t);
  };
  return r;
}
export { r as a };
export default r;