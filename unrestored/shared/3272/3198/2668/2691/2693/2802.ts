"use strict";

var r = require("../../../../3200/494");
var i = require("../../../../3200/624/index");
var a = require("../../../../../1531/2584/1/index");
var s = a.mark(m);
var o = a.mark(P);
var l = a.mark(A);
var u = a.mark(k);
var c = a.mark(w);
function p() {
  var e = require("../../3141/2648");
  p = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.createCachedDescriptors = function (e, t, n) {
  var r = t.plugins;
  var i = t.presets;
  var a = t.passPerPreset;
  return {
    options: v(t, e),
    plugins: r ? function () {
      return S(r, e)(n);
    } : function () {
      return m([]);
    },
    presets: i ? function () {
      return T(i, e)(n)(!!a);
    } : function () {
      return m([]);
    }
  };
};
exports.createDescriptor = w;
exports.createUncachedDescriptors = function (e, t, n) {
  var r;
  var i;
  return {
    options: v(t, e),
    plugins: a.mark(function i() {
      return a.wrap(function (i) {
        for (;;) {
          switch (i.prev = i.next) {
            case 0:
              if (r) {
                i.next = 3;
                break;
              }
              return i.delegateYield(A(t.plugins || [], e, n), "t0", 2);
            case 2:
              r = i.t0;
            case 3:
              return i.abrupt("return", r);
            case 4:
            case "end":
              return i.stop();
          }
        }
      }, i);
    }),
    presets: a.mark(function r() {
      return a.wrap(function (r) {
        for (;;) {
          switch (r.prev = r.next) {
            case 0:
              if (i) {
                r.next = 3;
                break;
              }
              return r.delegateYield(P(t.presets || [], e, n, !!t.passPerPreset), "t0", 2);
            case 2:
              i = r.t0;
            case 3:
              return r.abrupt("return", i);
            case 4:
            case "end":
              return r.stop();
          }
        }
      }, r);
    })
  };
};
var f = require("../../2690");
var d = require("./index");
var h = require("../3104/2694");
var y = require("../2813/2803/index");
function m(e) {
  return a.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          return t.abrupt("return", e);
        case 1:
        case "end":
          return t.stop();
      }
    }
  }, s);
}
function v(e, t) {
  if ("string" === typeof e.browserslistConfigFile) {
    e.browserslistConfigFile = (0, y.resolveBrowserslistConfigFile)(e.browserslistConfigFile, t);
  }
  return e;
}
var g = new WeakMap();
var T = (0, h.makeWeakCacheSync)(function (e, t) {
  var n = t.using(function (e) {
    return e;
  });
  return (0, h.makeStrongCacheSync)(function (t) {
    return (0, h.makeStrongCache)(a.mark(function r(i) {
      var s;
      return a.wrap(function (r) {
        for (;;) {
          switch (r.prev = r.next) {
            case 0:
              return r.delegateYield(P(e, n, t, i), "t0", 1);
            case 1:
              s = r.t0;
              return r.abrupt("return", s.map(function (e) {
                return x(g, e);
              }));
            case 3:
            case "end":
              return r.stop();
          }
        }
      }, r);
    }));
  });
});
var b = new WeakMap();
var S = (0, h.makeWeakCacheSync)(function (e, t) {
  var n = t.using(function (e) {
    return e;
  });
  return (0, h.makeStrongCache)(a.mark(function t(r) {
    var i;
    return a.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            return t.delegateYield(A(e, n, r), "t0", 1);
          case 1:
            i = t.t0;
            return t.abrupt("return", i.map(function (e) {
              return x(b, e);
            }));
          case 3:
          case "end":
            return t.stop();
        }
      }
    }, t);
  }));
});
var E = {};
function x(e, t) {
  var n = t.value;
  var r = t.options;
  var i = void 0 === r ? E : r;
  if (!1 === i) {
    return t;
  }
  var a = e.get(n);
  if (!a) {
    a = new WeakMap();
    e.set(n, a);
  }
  var s = a.get(i);
  if (s || (s = [], a.set(i, s)), -1 === s.indexOf(t)) {
    var o = s.filter(function (e) {
      r = t;
      return (n = e).name === r.name && n.value === r.value && n.options === r.options && n.dirname === r.dirname && n.alias === r.alias && n.ownPass === r.ownPass && (n.file && n.file.request) === (r.file && r.file.request) && (n.file && n.file.resolved) === (r.file && r.file.resolved);
      var n;
      var r;
    });
    if (o.length > 0) {
      return o[0];
    }
    s.push(t);
  }
  return t;
}
function P(e, t, n, r) {
  return a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          return i.delegateYield(k("preset", e, t, n, r), "t0", 1);
        case 1:
          return i.abrupt("return", i.t0);
        case 2:
        case "end":
          return i.stop();
      }
    }
  }, o);
}
function A(e, t, n) {
  return a.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          return r.delegateYield(k("plugin", e, t, n), "t0", 1);
        case 1:
          return r.abrupt("return", r.t0);
        case 2:
        case "end":
          return r.stop();
      }
    }
  }, l);
}
function k(e, t, n, r, i) {
  var s;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          return a.delegateYield(p().all(t.map(function (t, a) {
            return w(t, n, {
              type: e,
              alias: "".concat(r, "$").concat(a),
              ownPass: !!i
            });
          })), "t0", 1);
        case 1:
          O(s = a.t0);
          return a.abrupt("return", s);
        case 4:
        case "end":
          return a.stop();
      }
    }
  }, u);
}
function w(e, t, n) {
  var r;
  var s;
  var o;
  var l;
  var u;
  var p;
  var h;
  var y;
  var m;
  var v;
  var g;
  var T;
  var b;
  var S;
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          if (r = n.type, s = n.alias, o = n.ownPass, !(l = (0, d.getItemDescriptor)(e))) {
            a.next = 4;
            break;
          }
          return a.abrupt("return", l);
        case 4:
          if (h = e, Array.isArray(h) && (3 === h.length ? (y = i(h, 3), h = y[0], p = y[1], u = y[2]) : (m = i(h, 2), h = m[0], p = m[1])), v = void 0, g = null, "string" !== typeof h) {
            a.next = 18;
            break;
          }
          if ("string" === typeof r) {
            a.next = 11;
            break;
          }
          throw new Error("To resolve a string-based item, the type of item must be given");
        case 11:
          T = "plugin" === r ? f.loadPlugin : f.loadPreset;
          b = h;
          return a.delegateYield(T(h, t), "t0", 14);
        case 14:
          S = a.t0;
          g = S.filepath;
          h = S.value;
          v = {
            request: b,
            resolved: g
          };
        case 18:
          if (h) {
            a.next = 20;
            break;
          }
          throw new Error("Unexpected falsy value: ".concat(String(h)));
        case 20:
          if ("object" !== typeof h || !h.__esModule) {
            a.next = 26;
            break;
          }
          if (!h.default) {
            a.next = 25;
            break;
          }
          h = h.default;
          a.next = 26;
          break;
        case 25:
          throw new Error("Must export a default export when using ES6 modules.");
        case 26:
          if ("object" === typeof h || "function" === typeof h) {
            a.next = 28;
            break;
          }
          throw new Error("Unsupported format: ".concat(typeof h, ". Expected an object or a function."));
        case 28:
          if (null === g || "object" !== typeof h || !h) {
            a.next = 30;
            break;
          }
          throw new Error("Plugin/Preset files are not allowed to export objects, only functions. In ".concat(g));
        case 30:
          return a.abrupt("return", {
            name: u,
            alias: g || s,
            value: h,
            options: p,
            dirname: t,
            ownPass: o,
            file: v
          });
        case 31:
        case "end":
          return a.stop();
      }
    }
  }, c);
}
function O(e) {
  var t;
  var n = new Map();
  var i = r(e);
  try {
    var a = function () {
      var r = t.value;
      if ("function" !== typeof r.value) {
        return "continue";
      }
      var i = n.get(r.value);
      if (i || (i = new Set(), n.set(r.value, i)), i.has(r.name)) {
        var a = e.filter(function (e) {
          return e.value === r.value;
        });
        throw new Error(["Duplicate plugin/preset detected.", "If you'd like to use two separate instances of a plugin,", "they need separate names, e.g.", "", "  plugins: [", "    ['some-plugin', {}],", "    ['some-plugin', {}, 'some unique name'],", "  ]", "", "Duplicates detected are:", "".concat(JSON.stringify(a, null, 2))].join("\n"));
      }
      i.add(r.name);
    };
    for (i.s(); !(t = i.n()).done;) {
      a();
    }
  } catch (s) {
    i.e(s);
  } finally {
    i.f();
  }
}