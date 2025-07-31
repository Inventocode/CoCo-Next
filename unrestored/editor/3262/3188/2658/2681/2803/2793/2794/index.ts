"use strict";

(function (e) {
  var r = require("../../../../../../3190/494");
  var i = require("../../../../../../3190/624/index");
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  Object.defineProperty(exports, "TargetNames", {
    enumerable: !0,
    get: function () {
      return c.TargetNames;
    }
  });
  exports.default = function () {
    var e;
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var s = t.browsers;
    var o = t.esmodules;
    var u = n.configPath;
    var c = void 0 === u ? "." : u;
    g(s);
    var p = E(t);
    var f = m(p);
    var d = !!s;
    var y = d || Object.keys(f).length > 0;
    var v = !n.ignoreBrowserslistConfig && !y;
    if (!s && v && null == (s = a.loadConfig({
      config: n.configFile,
      path: c,
      env: n.browserslistEnv
    }))) {
      s = [];
    }
    if (!(!o || "intersect" === o && null != (e = s) && e.length)) {
      s = Object.keys(h).map(function (e) {
        return "".concat(e, " >= ").concat(h[e]);
      }).join(", ");
      o = !1;
    }
    if (s) {
      var b = x(s, n.browserslistEnv);
      if ("intersect" === o) {
        for (var P = 0, A = Object.keys(b); P < A.length; P++) {
          var k = A[P];
          var w = b[k];
          if (h[k]) {
            b[k] = (0, l.getHighestUnreleased)(w, (0, l.semverify)(h[k]), k);
          } else {
            delete b[k];
          }
        }
      }
      f = Object.assign(b, f);
    }
    var O;
    var C = {};
    var I = [];
    var N = r(Object.keys(f).sort());
    try {
      for (N.s(); !(O = N.n()).done;) {
        var _;
        var D = O.value;
        var j = f[D];
        if ("number" === typeof j && j % 1 !== 0) {
          I.push({
            target: D,
            value: j
          });
        }
        var L = null != (_ = S[D]) ? _ : S.__default;
        var M = L(D, j);
        var B = i(M, 2);
        var F = B[0];
        var R = B[1];
        if (R) {
          C[F] = R;
        }
      }
    } catch (U) {
      N.e(U);
    } finally {
      N.f();
    }
    T(I);
    return C;
  };
  Object.defineProperty(exports, "filterItems", {
    enumerable: !0,
    get: function () {
      return d.default;
    }
  });
  Object.defineProperty(exports, "getInclusionReasons", {
    enumerable: !0,
    get: function () {
      return f.getInclusionReasons;
    }
  });
  exports.isBrowsersQueryValid = v;
  Object.defineProperty(exports, "isRequired", {
    enumerable: !0,
    get: function () {
      return d.isRequired;
    }
  });
  Object.defineProperty(exports, "prettifyTargets", {
    enumerable: !0,
    get: function () {
      return p.prettifyTargets;
    }
  });
  Object.defineProperty(exports, "unreleasedLabels", {
    enumerable: !0,
    get: function () {
      return u.unreleasedLabels;
    }
  });
  var a = require("./3095/index");
  var s = require("./2797/index");
  var o = require("./3107/index");
  var l = require("./2705");
  var u = require("./2706");
  var c = require("./3109");
  var p = require("./2799");
  var f = require("./3110");
  var d = require("./3111/index");
  var h = o["es6.module"];
  var y = new s.OptionValidator("@babel/helper-compilation-targets");
  function m(e) {
    for (var t = Object.keys(c.TargetNames), n = 0, r = Object.keys(e); n < r.length; n++) {
      var i = r[n];
      if (!(i in c.TargetNames)) {
        throw new Error(y.formatMessage("'".concat(i, "' is not a valid target\n- Did you mean '").concat((0, s.findSuggestion)(i, t), "'?")));
      }
    }
    return e;
  }
  function v(e) {
    return "string" === typeof e || Array.isArray(e) && e.every(function (e) {
      return "string" === typeof e;
    });
  }
  function g(e) {
    y.invariant(void 0 === e || v(e), "'".concat(String(e), "' is not a valid browserslist query"));
    return e;
  }
  function T(e) {
    if (e.length) {
      console.warn("Warning, the following targets are using a decimal version:\n");
      e.forEach(function (e) {
        var t = e.target;
        var n = e.value;
        return console.warn("  ".concat(t, ": ").concat(n));
      });
      console.warn("\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n");
    }
  }
  function b(e, t) {
    try {
      return (0, l.semverify)(t);
    } catch (n) {
      throw new Error(y.formatMessage("'".concat(t, "' is not a valid value for 'targets.").concat(e, "'.")));
    }
  }
  var S = {
    __default: function (e, t) {
      return [e, (0, l.isUnreleasedVersion)(t, e) ? t.toLowerCase() : b(e, t)];
    },
    node: function (t, n) {
      return [t, !0 === n || "current" === n ? e.versions.node : b(t, n)];
    }
  };
  function E(e) {
    var t = Object.assign({}, e);
    delete t.esmodules;
    delete t.browsers;
    return t;
  }
  function x(e, t) {
    var n = a(e, {
      mobileToDesktop: !0,
      env: t
    });
    return n.reduce(function (e, t) {
      var n = t.split(" ");
      var r = i(n, 2);
      var a = r[0];
      var s = r[1];
      var o = u.browserNameMap[a];
      if (!o) {
        return e;
      }
      try {
        var c = s.split("-")[0].toLowerCase();
        var p = (0, l.isUnreleasedVersion)(c, a);
        if (!e[o]) {
          e[o] = p ? c : (0, l.semverify)(c);
          return e;
        }
        var f = e[o];
        var d = (0, l.isUnreleasedVersion)(f, a);
        if (d && p) {
          e[o] = (0, l.getLowestUnreleased)(f, c, a);
        } else if (d) {
          e[o] = (0, l.semverify)(c);
        } else if (!d && !p) {
          var h = (0, l.semverify)(c);
          e[o] = (0, l.semverMin)(f, h);
        }
      } catch (y) {}
      return e;
    }, {});
  }
}).call(this, require("../../../../../1184/368"));