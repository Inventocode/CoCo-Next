"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;
var r = require("./2655");
var a = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
exports.PLACEHOLDERS = a;
var i = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
exports.PLACEHOLDERS_ALIAS = i;
for (var o = 0, s = a; o < s.length; o++) {
  var u = s[o];
  var l = r.ALIAS_KEYS[u];
  if (null != l && l.length) {
    i[u] = l;
  }
}
var p = {};
exports.PLACEHOLDERS_FLIPPED_ALIAS = p;
Object.keys(i).forEach(function (e) {
  i[e].forEach(function (t) {
    if (!Object.hasOwnProperty.call(p, t)) {
      p[t] = [];
    }
    p[t].push(e);
  });
});