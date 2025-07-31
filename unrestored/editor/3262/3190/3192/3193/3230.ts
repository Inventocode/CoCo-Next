"use strict";

var r = require("../../494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if (!e || !t) {
    return e;
  }
  var n;
  var o = r(a.INHERIT_KEYS.optional);
  try {
    for (o.s(); !(n = o.n()).done;) {
      var s = n.value;
      if (null == e[s]) {
        e[s] = t[s];
      }
    }
  } catch (y) {
    o.e(y);
  } finally {
    o.f();
  }
  for (var u = 0, l = Object.keys(t); u < l.length; u++) {
    var p = l[u];
    if ("_" === p[0] && "__clone" !== p) {
      e[p] = t[p];
    }
  }
  var f;
  var d = r(a.INHERIT_KEYS.force);
  try {
    for (d.s(); !(f = d.n()).done;) {
      var c = f.value;
      e[c] = t[c];
    }
  } catch (y) {
    d.e(y);
  } finally {
    d.f();
  }
  (0, i.default)(e, t);
  return e;
};
var a = require("./2653");
var i = require("./2838");