"use strict";

(function (t) {
  var r;
  var i = require("../../../38/607/494");
  var o = require("../../../38/607/624/index");
  var a = require("../1187");
  var s = require("./1108/index");
  var c = require("lodash");
  var u = require("./2211");
  var l = require("../1333/index");
  var f = require("./756/index");
  var d = require("../1112");
  var h = require("./2216/index")();
  var p = new WeakMap();
  var _ = Function.prototype;
  var A = {
    ESLINT_LEGACY_ECMAFEATURES: "The 'ecmaFeatures' config file property is deprecated, and has no effect."
  };
  var g = {
    error: 2,
    warn: 1,
    off: 0
  };
  function v(e) {
    if (!e) {
      return null;
    }
    var t = e.schema || e.meta && e.meta.schema;
    return Array.isArray(t) ? t.length ? {
      type: "array",
      items: t,
      minItems: 0,
      maxItems: t.length
    } : {
      type: "array",
      minItems: 0,
      maxItems: 0
    } : t || null;
  }
  function m(e) {
    var t = Array.isArray(e) ? e[0] : e;
    var n = "string" === typeof t ? g[t.toLowerCase()] : t;
    if (0 === n || 1 === n || 2 === n) {
      return n;
    }
    throw new Error("\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '".concat(s.inspect(t).replace(/'/g, "\"").replace(/\n/g, ""), "').\n"));
  }
  function y(e, t) {
    if (!p.has(e)) {
      var n = v(e);
      if (n) {
        p.set(e, h.compile(n));
      }
    }
    var r = p.get(e);
    if (r && (r(t), r.errors)) {
      throw new Error(r.errors.map(function (e) {
        return "\tValue ".concat(JSON.stringify(e.data), " ").concat(e.message, ".\n");
      }).join(""));
    }
  }
  function b(e, t, n) {
    var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : null;
    try {
      var i = m(n);
      if (0 !== i) {
        y(e, Array.isArray(n) ? n.slice(1) : []);
      }
    } catch (a) {
      var o = "Configuration for rule \"".concat(t, "\" is invalid:\n").concat(a.message);
      throw "string" === typeof r ? new Error("".concat(r, ":\n\t").concat(o)) : new Error(o);
    }
  }
  function w(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : _;
    if (e) {
      Object.keys(e).forEach(function (e) {
        if (!(n(e) || l.get(e) || null)) {
          var r = "".concat(t, ":\n\tEnvironment key \"").concat(e, "\" is unknown\n");
          throw new Error(r);
        }
      });
    }
  }
  function E(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : _;
    if (e) {
      Object.keys(e).forEach(function (r) {
        b(n(r) || f.get(r) || null, r, e[r], t);
      });
    }
  }
  function x(e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
    if (e) {
      Object.entries(e).forEach(function (e) {
        var n = o(e, 2);
        var r = n[0];
        var i = n[1];
        try {
          d.normalizeConfigGlobal(i);
        } catch (a) {
          throw new Error("ESLint configuration of global '".concat(r, "' in ").concat(t, " is invalid:\n").concat(a.message));
        }
      });
    }
  }
  function C(e, t, n) {
    if (e && !n(e)) {
      throw new Error("ESLint configuration of processor in '".concat(t, "' is invalid: '").concat(e, "' was not found."));
    }
  }
  function O(e) {
    return e.map(function (e) {
      if ("additionalProperties" === e.keyword) {
        var t = e.dataPath.length ? "".concat(e.dataPath.slice(1), ".").concat(e.params.additionalProperty) : e.params.additionalProperty;
        return "Unexpected top-level property \"".concat(t, "\"");
      }
      if ("type" === e.keyword) {
        var n = e.dataPath.slice(1);
        var r = Array.isArray(e.schema) ? e.schema.join("/") : e.schema;
        var i = JSON.stringify(e.data);
        return "Property \"".concat(n, "\" is the wrong type (expected ").concat(r, " but got `").concat(i, "`)");
      }
      var o = "." === e.dataPath[0] ? e.dataPath.slice(1) : e.dataPath;
      return "\"".concat(o, "\" ").concat(e.message, ". Value: ").concat(JSON.stringify(e.data));
    }).map(function (e) {
      return "\t- ".concat(e, ".\n");
    }).join("");
  }
  var k = c.memoize(function (e, n) {
    var r = a.relative(t.cwd(), e);
    var i = A[n];
    t.emitWarning("".concat(i, " (found in \"").concat(r, "\")"), "DeprecationWarning", n);
  });
  function S(e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
    if (!(r = r || h.compile(u))(e)) {
      throw new Error("ESLint configuration in ".concat(t, " is invalid:\n").concat(O(r.errors)));
    }
    if (Object.hasOwnProperty.call(e, "ecmaFeatures")) {
      k(t, "ESLINT_LEGACY_ECMAFEATURES");
    }
  }
  var T = new WeakSet();
  module.exports = {
    getRuleOptionsSchema: v,
    validate: function (e, t, n, r) {
      S(e, t);
      E(e.rules, t, n);
      w(e.env, t, r);
      x(e.globals, t);
      var o;
      var a = i(e.overrides || []);
      try {
        for (a.s(); !(o = a.n()).done;) {
          var s = o.value;
          E(s.rules, t, n);
          w(s.env, t, r);
          x(e.globals, t);
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
    },
    validateConfigArray: function (e) {
      var t;
      var n = Map.prototype.get.bind(e.pluginEnvironments);
      var r = Map.prototype.get.bind(e.pluginProcessors);
      var o = Map.prototype.get.bind(e.pluginRules);
      var a = i(e);
      try {
        for (a.s(); !(t = a.n()).done;) {
          var s = t.value;
          if (!T.has(s)) {
            T.add(s);
            w(s.env, s.name, n);
            x(s.globals, s.name);
            C(s.processor, s.name, r);
            E(s.rules, s.name, o);
          }
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
    },
    validateConfigSchema: S,
    validateRuleOptions: b
  };
}).call(this, require("../../../710/368"));