"use strict";

export default (function (e, t, n) {
  var o = function (e, t, n) {
    var r;
    var a;
    var o;
    var l = "";
    do {
      var u = s(t, l += "$");
      r = u.names;
      a = new Set(r);
      o = (0, i.default)(e, e.code(u.code), {
        parser: n.parser,
        placeholderWhitelist: new Set(u.names.concat(n.placeholderWhitelist ? Array.from(n.placeholderWhitelist) : [])),
        placeholderPattern: n.placeholderPattern,
        preserveComments: n.preserveComments,
        syntacticPlaceholders: n.syntacticPlaceholders
      });
    } while (o.placeholders.some(function (e) {
      return e.isDuplicate && a.has(e.name);
    }));
    return {
      metadata: o,
      names: r
    };
  }(e, t, n);
  var l = o.metadata;
  var u = o.names;
  return function (t) {
    var n = {};
    t.forEach(function (e, t) {
      n[u[t]] = e;
    });
    return function (t) {
      var i = (0, r.normalizeReplacements)(t);
      if (i) {
        Object.keys(i).forEach(function (e) {
          if (Object.prototype.hasOwnProperty.call(n, e)) {
            throw new Error("Unexpected replacement overlap.");
          }
        });
      }
      return e.unwrap((0, a.default)(l, i ? Object.assign(i, n) : n));
    };
  };
});
import * as r from "../2703";
import * as i from "./2787";
import * as a from "./2788";
function s(e, t) {
  for (var n = [], r = e[0], i = 1; i < e.length; i++) {
    var a = "".concat(t).concat(i - 1);
    n.push(a);
    r += a + e[i];
  }
  return {
    names: n,
    code: r
  };
}