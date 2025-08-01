"use strict";

var r = require("../1115/index");
var i = require("../757/index");
var o = require("../1117");
var a = require("../1336");
var s = require("./1337");
var c = i.ucs2length;
var u = require("./1116");
var l = o.Validation;
function f(e, t, n) {
  var r = h.call(this, e, t, n);
  return r >= 0 ? {
    index: r,
    compiling: !0
  } : (r = this._compilations.length, this._compilations[r] = {
    schema: e,
    root: t,
    baseId: n
  }, {
    index: r,
    compiling: !1
  });
}
function d(e, t, n) {
  var r = h.call(this, e, t, n);
  if (r >= 0) {
    this._compilations.splice(r, 1);
  }
}
function h(e, t, n) {
  for (var r = 0; r < this._compilations.length; r++) {
    var i = this._compilations[r];
    if (i.schema == e && i.root == t && i.baseId == n) {
      return r;
    }
  }
  return -1;
}
function p(e, t) {
  return "var pattern" + e + " = new RegExp(" + i.toQuotedString(t[e]) + ");";
}
function _(e) {
  return "var default" + e + " = defaults[" + e + "];";
}
function A(e, t) {
  return void 0 === t[e] ? "" : "var refVal" + e + " = refVal[" + e + "];";
}
function g(e) {
  return "var customRule" + e + " = customRules[" + e + "];";
}
function v(e, t) {
  if (!e.length) {
    return "";
  }
  for (var n = "", r = 0; r < e.length; r++) {
    n += t(r, e);
  }
  return n;
}
module.exports = function e(t, n, h, m) {
  var y = this;
  var b = this._opts;
  var w = [void 0];
  var E = {};
  var x = [];
  var C = {};
  var O = [];
  var k = {};
  var S = [];
  n = n || {
    schema: t,
    refVal: w,
    refs: E
  };
  var T = f.call(this, t, n, m);
  var B = this._compilations[T.index];
  if (T.compiling) {
    return B.callValidate = function e() {
      var t = B.validate;
      var n = t.apply(this, arguments);
      e.errors = t.errors;
      return n;
    };
  }
  var D = this._formats;
  var I = this.RULES;
  try {
    var F = P(t, n, h, m);
    B.validate = F;
    var R = B.callValidate;
    if (R) {
      R.schema = F.schema;
      R.errors = null;
      R.refs = F.refs;
      R.refVal = F.refVal;
      R.root = F.root;
      R.$async = F.$async;
      if (b.sourceCode) {
        R.source = F.source;
      }
    }
    return F;
  } finally {
    d.call(this, t, n, m);
  }
  function P(t, a, f, d) {
    var h = !a || a && a.schema == t;
    if (a.schema != n.schema) {
      return e.call(y, t, a, f, d);
    }
    var m;
    var C = !0 === t.$async;
    var k = s({
      isTop: !0,
      schema: t,
      isRoot: h,
      baseId: d,
      root: a,
      schemaPath: "",
      errSchemaPath: "#",
      errorPath: '""',
      MissingRefError: o.MissingRef,
      RULES: I,
      validate: s,
      util: i,
      resolve: r,
      resolveRef: N,
      usePattern: L,
      useDefault: U,
      useCustomRule: H,
      opts: b,
      formats: D,
      logger: y.logger,
      self: y
    });
    k = v(w, A) + v(x, p) + v(O, _) + v(S, g) + k;
    if (b.processCode) {
      k = b.processCode(k, t);
    }
    try {
      m = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", k)(y, I, D, n, w, O, S, u, c, l);
      w[0] = m;
    } catch (T) {
      throw y.logger.error("Error compiling schema, function code:", k), T;
    }
    m.schema = t;
    m.errors = null;
    m.refs = E;
    m.refVal = w;
    m.root = h ? m : a;
    if (C) {
      m.$async = !0;
    }
    if (!0 === b.sourceCode) {
      m.source = {
        code: k,
        patterns: x,
        defaults: O
      };
    }
    return m;
  }
  function N(t, i, o) {
    i = r.url(t, i);
    var a;
    var s;
    var c = E[i];
    if (void 0 !== c) {
      return j(a = w[c], s = "refVal[" + c + "]");
    }
    if (!o && n.refs) {
      var u = n.refs[i];
      if (void 0 !== u) {
        return j(a = n.refVal[u], s = M(i, a));
      }
    }
    s = M(i);
    var l = r.call(y, P, n, i);
    if (void 0 === l) {
      var f = h && h[i];
      if (f) {
        l = r.inlineRef(f, b.inlineRefs) ? f : e.call(y, f, n, h, t);
      }
    }
    if (void 0 !== l) {
      (function (e, t) {
        var n = E[e];
        w[n] = t;
      })(i, l);
      return j(l, s);
    }
    !function (e) {
      delete E[e];
    }(i);
  }
  function M(e, t) {
    var n = w.length;
    w[n] = t;
    E[e] = n;
    return "refVal" + n;
  }
  function j(e, t) {
    return "object" == typeof e || "boolean" == typeof e ? {
      code: t,
      schema: e,
      inline: !0
    } : {
      code: t,
      $async: e && !!e.$async
    };
  }
  function L(e) {
    var t = C[e];
    if (void 0 === t) {
      t = C[e] = x.length;
      x[t] = e;
    }
    return "pattern" + t;
  }
  function U(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
        return "" + e;
      case "string":
        return i.toQuotedString(e);
      case "object":
        if (null === e) {
          return "null";
        }
        var t = a(e),
          n = k[t];
        if (void 0 === n) {
          n = k[t] = O.length;
          O[n] = e;
        }
        return "default" + n;
    }
  }
  function H(e, t, n, r) {
    if (!1 !== y._opts.validateSchema) {
      var i = e.definition.dependencies;
      if (i && !i.every(function (e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      })) {
        throw new Error("parent schema must have all required keywords: " + i.join(","));
      }
      var o = e.definition.validateSchema;
      if (o) {
        if (!o(t)) {
          var a = "keyword schema is invalid: " + y.errorsText(o.errors);
          if ("log" != y._opts.validateSchema) {
            throw new Error(a);
          }
          y.logger.error(a);
        }
      }
    }
    var s;
    var c = e.definition.compile;
    var u = e.definition.inline;
    var l = e.definition.macro;
    if (c) {
      s = c.call(y, t, n, r);
    } else if (l) {
      s = l.call(y, t, n, r);
      if (!1 !== b.validateSchema) {
        y.validateSchema(s, !0);
      }
    } else if (u) {
      s = u.call(y, r, e.keyword, t, n);
    } else if (!(s = e.definition.validate)) {
      return;
    }
    if (void 0 === s) {
      throw new Error('custom keyword "' + e.keyword + '"failed to compile');
    }
    var f = S.length;
    S[f] = s;
    return {
      code: "customRule" + f,
      validate: s
    };
  }
};