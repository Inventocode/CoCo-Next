var r;
!function () {
  "use strict";

  var n = {}.hasOwnProperty;
  function i() {
    for (var e = [], t = 0; t < arguments.length; t++) {
      var r = arguments[t];
      if (r) {
        var o = typeof r;
        if ("string" === o || "number" === o) {
          e.push(r);
        } else if (Array.isArray(r) && r.length) {
          var a = i.apply(null, r);
          if (a) {
            e.push(a);
          }
        } else if ("object" === o) {
          for (var s in r) if (n.call(r, s) && r[s]) {
            e.push(s);
          }
        }
      }
    }
    return e.join(" ");
  }
  if (e.exports) {
    i.default = i;
    module.exports = i;
  } else {
    if (!(void 0 === (r = function () {
      return i;
    }.apply(t, [])))) {
      module.exports = r;
    }
  }
}();