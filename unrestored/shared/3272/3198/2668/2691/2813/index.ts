"use strict";

var r = require("../../220");
var i = require("../../230");
var a = require("../../../../../1531/2584/1/index");
var s = a.mark(b);
function o() {
  var e = require("../../../1187/index");
  o = function () {
    return e;
  };
  return e;
}
function l() {
  var e = require("../../3141/2648");
  l = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = b;
exports.loadPartialConfig = void 0;
var u = require("./2692");
var c = require("./2714");
var p = require("../2693/index");
var f = require("./2810/index");
var d = require("../../2800");
var h = require("./2695/index");
var y = require("../../2690");
var m = require("./2803/index");
var v = ["showIgnoredFiles"];
function g(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var r;
  var i = {};
  var a = Object.keys(e);
  for (r = 0; r < a.length; r++) {
    n = a[r];
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n];
    }
  }
  return i;
}
function T(e, t) {
  switch (t) {
    case "root":
      return e;
    case "upward-optional":
      var n = (0, y.findConfigUpwards)(e);
      return null === n ? e : n;
    case "upward":
      var r = (0, y.findConfigUpwards)(e);
      if (null !== r) {
        return r;
      }
      throw Object.assign(new Error('Babel was run with rootMode:"upward" but a root could not ' + 'be found when searching upward from "'.concat(e, '".\n') + "One of the following config files must be in the directory tree: " + '"'.concat(y.ROOT_CONFIG_FILENAMES.join(", "), '".')), {
        code: "BABEL_ROOT_NOT_FOUND",
        dirname: e
      });
    default:
      throw new Error("Assertion failure - unknown rootMode value.");
  }
}
function b(e) {
  var t;
  var n;
  var r;
  var i;
  var l;
  var u;
  var v;
  var g;
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
  return a.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          if (null == e || "object" === typeof e && !Array.isArray(e)) {
            a.next = 2;
            break;
          }
          throw new Error("Babel options must be an object, null, or undefined");
        case 2:
          t = e ? (0, h.validate)("arguments", e) : {};
          n = t.envName;
          r = void 0 === n ? (0, d.getEnv)() : n;
          i = t.cwd;
          l = void 0 === i ? "." : i;
          u = t.root;
          v = void 0 === u ? "." : u;
          g = t.rootMode;
          b = void 0 === g ? "root" : g;
          S = t.caller;
          E = t.cloneInputAst;
          x = void 0 === E || E;
          P = o().resolve(l);
          A = T(o().resolve(P, v), b);
          k = "string" === typeof t.filename ? o().resolve(l, t.filename) : void 0;
          return a.delegateYield((0, y.resolveShowConfigPath)(P), "t0", 8);
        case 8:
          w = a.t0;
          O = {
            filename: k,
            cwd: P,
            root: A,
            envName: r,
            caller: S,
            showConfig: w === k
          };
          return a.delegateYield((0, f.buildRootChain)(t, O), "t1", 11);
        case 11:
          if (C = a.t1) {
            a.next = 14;
            break;
          }
          return a.abrupt("return", null);
        case 14:
          I = {
            assumptions: {}
          };
          C.options.forEach(function (e) {
            (0, c.mergeOptions)(I, e);
          });
          N = Object.assign({}, I, {
            targets: (0, m.resolveTargets)(I, A),
            cloneInputAst: x,
            babelrc: !1,
            configFile: !1,
            browserslistConfigFile: !1,
            passPerPreset: !1,
            envName: O.envName,
            cwd: O.cwd,
            root: O.root,
            rootMode: "root",
            filename: "string" === typeof O.filename ? O.filename : void 0,
            plugins: C.plugins.map(function (e) {
              return (0, p.createItemFromDescriptor)(e);
            }),
            presets: C.presets.map(function (e) {
              return (0, p.createItemFromDescriptor)(e);
            })
          });
          return a.abrupt("return", {
            options: N,
            context: O,
            fileHandling: C.fileHandling,
            ignore: C.ignore,
            babelrc: C.babelrc,
            config: C.config,
            files: C.files
          });
        case 18:
        case "end":
          return a.stop();
      }
    }
  }, s);
}
var S = l()(a.mark(function e(t) {
  var n;
  var r;
  var i;
  var s;
  var o;
  var l;
  var c;
  var p;
  var f;
  return a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          n = !1;
          if (!("object" !== typeof t || null === t || Array.isArray(t))) {
            n = (r = t).showIgnoredFiles;
            t = g(r, v);
          }
          return e.delegateYield(b(t), "t0", 3);
        case 3:
          if (i = e.t0) {
            e.next = 6;
            break;
          }
          return e.abrupt("return", null);
        case 6:
          if (s = i.options, o = i.babelrc, l = i.ignore, c = i.config, p = i.fileHandling, f = i.files, "ignored" !== p || n) {
            e.next = 9;
            break;
          }
          return e.abrupt("return", null);
        case 9:
          (s.plugins || []).forEach(function (e) {
            if (e.value instanceof u.default) {
              throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()");
            }
          });
          return e.abrupt("return", new E(s, o ? o.filepath : void 0, l ? l.filepath : void 0, c ? c.filepath : void 0, p, f));
        case 11:
        case "end":
          return e.stop();
      }
    }
  }, e);
}));
exports.loadPartialConfig = S;
var E = function () {
  function e(t, n, i, a, s, o) {
    r(this, e);
    this.options = void 0;
    this.babelrc = void 0;
    this.babelignore = void 0;
    this.config = void 0;
    this.fileHandling = void 0;
    this.files = void 0;
    this.options = t;
    this.babelignore = i;
    this.babelrc = n;
    this.config = a;
    this.fileHandling = s;
    this.files = o;
    Object.freeze(this);
  }
  i(e, [{
    key: "hasFilesystemConfig",
    value: function () {
      return void 0 !== this.babelrc || void 0 !== this.config;
    }
  }]);
  return e;
}();
Object.freeze(E.prototype);