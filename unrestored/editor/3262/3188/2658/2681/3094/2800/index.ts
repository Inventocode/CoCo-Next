"use strict";

var r = require("../../../../../3190/494");
var i = require("../../../../../2873/2721/805/index");
var a = require("../../../../../../1524/2574/1/index");
var s = a.mark(b);
var o = a.mark(k);
var l = a.mark(D);
var u = a.mark(W);
var c = a.mark(H);
function p() {
  var e = require("../../../../1184/index");
  p = function () {
    return e;
  };
  return e;
}
function f() {
  var e = require("../../../../../../1524/2574/206/775/806/index");
  f = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.buildPresetChain = b;
exports.buildPresetChainWalker = void 0;
exports.buildRootChain = k;
var d = require("../2685/index");
var h = require("./3115");
var y = require("./3116");
var m = require("../../../2680");
var v = require("../2684");
var g = require("../../2683/2792");
var T = f()("babel:config:config-chain");
function b(e, t) {
  var n;
  return a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          return r.delegateYield(S(e, t), "t0", 1);
        case 1:
          if (n = r.t0) {
            r.next = 4;
            break;
          }
          return r.abrupt("return", null);
        case 4:
          return r.abrupt("return", {
            plugins: X(n.plugins),
            presets: X(n.presets),
            options: n.options.map(function (e) {
              return J(e);
            }),
            files: new Set()
          });
        case 5:
        case "end":
          return r.stop();
      }
    }
  }, s);
}
var S = V({
  root: function (e) {
    return E(e);
  },
  env: function (e, t) {
    return x(e)(t);
  },
  overrides: function (e, t) {
    return P(e)(t);
  },
  overridesEnv: function (e, t, n) {
    return A(e)(t)(n);
  },
  createLogger: function () {
    return function () {};
  }
});
exports.buildPresetChainWalker = S;
var E = (0, v.makeWeakCacheSync)(function (e) {
  return F(e, e.alias, g.createUncachedDescriptors);
});
var x = (0, v.makeWeakCacheSync)(function (e) {
  return (0, v.makeStrongCacheSync)(function (t) {
    return R(e, e.alias, g.createUncachedDescriptors, t);
  });
});
var P = (0, v.makeWeakCacheSync)(function (e) {
  return (0, v.makeStrongCacheSync)(function (t) {
    return U(e, e.alias, g.createUncachedDescriptors, t);
  });
});
var A = (0, v.makeWeakCacheSync)(function (e) {
  return (0, v.makeStrongCacheSync)(function (t) {
    return (0, v.makeStrongCacheSync)(function (n) {
      return K(e, e.alias, g.createUncachedDescriptors, t, n);
    });
  });
});
function k(e, t) {
  var n;
  var r;
  var i;
  var s;
  var l;
  var u;
  var c;
  var p;
  var f;
  var d;
  var h;
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
  var I;
  var _;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          i = new y.ConfigPrinter();
          return a.delegateYield(N({
            options: e,
            dirname: t.cwd
          }, t, void 0, i), "t0", 2);
        case 2:
          if (s = a.t0) {
            a.next = 5;
            break;
          }
          return a.abrupt("return", null);
        case 5:
          return a.delegateYield(i.output(), "t1", 6);
        case 6:
          if (l = a.t1, "string" !== typeof e.configFile) {
            a.next = 12;
            break;
          }
          return a.delegateYield((0, m.loadConfig)(e.configFile, t.cwd, t.envName, t.caller), "t2", 9);
        case 9:
          u = a.t2;
          a.next = 15;
          break;
        case 12:
          if (!1 === e.configFile) {
            a.next = 15;
            break;
          }
          return a.delegateYield((0, m.findRootConfig)(t.root, t.envName, t.caller), "t3", 14);
        case 14:
          u = a.t3;
        case 15:
          if (c = e.babelrc, p = e.babelrcRoots, f = t.cwd, d = q(), h = new y.ConfigPrinter(), !u) {
            a.next = 30;
            break;
          }
          v = O(u);
          return a.delegateYield(D(v, t, void 0, h), "t4", 22);
        case 22:
          if (g = a.t4) {
            a.next = 25;
            break;
          }
          return a.abrupt("return", null);
        case 25:
          return a.delegateYield(h.output(), "t5", 26);
        case 26:
          n = a.t5;
          if (void 0 === c) {
            c = v.options.babelrc;
          }
          if (void 0 === p) {
            f = v.dirname;
            p = v.options.babelrcRoots;
          }
          Y(d, g);
        case 30:
          if (S = !1, E = q(), !0 !== c && void 0 !== c || "string" !== typeof t.filename) {
            a.next = 55;
            break;
          }
          return a.delegateYield((0, m.findPackageData)(t.filename), "t6", 34);
        case 34:
          if (!(x = a.t6) || !w(t, x, p, f)) {
            a.next = 55;
            break;
          }
          return a.delegateYield((0, m.findRelativeConfig)(x, t.envName, t.caller), "t7", 37);
        case 37:
          if (P = a.t7, T = P.ignore, b = P.config, T && E.files.add(T.filepath), T && Q(t, T.ignore, null, T.dirname) && (S = !0), !b || S) {
            a.next = 54;
            break;
          }
          A = C(b);
          k = new y.ConfigPrinter();
          return a.delegateYield(D(A, t, void 0, k), "t8", 46);
        case 46:
          if (I = a.t8) {
            a.next = 51;
            break;
          }
          S = !0;
          a.next = 54;
          break;
        case 51:
          return a.delegateYield(k.output(), "t9", 52);
        case 52:
          r = a.t9;
          Y(E, I);
        case 54:
          if (b && S) {
            E.files.add(b.filepath);
          }
        case 55:
          if (t.showConfig) {
            console.log('Babel configs on "'.concat(t.filename, '" (ascending priority):\n') + [n, r, l].filter(function (e) {
              return !!e;
            }).join("\n\n") + "\n-----End Babel configs-----");
          }
          _ = Y(Y(Y(q(), d), E), s);
          return a.abrupt("return", {
            plugins: S ? [] : X(_.plugins),
            presets: S ? [] : X(_.presets),
            options: S ? [] : _.options.map(function (e) {
              return J(e);
            }),
            fileHandling: S ? "ignored" : "transpile",
            ignore: T || void 0,
            babelrc: b || void 0,
            config: u || void 0,
            files: _.files
          });
        case 58:
        case "end":
          return a.stop();
      }
    }
  }, o);
}
function w(e, t, n, r) {
  if ("boolean" === typeof n) {
    return n;
  }
  var i = e.root;
  if (void 0 === n) {
    return -1 !== t.directories.indexOf(i);
  }
  var a = n;
  if (!Array.isArray(a)) {
    a = [a];
  }
  return 1 === (a = a.map(function (e) {
    return "string" === typeof e ? p().resolve(r, e) : e;
  })).length && a[0] === i ? -1 !== t.directories.indexOf(i) : a.some(function (n) {
    if ("string" === typeof n) {
      n = (0, h.default)(n, r);
    }
    return t.directories.some(function (t) {
      return ee(n, r, t, e);
    });
  });
}
var O = (0, v.makeWeakCacheSync)(function (e) {
  return {
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, d.validate)("configfile", e.options)
  };
});
var C = (0, v.makeWeakCacheSync)(function (e) {
  return {
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, d.validate)("babelrcfile", e.options)
  };
});
var I = (0, v.makeWeakCacheSync)(function (e) {
  return {
    filepath: e.filepath,
    dirname: e.dirname,
    options: (0, d.validate)("extendsfile", e.options)
  };
});
var N = V({
  root: function (e) {
    return F(e, "base", g.createCachedDescriptors);
  },
  env: function (e, t) {
    return R(e, "base", g.createCachedDescriptors, t);
  },
  overrides: function (e, t) {
    return U(e, "base", g.createCachedDescriptors, t);
  },
  overridesEnv: function (e, t, n) {
    return K(e, "base", g.createCachedDescriptors, t, n);
  },
  createLogger: function (e, t, n) {
    return function (e, t, n) {
      var r;
      if (!n) {
        return function () {};
      }
      return n.configure(t.showConfig, y.ChainFormatter.Programmatic, {
        callerName: null == (r = t.caller) ? void 0 : r.name
      });
    }(0, t, n);
  }
});
var _ = V({
  root: function (e) {
    return j(e);
  },
  env: function (e, t) {
    return L(e)(t);
  },
  overrides: function (e, t) {
    return M(e)(t);
  },
  overridesEnv: function (e, t, n) {
    return B(e)(t)(n);
  },
  createLogger: function (e, t, n) {
    return function (e, t, n) {
      if (!n) {
        return function () {};
      }
      return n.configure(t.showConfig, y.ChainFormatter.Config, {
        filepath: e
      });
    }(e.filepath, t, n);
  }
});
function D(e, t, n, r) {
  var i;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          return a.delegateYield(_(e, t, n, r), "t0", 1);
        case 1:
          if (i = a.t0) {
            i.files.add(e.filepath);
          }
          return a.abrupt("return", i);
        case 4:
        case "end":
          return a.stop();
      }
    }
  }, l);
}
var j = (0, v.makeWeakCacheSync)(function (e) {
  return F(e, e.filepath, g.createUncachedDescriptors);
});
var L = (0, v.makeWeakCacheSync)(function (e) {
  return (0, v.makeStrongCacheSync)(function (t) {
    return R(e, e.filepath, g.createUncachedDescriptors, t);
  });
});
var M = (0, v.makeWeakCacheSync)(function (e) {
  return (0, v.makeStrongCacheSync)(function (t) {
    return U(e, e.filepath, g.createUncachedDescriptors, t);
  });
});
var B = (0, v.makeWeakCacheSync)(function (e) {
  return (0, v.makeStrongCacheSync)(function (t) {
    return (0, v.makeStrongCacheSync)(function (n) {
      return K(e, e.filepath, g.createUncachedDescriptors, t, n);
    });
  });
});
function F(e, t, n) {
  return n(e.dirname, e.options, t);
}
function R(e, t, n, r) {
  var i = e.dirname;
  var a = e.options;
  var s = a.env && a.env[r];
  return s ? n(i, s, "".concat(t, '.env["').concat(r, '"]')) : null;
}
function U(e, t, n, r) {
  var i = e.dirname;
  var a = e.options;
  var s = a.overrides && a.overrides[r];
  if (!s) {
    throw new Error("Assertion failure - missing override");
  }
  return n(i, s, "".concat(t, ".overrides[").concat(r, "]"));
}
function K(e, t, n, r, i) {
  var a = e.dirname;
  var s = e.options;
  var o = s.overrides && s.overrides[r];
  if (!o) {
    throw new Error("Assertion failure - missing override");
  }
  var l = o.env && o.env[i];
  return l ? n(a, l, "".concat(t, ".overrides[").concat(r, '].env["').concat(i, '"]')) : null;
}
function V(e) {
  var t = e.root;
  var n = e.env;
  var r = e.overrides;
  var i = e.overridesEnv;
  var s = e.createLogger;
  return a.mark(function e(o, l) {
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
    var x = arguments;
    return a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (u = x.length > 2 && void 0 !== x[2] ? x[2] : new Set(), c = x.length > 3 ? x[3] : void 0, p = o.dirname, f = [], G(d = t(o), p, l) && (f.push({
              config: d,
              envName: void 0,
              index: void 0
            }), (h = n(o, l.envName)) && G(h, p, l) && f.push({
              config: h,
              envName: l.envName,
              index: void 0
            }), (d.options.overrides || []).forEach(function (e, t) {
              var n = r(o, t);
              if (G(n, p, l)) {
                f.push({
                  config: n,
                  index: t,
                  envName: void 0
                });
                var a = i(o, t, l.envName);
                if (a && G(a, p, l)) {
                  f.push({
                    config: a,
                    index: t,
                    envName: l.envName
                  });
                }
              }
            })), !f.some(function (e) {
              var t = e.config.options;
              var n = t.ignore;
              var r = t.only;
              return Q(l, n, r, p);
            })) {
              e.next = 8;
              break;
            }
            return e.abrupt("return", null);
          case 8:
            y = q();
            m = s(o, l, c);
            v = 0;
            g = f;
          case 11:
            if (!(v < g.length)) {
              e.next = 21;
              break;
            }
            T = g[v];
            b = T.config;
            S = T.index;
            E = T.envName;
            return e.delegateYield(W(y, b.options, p, l, u, c), "t0", 14);
          case 14:
            if (e.t0) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", null);
          case 16:
            m(b, S, E);
            return e.delegateYield(H(y, b), "t1", 18);
          case 18:
            v++;
            e.next = 11;
            break;
          case 21:
            return e.abrupt("return", y);
          case 22:
          case "end":
            return e.stop();
        }
      }
    }, e);
  });
}
function W(e, t, n, r, i, s) {
  var o;
  var l;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          if (void 0 !== t.extends) {
            a.next = 2;
            break;
          }
          return a.abrupt("return", !0);
        case 2:
          return a.delegateYield((0, m.loadConfig)(t.extends, n, r.envName, r.caller), "t0", 3);
        case 3:
          if (o = a.t0, !i.has(o)) {
            a.next = 6;
            break;
          }
          throw new Error("Configuration cycle detected loading ".concat(o.filepath, ".\n") + "File already loaded following the config chain:\n" + Array.from(i, function (e) {
            return " - ".concat(e.filepath);
          }).join("\n"));
        case 6:
          i.add(o);
          return a.delegateYield(D(I(o), r, i, s), "t1", 8);
        case 8:
          if (l = a.t1, i.delete(o), l) {
            a.next = 12;
            break;
          }
          return a.abrupt("return", !1);
        case 12:
          Y(e, l);
          return a.abrupt("return", !0);
        case 14:
        case "end":
          return a.stop();
      }
    }
  }, u);
}
function Y(e, t) {
  var n;
  var a;
  var s;
  (n = e.options).push.apply(n, i(t.options));
  (a = e.plugins).push.apply(a, i(t.plugins));
  (s = e.presets).push.apply(s, i(t.presets));
  var o;
  var l = r(t.files);
  try {
    for (l.s(); !(o = l.n()).done;) {
      var u = o.value;
      e.files.add(u);
    }
  } catch (c) {
    l.e(c);
  } finally {
    l.f();
  }
  return e;
}
function H(e, t) {
  var n;
  var r;
  var s;
  var o;
  var l;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          s = t.options;
          o = t.plugins;
          l = t.presets;
          e.options.push(s);
          a.t0 = (n = e.plugins).push;
          a.t1 = n;
          a.t2 = i;
          return a.delegateYield(o(), "t3", 6);
        case 6:
          a.t4 = a.t3;
          a.t5 = (0, a.t2)(a.t4);
          a.t0.apply.call(a.t0, a.t1, a.t5);
          a.t6 = (r = e.presets).push;
          a.t7 = r;
          a.t8 = i;
          return a.delegateYield(l(), "t9", 13);
        case 13:
          a.t10 = a.t9;
          a.t11 = (0, a.t8)(a.t10);
          a.t6.apply.call(a.t6, a.t7, a.t11);
          return a.abrupt("return", e);
        case 17:
        case "end":
          return a.stop();
      }
    }
  }, c);
}
function q() {
  return {
    options: [],
    presets: [],
    plugins: [],
    files: new Set()
  };
}
function J(e) {
  var t = Object.assign({}, e);
  delete t.extends;
  delete t.env;
  delete t.overrides;
  delete t.plugins;
  delete t.presets;
  delete t.passPerPreset;
  delete t.ignore;
  delete t.only;
  delete t.test;
  delete t.include;
  delete t.exclude;
  if (Object.prototype.hasOwnProperty.call(t, "sourceMap")) {
    t.sourceMaps = t.sourceMap;
    delete t.sourceMap;
  }
  return t;
}
function X(e) {
  var t;
  var n = new Map();
  var i = [];
  var a = r(e);
  try {
    for (a.s(); !(t = a.n()).done;) {
      var s = t.value;
      if ("function" === typeof s.value) {
        var o = s.value;
        var l = n.get(o);
        if (!l) {
          l = new Map();
          n.set(o, l);
        }
        var u = l.get(s.name);
        if (u) {
          u.value = s;
        } else {
          u = {
            value: s
          };
          i.push(u);
          if (!s.ownPass) {
            l.set(s.name, u);
          }
        }
      } else {
        i.push({
          value: s
        });
      }
    }
  } catch (c) {
    a.e(c);
  } finally {
    a.f();
  }
  return i.reduce(function (e, t) {
    e.push(t.value);
    return e;
  }, []);
}
function G(e, t, n) {
  var r = e.options;
  return (void 0 === r.test || z(n, r.test, t)) && (void 0 === r.include || z(n, r.include, t)) && (void 0 === r.exclude || !z(n, r.exclude, t));
}
function z(e, t, n) {
  return Z(e, Array.isArray(t) ? t : [t], n);
}
function $(e, t) {
  return t instanceof RegExp ? String(t) : t;
}
function Q(e, t, n, r) {
  if (t && Z(e, t, r)) {
    var i;
    var a = 'No config is applied to "'.concat(null != (i = e.filename) ? i : "(unknown)", '" because it matches one of `ignore: ').concat(JSON.stringify(t, $), '` from "').concat(r, '"');
    T(a);
    if (e.showConfig) {
      console.log(a);
    }
    return !0;
  }
  if (n && !Z(e, n, r)) {
    var s;
    var o = 'No config is applied to "'.concat(null != (s = e.filename) ? s : "(unknown)", '" because it fails to match one of `only: ').concat(JSON.stringify(n, $), '` from "').concat(r, '"');
    T(o);
    if (e.showConfig) {
      console.log(o);
    }
    return !0;
  }
  return !1;
}
function Z(e, t, n) {
  return t.some(function (t) {
    return ee(t, n, e.filename, e);
  });
}
function ee(e, t, n, r) {
  if ("function" === typeof e) {
    return !!e(n, {
      dirname: t,
      envName: r.envName,
      caller: r.caller
    });
  }
  if ("string" !== typeof n) {
    throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");
  }
  if ("string" === typeof e) {
    e = (0, h.default)(e, t);
  }
  return e.test(n);
}