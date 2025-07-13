"use strict";

import * as r from "./2645";
var a = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
export { a as PLACEHOLDERS };
var i = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
export { i as PLACEHOLDERS_ALIAS };
for (var o = 0, s = a; o < s.length; o++) {
  var u = s[o];
  var l = r.ALIAS_KEYS[u];
  if (null != l && l.length) {
    i[u] = l;
  }
}
var p = {};
export { p as PLACEHOLDERS_FLIPPED_ALIAS };
Object.keys(i).forEach(function (e) {
  i[e].forEach(function (t) {
    if (!Object.hasOwnProperty.call(p, t)) {
      p[t] = [];
    }
    p[t].push(e);
  });
});