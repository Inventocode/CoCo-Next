"use strict";

var r = require("../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t;
  var n = "";
  var s = r(e += "");
  try {
    for (s.s(); !(t = s.n()).done;) {
      var o = t.value;
      n += (0, a.isIdentifierChar)(o.codePointAt(0)) ? o : "-";
    }
  } catch (l) {
    s.e(l);
  } finally {
    s.f();
  }
  n = (n = n.replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, function (e, t) {
    return t ? t.toUpperCase() : "";
  });
  if (!(0, i.default)(n)) {
    n = "_".concat(n);
  }
  return n || "_";
};
var i = require("./2674/index");
var a = require("./2674/2675/index");