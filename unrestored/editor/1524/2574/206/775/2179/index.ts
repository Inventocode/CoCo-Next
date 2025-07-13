"use strict";

import * as r from "../../../1035/1356/569";
import * as i from "./2182";
import * as o from "./2185/index";
import * as a from "./1107";
import * as s from "./963";
var c = require("./1321").Scope;
var u = require("./2189").version;
module.exports = {
  version: u,
  Reference: a,
  Variable: s,
  Scope: c,
  ScopeManager: i,
  analyze: function (e, t) {
    var n = function e(t, n) {
      function r(e) {
        return "object" === typeof e && e instanceof Object && !(e instanceof Array) && !(e instanceof RegExp);
      }
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var o = n[i];
        if (r(o)) {
          if (r(t[i])) {
            e(t[i], o);
          } else {
            t[i] = e({}, o);
          }
        } else {
          t[i] = o;
        }
      }
      return t;
    }({
      optimistic: !1,
      directive: !1,
      nodejsScope: !1,
      impliedStrict: !1,
      sourceType: "script",
      ecmaVersion: 5,
      childVisitorKeys: null,
      fallback: "iteration"
    }, t);
    var a = new i(n);
    new o(n, a).visit(e);
    r(null === a.__currentScope, "currentScope should be null.");
    return a;
  }
};