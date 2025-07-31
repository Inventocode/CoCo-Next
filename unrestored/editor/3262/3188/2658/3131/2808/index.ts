"use strict";

var r = require("../../../../../1524/2574/1/index");
var i = require("../../../../3190/494");
var a = r.mark(u);
function s() {
  var e = require("../../2679/index");
  s = function () {
    return e;
  };
  return e;
}
function o() {
  var e = require("../../2691/2678/index");
  o = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = u;
var l = require("./3125");
function u(e, t, n) {
  var u;
  var c;
  var p;
  var f;
  var d;
  var h;
  var y;
  var m;
  var v;
  var g;
  var T;
  var b;
  var S;
  var E;
  var x;
  var P;
  var A;
  return r.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          u = t.parserOpts;
          c = t.highlightCode;
          p = void 0 === c || c;
          f = t.filename;
          d = void 0 === f ? "unknown" : f;
          r.prev = 1;
          h = [];
          y = i(e);
          try {
            for (y.s(); !(m = y.n()).done;) {
              v = m.value;
              g = i(v);
              try {
                for (g.s(); !(T = g.n()).done;) {
                  b = T.value;
                  if ((S = b.parserOverride) && void 0 !== (E = S(n, u, s().parse))) {
                    h.push(E);
                  }
                }
              } catch (a) {
                g.e(a);
              } finally {
                g.f();
              }
            }
          } catch (a) {
            y.e(a);
          } finally {
            y.f();
          }
          if (0 !== h.length) {
            r.next = 9;
            break;
          }
          return r.abrupt("return", (0, s().parse)(n, u));
        case 9:
          if (1 !== h.length) {
            r.next = 14;
            break;
          }
          return r.delegateYield([], "t0", 11);
        case 11:
          if ("function" !== typeof h[0].then) {
            r.next = 13;
            break;
          }
          throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        case 13:
          return r.abrupt("return", h[0]);
        case 14:
          throw new Error("More than one plugin attempted to override parsing.");
        case 17:
          throw r.prev = 17, r.t1 = r.catch(1), "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" === r.t1.code && (r.t1.message += "\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file."), x = r.t1.loc, P = r.t1.missingPlugin, x && (A = (0, o().codeFrameColumns)(n, {
            start: {
              line: x.line,
              column: x.column + 1
            }
          }, {
            highlightCode: p
          }), r.t1.message = P ? "".concat(d, ": ") + (0, l.default)(P[0], x, A) : "".concat(d, ": ").concat(r.t1.message, "\n\n") + A, r.t1.code = "BABEL_PARSE_ERROR"), r.t1;
        case 23:
        case "end":
          return r.stop();
      }
    }
  }, a, null, [[1, 17]]);
}