"use strict";

import * as r from "../../../../../3190/494";
export { default as Hub } from "./2980";
export { default as NodePath } from "./2640/index";
export { default as Scope } from "./2742/index";
import * as i from "./2875";
import * as a from "./2979/index";
export { a as visitors };
import * as s from "../2624/index";
import * as o from "./2655";
import * as l from "./2640/index";
import * as u from "./2742/index";
import * as c from "./2980";
var p = s.VISITOR_KEYS;
var f = s.removeProperties;
var d = s.traverseFast;
function h(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = arguments.length > 2 ? arguments[2] : void 0;
  var r = arguments.length > 3 ? arguments[3] : void 0;
  var i = arguments.length > 4 ? arguments[4] : void 0;
  if (e) {
    if (!t.noScope && !n && "Program" !== e.type && "File" !== e.type) {
      throw new Error("You must pass a scope and parentPath unless traversing a Program/File. " + "Instead of that you tried to traverse a ".concat(e.type, " node without ") + "passing scope and parentPath.");
    }
    if (p[e.type]) {
      a.explode(t);
      h.node(e, t, n, r, i);
    }
  }
}
var y = h;
function m(e, t) {
  if (e.node.type === t.type) {
    t.has = !0;
    e.stop();
  }
}
export default y;
h.visitors = a;
h.verify = a.verify;
h.explode = a.explode;
h.cheap = function (e, t) {
  return d(e, t);
};
h.node = function (e, t, n, a, s, o) {
  var l = p[e.type];
  if (l) {
    var u;
    var c = new i.default(n, t, a, s);
    var f = r(l);
    try {
      for (f.s(); !(u = f.n()).done;) {
        var d = u.value;
        if ((!o || !o[d]) && c.visit(e, d)) {
          return;
        }
      }
    } catch (h) {
      f.e(h);
    } finally {
      f.f();
    }
  }
};
h.clearNode = function (e, t) {
  f(e, t);
  o.path.delete(e);
};
h.removeProperties = function (e, t) {
  d(e, h.clearNode, t);
  return e;
};
h.hasType = function (e, t, n) {
  if (null != n && n.includes(e.type)) {
    return !1;
  }
  if (e.type === t) {
    return !0;
  }
  var r = {
    has: !1,
    type: t
  };
  h(e, {
    noScope: !0,
    denylist: n,
    enter: m
  }, null, r);
  return r.has;
};
h.cache = o;