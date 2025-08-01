"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;
var r = require("./2651");
var i = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
exports.PLACEHOLDERS = i;
var a = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
exports.PLACEHOLDERS_ALIAS = a;
for (var s = 0, o = i; s < o.length; s++) {
  var l = o[s];
  var u = r.ALIAS_KEYS[l];
  if (null != u && u.length) {
    a[l] = u;
  }
}
var c = {};
exports.PLACEHOLDERS_FLIPPED_ALIAS = c;
Object.keys(a).forEach(function (e) {
  a[e].forEach(function (t) {
    if (!Object.hasOwnProperty.call(c, t)) {
      c[t] = [];
    }
    c[t].push(e);
  });
});