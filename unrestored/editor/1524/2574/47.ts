"use strict";

export { i as a };
var r = require("./10/768");
function i(e) {
  if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = Object(r.a)(e))) {
      var t = 0;
      var n = function () {};
      return {
        s: n,
        n: function () {
          return t >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[t++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: n
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var i;
  var o;
  var a = !0;
  var s = !1;
  return {
    s: function () {
      i = e[Symbol.iterator]();
    },
    n: function () {
      var e = i.next();
      a = e.done;
      return e;
    },
    e: function (e) {
      s = !0;
      o = e;
    },
    f: function () {
      try {
        if (!(a || null == i.return)) {
          i.return();
        }
      } finally {
        if (s) {
          throw o;
        }
      }
    }
  };
}
export default i;