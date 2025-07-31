"use strict";

var r = require("../../../494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t;
  var n = "";
  var o = r(e += "");
  try {
    for (o.s(); !(t = o.n()).done;) {
      var s = t.value;
      n += (0, i.isIdentifierChar)(s.codePointAt(0)) ? s : "-";
    }
  } catch (u) {
    o.e(u);
  } finally {
    o.f();
  }
  n = (n = n.replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, function (e, t) {
    return t ? t.toUpperCase() : "";
  });
  if (!(0, a.default)(n)) {
    n = "_".concat(n);
  }
  return n || "_";
};
var a = require("../2671");
var i = require("./2715/index");