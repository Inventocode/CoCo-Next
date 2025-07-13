"use strict";

import * as r from "../../../../../1524/2574/1/index";
import * as i from "../../../../3190/494";
import * as a from "../../../../2873/2721/805/index";
var s = r.mark(k);
var o = r.mark(I);
function l() {
  var e = require("../../3131/2638");
  l = function () {
    return e;
  };
  return e;
}
import * as u from "./2791";
import * as c from "./2704";
import * as p from "../../index";
import * as f from "./2682";
import * as d from "../2683/index";
import * as h from "./2800/index";
function y() {
  var e = require("../../2637/index");
  y = function () {
    return e;
  };
  return e;
}
import * as m from "./2684";
import * as v from "./2685/index";
import * as g from "./3117";
import * as T from "./3118";
import * as b from "../2803/index";
var S = (require("./2802"), l()(r.mark(function e(t) {
  var n;
  var s;
  var o;
  var l;
  var u;
  var p;
  var f;
  var h;
  var y;
  var m;
  var g;
  var T;
  var S;
  var x;
  var P;
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          return e.delegateYield((0, b.default)(t), "t0", 1);
        case 1:
          if (s = e.t0) {
            e.next = 4;
            break;
          }
          return e.abrupt("return", null);
        case 4:
          if (o = s.options, l = s.context, "ignored" !== s.fileHandling) {
            e.next = 7;
            break;
          }
          return e.abrupt("return", null);
        case 7:
          if (u = {}, p = o.plugins, f = o.presets, p && f) {
            e.next = 11;
            break;
          }
          throw new Error("Assertion failure - plugins and presets exist");
        case 11:
          h = Object.assign({}, l, {
            targets: o.targets
          });
          y = function (e) {
            var t = (0, d.getItemDescriptor)(e);
            if (!t) {
              throw new Error("Assertion failure - must be config item");
            }
            return t;
          };
          m = f.map(y);
          g = p.map(y);
          T = [[]];
          S = [];
          return e.delegateYield(E(l, r.mark(function e(t, n) {
            var s;
            var o;
            var l;
            var p;
            var f;
            var d;
            var y;
            var m;
            return r.wrap(function (r) {
              for (;;) {
                switch (r.prev = r.next) {
                  case 0:
                    s = [];
                    o = 0;
                  case 2:
                    if (!(o < t.length)) {
                      r.next = 30;
                      break;
                    }
                    if (!1 === (l = t[o]).options) {
                      r.next = 27;
                      break;
                    }
                    if (r.prev = 5, !l.ownPass) {
                      r.next = 15;
                      break;
                    }
                    r.t0 = s;
                    return r.delegateYield(I(l, h), "t1", 9);
                  case 9:
                    r.t2 = r.t1;
                    r.t3 = [];
                    r.t4 = {
                      preset: r.t2,
                      pass: r.t3
                    };
                    r.t0.push.call(r.t0, r.t4);
                    r.next = 21;
                    break;
                  case 15:
                    r.t5 = s;
                    return r.delegateYield(I(l, h), "t6", 17);
                  case 17:
                    r.t7 = r.t6;
                    r.t8 = n;
                    r.t9 = {
                      preset: r.t7,
                      pass: r.t8
                    };
                    r.t5.unshift.call(r.t5, r.t9);
                  case 21:
                    r.next = 27;
                    break;
                  case 23:
                    throw r.prev = 23, r.t10 = r.catch(5), "BABEL_UNKNOWN_OPTION" === r.t10.code && (0, v.checkNoUnwrappedItemOptionPairs)(t, o, "preset", r.t10), r.t10;
                  case 27:
                    o++;
                    r.next = 2;
                    break;
                  case 30:
                    if (!(s.length > 0)) {
                      r.next = 55;
                      break;
                    }
                    T.splice.apply(T, [1, 0].concat(a(s.map(function (e) {
                      return e.pass;
                    }).filter(function (e) {
                      return e !== n;
                    }))));
                    p = i(s);
                    r.prev = 33;
                    p.s();
                  case 35:
                    if ((f = p.n()).done) {
                      r.next = 47;
                      break;
                    }
                    if (d = f.value, y = d.preset, m = d.pass, y) {
                      r.next = 39;
                      break;
                    }
                    return r.abrupt("return", !0);
                  case 39:
                    m.push.apply(m, a(y.plugins));
                    return r.delegateYield(e(y.presets, m), "t11", 41);
                  case 41:
                    if (!r.t11) {
                      r.next = 44;
                      break;
                    }
                    return r.abrupt("return", !0);
                  case 44:
                    y.options.forEach(function (e) {
                      (0, c.mergeOptions)(u, e);
                    });
                  case 45:
                    r.next = 35;
                    break;
                  case 47:
                    r.next = 52;
                    break;
                  case 49:
                    r.prev = 49;
                    r.t12 = r.catch(33);
                    p.e(r.t12);
                  case 52:
                    r.prev = 52;
                    p.f();
                    return r.finish(52);
                  case 55:
                  case "end":
                    return r.stop();
                }
              }
            }, e, null, [[5, 23], [33, 49, 52, 55]]);
          }))(m, T[0]), "t1", 18);
        case 18:
          if (!e.t1) {
            e.next = 21;
            break;
          }
          return e.abrupt("return", null);
        case 21:
          x = u;
          (0, c.mergeOptions)(x, o);
          P = Object.assign({}, h, {
            assumptions: null != (n = x.assumptions) ? n : {}
          });
          return e.delegateYield(E(l, r.mark(function e() {
            var t;
            var n;
            var s;
            var o;
            var l;
            var u;
            var c;
            return r.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    (t = T[0]).unshift.apply(t, a(g));
                    n = i(T);
                    e.prev = 2;
                    n.s();
                  case 4:
                    if ((s = n.n()).done) {
                      e.next = 28;
                      break;
                    }
                    o = s.value;
                    l = [];
                    S.push(l);
                    u = 0;
                  case 9:
                    if (!(u < o.length)) {
                      e.next = 26;
                      break;
                    }
                    if (!1 === (c = o[u]).options) {
                      e.next = 23;
                      break;
                    }
                    e.prev = 12;
                    e.t0 = l;
                    return e.delegateYield(k(c, P), "t1", 15);
                  case 15:
                    e.t2 = e.t1;
                    e.t0.push.call(e.t0, e.t2);
                    e.next = 23;
                    break;
                  case 19:
                    throw e.prev = 19, e.t3 = e.catch(12), "BABEL_UNKNOWN_PLUGIN_PROPERTY" === e.t3.code && (0, v.checkNoUnwrappedItemOptionPairs)(o, u, "plugin", e.t3), e.t3;
                  case 23:
                    u++;
                    e.next = 9;
                    break;
                  case 26:
                    e.next = 4;
                    break;
                  case 28:
                    e.next = 33;
                    break;
                  case 30:
                    e.prev = 30;
                    e.t4 = e.catch(2);
                    n.e(e.t4);
                  case 33:
                    e.prev = 33;
                    n.f();
                    return e.finish(33);
                  case 36:
                  case "end":
                    return e.stop();
                }
              }
            }, e, null, [[2, 30, 33, 36], [12, 19]]);
          }))(), "t2", 25);
        case 25:
          x.plugins = S[0];
          x.presets = S.slice(1).filter(function (e) {
            return e.length > 0;
          }).map(function (e) {
            return {
              plugins: e
            };
          });
          x.passPerPreset = x.presets.length > 0;
          return e.abrupt("return", {
            options: x,
            passes: S
          });
        case 29:
        case "end":
          return e.stop();
      }
    }
  }, e);
})));
function E(e, t) {
  return r.mark(function n(i, a) {
    return r.wrap(function (n) {
      for (;;) {
        switch (n.prev = n.next) {
          case 0:
            n.prev = 0;
            return n.delegateYield(t(i, a), "t0", 2);
          case 2:
            return n.abrupt("return", n.t0);
          case 5:
            throw n.prev = 5, n.t1 = n.catch(0), /^\[BABEL\]/.test(n.t1.message) || (n.t1.message = "[BABEL] ".concat(e.filename || "unknown", ": ").concat(n.t1.message)), n.t1;
          case 9:
          case "end":
            return n.stop();
        }
      }
    }, n, null, [[0, 5]]);
  });
}
export default S;
var x = function (e) {
  return (0, m.makeWeakCache)(r.mark(function t(n, i) {
    var a;
    var s;
    var o;
    var l;
    var c;
    var f;
    var d;
    return r.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (a = n.value, s = n.options, o = n.dirname, l = n.alias, !1 !== s) {
              t.next = 3;
              break;
            }
            throw new Error("Assertion failure");
          case 3:
            if (s = s || {}, c = a, "function" !== typeof a) {
              t.next = 17;
              break;
            }
            f = (0, u.maybeAsync)(a, "You appear to be using an async plugin/preset, but Babel has been called synchronously");
            d = Object.assign({}, p, e(i));
            t.prev = 8;
            return t.delegateYield(f(d, s, o), "t0", 10);
          case 10:
            c = t.t0;
            t.next = 17;
            break;
          case 13:
            throw t.prev = 13, t.t1 = t.catch(8), l && (t.t1.message += " (While processing: ".concat(JSON.stringify(l), ")")), t.t1;
          case 17:
            if (c && "object" === typeof c) {
              t.next = 19;
              break;
            }
            throw new Error("Plugin/Preset did not return an object.");
          case 19:
            if (!(0, u.isThenable)(c)) {
              t.next = 22;
              break;
            }
            return t.delegateYield([], "t2", 21);
          case 21:
            throw new Error('You appear to be using a promise as a plugin, which your current version of Babel does not support. If you\'re using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". ' + "(While processing: ".concat(JSON.stringify(l), ")"));
          case 22:
            return t.abrupt("return", {
              value: c,
              options: s,
              dirname: o,
              alias: l
            });
          case 23:
          case "end":
            return t.stop();
        }
      }
    }, t, null, [[8, 13]]);
  }));
};
var P = x(T.makePluginAPI);
var A = x(T.makePresetAPI);
function k(e, t) {
  return r.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          if (!(e.value instanceof f.default)) {
            n.next = 4;
            break;
          }
          if (!e.options) {
            n.next = 3;
            break;
          }
          throw new Error("Passed options to an existing Plugin instance will not work.");
        case 3:
          return n.abrupt("return", e.value);
        case 4:
          n.t0 = w;
          return n.delegateYield(P(e, t), "t1", 6);
        case 6:
          n.t2 = n.t1;
          n.t3 = t;
          return n.delegateYield((0, n.t0)(n.t2, n.t3), "t4", 9);
        case 9:
          return n.abrupt("return", n.t4);
        case 10:
        case "end":
          return n.stop();
      }
    }
  }, s);
}
var w = (0, m.makeWeakCache)(r.mark(function e(t, n) {
  var i;
  var a;
  var s;
  var o;
  var l;
  var c;
  var p;
  var d;
  return r.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          if (i = t.value, a = t.options, s = t.dirname, o = t.alias, l = (0, g.validatePluginObject)(i), (c = Object.assign({}, l)).visitor && (c.visitor = y().default.explode(Object.assign({}, c.visitor))), !c.inherits) {
            e.next = 12;
            break;
          }
          p = {
            name: void 0,
            alias: "".concat(o, "$inherits"),
            value: c.inherits,
            options: a,
            dirname: s
          };
          return e.delegateYield((0, u.forwardAsync)(k, function (e) {
            return n.invalidate(function (t) {
              return e(p, t);
            });
          }), "t0", 7);
        case 7:
          d = e.t0;
          c.pre = _(d.pre, c.pre);
          c.post = _(d.post, c.post);
          c.manipulateOptions = _(d.manipulateOptions, c.manipulateOptions);
          c.visitor = y().default.visitors.merge([d.visitor || {}, c.visitor || {}]);
        case 12:
          return e.abrupt("return", new f.default(c, a, o));
        case 13:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
var O = function (e, t) {
  if (e.test || e.include || e.exclude) {
    var n = t.name ? '"'.concat(t.name, '"') : "/* your preset */";
    throw new Error(["Preset ".concat(n, " requires a filename to be set when babel is called directly,"), "```", "babel.transform(code, { filename: 'file.ts', presets: [".concat(n, "] });"), "```", "See https://babeljs.io/docs/en/options#filename for more information."].join("\n"));
  }
};
var C = function (e, t, n) {
  if (!t.filename) {
    var r = e.options;
    O(r, n);
    if (r.overrides) {
      r.overrides.forEach(function (e) {
        return O(e, n);
      });
    }
  }
};
function I(e, t) {
  var n;
  return r.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.t0 = N;
          return r.delegateYield(A(e, t), "t1", 2);
        case 2:
          r.t2 = r.t1;
          n = (0, r.t0)(r.t2);
          C(n, t, e);
          return r.delegateYield((0, h.buildPresetChain)(n, t), "t3", 6);
        case 6:
          return r.abrupt("return", r.t3);
        case 7:
        case "end":
          return r.stop();
      }
    }
  }, o);
}
var N = (0, m.makeWeakCacheSync)(function (e) {
  var t = e.value;
  var n = e.dirname;
  var r = e.alias;
  return {
    options: (0, v.validate)("preset", t),
    alias: r,
    dirname: n
  };
});
function _(e, t) {
  var n = [e, t].filter(Boolean);
  return n.length <= 1 ? n[0] : function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    var a;
    var s = i(n);
    try {
      for (s.s(); !(a = s.n()).done;) {
        var o = a.value;
        o.apply(this, t);
      }
    } catch (l) {
      s.e(l);
    } finally {
      s.f();
    }
  };
}