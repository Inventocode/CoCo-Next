"use strict";

import * as r from "../../../../3190/624/index";
import * as i from "../../../../3190/494";
import * as a from "../../../../../1524/2574/1/index";
var s = a.mark(h);
var o = a.mark(y);
function l() {
  var e = require("../../2637/index");
  l = function () {
    return e;
  };
  return e;
}
export { h as run };
import * as u from "./3120";
import * as c from "./3121";
import * as p from "../../3131/2805";
import * as f from "./3122/index";
import * as d from "./3127/index";
function h(e, t, n) {
  var r;
  var i;
  var o;
  var l;
  var u;
  var c;
  var h;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          return a.delegateYield((0, f.default)(e.passes, (0, p.default)(e), t, n), "t0", 1);
        case 1:
          r = a.t0;
          i = r.opts;
          a.prev = 3;
          return a.delegateYield(y(r, e.passes), "t1", 5);
        case 5:
          a.next = 12;
          break;
        case 7:
          throw a.prev = 7, a.t2 = a.catch(3), a.t2.message = "".concat(null != (o = i.filename) ? o : "unknown", ": ").concat(a.t2.message), a.t2.code || (a.t2.code = "BABEL_TRANSFORM_ERROR"), a.t2;
        case 12:
          a.prev = 12;
          if (!1 !== i.code) {
            c = (0, d.default)(e.passes, r);
            l = c.outputCode;
            u = c.outputMap;
          }
          a.next = 21;
          break;
        case 16:
          throw a.prev = 16, a.t3 = a.catch(12), a.t3.message = "".concat(null != (h = i.filename) ? h : "unknown", ": ").concat(a.t3.message), a.t3.code || (a.t3.code = "BABEL_GENERATE_ERROR"), a.t3;
        case 21:
          return a.abrupt("return", {
            metadata: r.metadata,
            options: i,
            ast: !0 === i.ast ? r.ast : null,
            code: void 0 === l ? null : l,
            map: void 0 === u ? null : u,
            sourceType: r.ast.program.sourceType
          });
        case 22:
        case "end":
          return a.stop();
      }
    }
  }, s, null, [[3, 7], [12, 16]]);
}
function y(e, t) {
  var n;
  var s;
  var p;
  var f;
  var d;
  var h;
  var y;
  var v;
  var g;
  var T;
  var b;
  var S;
  var E;
  var x;
  var P;
  var A;
  var k;
  var w;
  var O;
  var C;
  var I;
  var N;
  var _;
  var D;
  var j;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          n = i(t);
          a.prev = 1;
          n.s();
        case 3:
          if ((s = n.n()).done) {
            a.next = 38;
            break;
          }
          p = s.value;
          f = [];
          d = [];
          h = [];
          y = i(p.concat([(0, c.default)()]));
          try {
            for (y.s(); !(v = y.n()).done;) {
              g = v.value;
              T = new u.default(e, g.key, g.options);
              f.push([g, T]);
              d.push(T);
              h.push(g.visitor);
            }
          } catch (o) {
            y.e(o);
          } finally {
            y.f();
          }
          b = 0;
          S = f;
        case 11:
          if (!(b < S.length)) {
            a.next = 22;
            break;
          }
          if (E = r(S[b], 2), x = E[0], P = E[1], !(A = x.pre)) {
            a.next = 19;
            break;
          }
          k = A.call(P, e);
          return a.delegateYield([], "t0", 17);
        case 17:
          if (!m(k)) {
            a.next = 19;
            break;
          }
          throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        case 19:
          b++;
          a.next = 11;
          break;
        case 22:
          w = l().default.visitors.merge(h, d, e.opts.wrapPluginVisitorMethod);
          (0, l().default)(e.ast, w, e.scope);
          O = 0;
          C = f;
        case 25:
          if (!(O < C.length)) {
            a.next = 36;
            break;
          }
          if (I = r(C[O], 2), N = I[0], _ = I[1], !(D = N.post)) {
            a.next = 33;
            break;
          }
          j = D.call(_, e);
          return a.delegateYield([], "t1", 31);
        case 31:
          if (!m(j)) {
            a.next = 33;
            break;
          }
          throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        case 33:
          O++;
          a.next = 25;
          break;
        case 36:
          a.next = 3;
          break;
        case 38:
          a.next = 43;
          break;
        case 40:
          a.prev = 40;
          a.t2 = a.catch(1);
          n.e(a.t2);
        case 43:
          a.prev = 43;
          n.f();
          return a.finish(43);
        case 46:
        case "end":
          return a.stop();
      }
    }
  }, o, null, [[1, 40, 43, 46]]);
}
function m(e) {
  return !!e && ("object" === typeof e || "function" === typeof e) && !!e.then && "function" === typeof e.then;
}