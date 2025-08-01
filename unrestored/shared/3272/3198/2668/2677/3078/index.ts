"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function e(t, n) {
  var l = new WeakMap();
  var u = new WeakMap();
  var c = n || (0, r.validate)(null);
  return Object.assign(function (n) {
    for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++) {
      u[p - 1] = arguments[p];
    }
    if ("string" === typeof n) {
      if (u.length > 1) {
        throw new Error("Unexpected extra params.");
      }
      return o((0, i.default)(t, n, (0, r.merge)(c, (0, r.validate)(u[0]))));
    }
    if (Array.isArray(n)) {
      var f = l.get(n);
      if (!f) {
        f = (0, a.default)(t, n, c);
        l.set(n, f);
      }
      return o(f(u));
    }
    if ("object" === typeof n && n) {
      if (u.length > 0) {
        throw new Error("Unexpected extra params.");
      }
      return e(t, (0, r.merge)(c, (0, r.validate)(n)));
    }
    throw new Error("Unexpected template param ".concat(typeof n));
  }, {
    ast: function (e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) {
        o[l - 1] = arguments[l];
      }
      if ("string" === typeof e) {
        if (o.length > 1) {
          throw new Error("Unexpected extra params.");
        }
        return (0, i.default)(t, e, (0, r.merge)((0, r.merge)(c, (0, r.validate)(o[0])), s))();
      }
      if (Array.isArray(e)) {
        var p = u.get(e);
        if (!p) {
          p = (0, a.default)(t, e, (0, r.merge)(c, s));
          u.set(e, p);
        }
        return p(o)();
      }
      throw new Error("Unexpected template param ".concat(typeof e));
    }
  });
};
var r = require("./2713");
var i = require("./3079/index");
var a = require("./3080");
var s = (0, r.validate)({
  placeholderPattern: !1
});
function o(e) {
  var t = "";
  try {
    throw new Error();
  } catch (n) {
    if (n.stack) {
      t = n.stack.split("\n").slice(3).join("\n");
    }
  }
  return function (n) {
    try {
      return e(n);
    } catch (r) {
      throw r.stack += "\n    =============\n".concat(t), r;
    }
  };
}