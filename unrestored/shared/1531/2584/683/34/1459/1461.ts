/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1461
 */

"use strict";

exports.a = function (e) {
  return new this(function (t, n) {
    if (!e || "undefined" === typeof e.length) {
      return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
    }
    var r = Array.prototype.slice.call(e);
    if (0 === r.length) {
      return t([]);
    }
    var i = r.length;
    function o(e, n) {
      if (n && ("object" === typeof n || "function" === typeof n)) {
        var a = n.then;
        if ("function" === typeof a) {
          return void a.call(n, function (t) {
            o(e, t);
          }, function (n) {
            r[e] = {
              status: "rejected",
              reason: n
            };
            if (0 === --i) {
              t(r);
            }
          });
        }
      }
      r[e] = {
        status: "fulfilled",
        value: n
      };
      if (0 === --i) {
        t(r);
      }
    }
    for (var a = 0; a < r.length; a++) {
      o(a, r[a]);
    }
  });
};