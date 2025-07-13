"use strict";

import * as r from "../1112/index";
import * as i from "../757/index";
import * as o from "../1114";
import * as a from "../1329";
import * as s from "./1330";
var c = i.ucs2length;
import * as u from "../757/1113";
var l = o.Validation;
function f(e, t, n) {
  var r = d.call(this, e, t, n);
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
function h(e, t, n) {
  var r = d.call(this, e, t, n);
  if (r >= 0) {
    this._compilations.splice(r, 1);
  }
}
function d(e, t, n) {
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
module.exports = function e(t, n, d, m) {
  var y = this;
  var b = this._opts;
  var w = [void 0];
  var E = {};
  var x = [];
  var C = {};
  var O = [];
  var S = {};
  var k = [];
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
    var F = P(t, n, d, m);
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
    h.call(this, t, n, m);
  }
  function P(t, a, f, h) {
    var d = !a || a && a.schema == t;
    if (a.schema != n.schema) {
      return e.call(y, t, a, f, h);
    }
    var m;
    var C = !0 === t.$async;
    var S = s({
      isTop: !0,
      schema: t,
      isRoot: d,
      baseId: h,
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
    S = v(w, A) + v(x, p) + v(O, _) + v(k, g) + S;
    if (b.processCode) {
      S = b.processCode(S, t);
    }
    try {
      m = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", S)(y, I, D, n, w, O, k, u, c, l);
      w[0] = m;
    } catch (T) {
      throw y.logger.error("Error compiling schema, function code:", S), T;
    }
    m.schema = t;
    m.errors = null;
    m.refs = E;
    m.refVal = w;
    m.root = d ? m : a;
    if (C) {
      m.$async = !0;
    }
    if (!0 === b.sourceCode) {
      m.source = {
        code: S,
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
      var f = d && d[i];
      if (f) {
        l = r.inlineRef(f, b.inlineRefs) ? f : e.call(y, f, n, d, t);
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
          n = S[t];
        if (void 0 === n) {
          n = S[t] = O.length;
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
    var f = k.length;
    k[f] = s;
    return {
      code: "customRule" + f,
      validate: s
    };
  }
};