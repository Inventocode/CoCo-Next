"use strict";

import * as r from "./2643";
var i = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
export { i as PLACEHOLDERS };
var a = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
export { a as PLACEHOLDERS_ALIAS };
for (var s = 0, o = i; s < o.length; s++) {
  var l = o[s];
  var u = r.ALIAS_KEYS[l];
  if (null != u && u.length) {
    a[l] = u;
  }
}
var c = {};
export { c as PLACEHOLDERS_FLIPPED_ALIAS };
Object.keys(a).forEach(function (e) {
  a[e].forEach(function (t) {
    if (!Object.hasOwnProperty.call(c, t)) {
      c[t] = [];
    }
    c[t].push(e);
  });
});