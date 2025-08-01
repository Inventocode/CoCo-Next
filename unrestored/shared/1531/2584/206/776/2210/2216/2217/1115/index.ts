"use strict";

var r = require("./2219");
var i = require("../2218/1116");
var o = require("../757/index");
var a = require("../1335");
var s = require("./2221");
function c(e, t, n) {
  var r = this._refs[n];
  if ("string" == typeof r) {
    if (!this._refs[r]) {
      return c.call(this, e, t, r);
    }
    r = this._refs[r];
  }
  if ((r = r || this._schemas[n]) instanceof a) {
    return p(r.schema, this._opts.inlineRefs) ? r.schema : r.validate || this._compile(r);
  }
  var i;
  var o;
  var s;
  var l = u.call(this, t, n);
  if (l) {
    i = l.schema;
    t = l.root;
    s = l.baseId;
  }
  if (i instanceof a) {
    o = i.validate || e.call(this, i.schema, t, void 0, s);
  } else {
    if (void 0 !== i) {
      o = p(i, this._opts.inlineRefs) ? i : e.call(this, i, t, void 0, s);
    }
  }
  return o;
}
function u(e, t) {
  var n = r.parse(t);
  var i = A(n);
  var o = _(this._getId(e.schema));
  if (0 === Object.keys(e.schema).length || i !== o) {
    var s = v(i);
    var c = this._refs[s];
    if ("string" == typeof c) {
      return l.call(this, e, c, n);
    }
    if (c instanceof a) {
      if (!c.validate) {
        this._compile(c);
      }
      e = c;
    } else {
      if (!((c = this._schemas[s]) instanceof a)) {
        return;
      }
      if (c.validate || this._compile(c), s == v(t)) {
        return {
          schema: c,
          root: e,
          baseId: o
        };
      }
      e = c;
    }
    if (!e.schema) {
      return;
    }
    o = _(this._getId(e.schema));
  }
  return d.call(this, n, o, e.schema, e);
}
function l(e, t, n) {
  var r = u.call(this, e, t);
  if (r) {
    var i = r.schema;
    var o = r.baseId;
    e = r.root;
    var a = this._getId(i);
    if (a) {
      o = m(o, a);
    }
    return d.call(this, n, o, i, e);
  }
}
module.exports = c;
c.normalizeId = v;
c.fullPath = _;
c.url = m;
c.ids = function (e) {
  var t = v(this._getId(e));
  var n = {
    "": t
  };
  var a = {
    "": _(t, !1)
  };
  var c = {};
  var u = this;
  s(e, {
    allKeys: !0
  }, function (e, t, s, l, f, d, h) {
    if ("" !== t) {
      var p = u._getId(e);
      var _ = n[l];
      var A = a[l] + "/" + f;
      if (void 0 !== h && (A += "/" + ("number" == typeof h ? h : o.escapeFragment(h))), "string" == typeof p) {
        p = _ = v(_ ? r.resolve(_, p) : p);
        var g = u._refs[p];
        if ("string" == typeof g && (g = u._refs[g]), g && g.schema) {
          if (!i(e, g.schema)) {
            throw new Error('id "' + p + '" resolves to more than one schema');
          }
        } else if (p != v(A)) {
          if ("#" == p[0]) {
            if (c[p] && !i(e, c[p])) {
              throw new Error('id "' + p + '" resolves to more than one schema');
            }
            c[p] = e;
          } else {
            u._refs[p] = A;
          }
        }
      }
      n[t] = _;
      a[t] = A;
    }
  });
  return c;
};
c.inlineRef = p;
c.schema = u;
var f = o.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
function d(e, t, n, r) {
  if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
    for (var i = e.fragment.split("/"), a = 1; a < i.length; a++) {
      var s = i[a];
      if (s) {
        if (void 0 === (n = n[s = o.unescapeFragment(s)])) {
          break;
        }
        var c;
        if (!f[s] && ((c = this._getId(n)) && (t = m(t, c)), n.$ref)) {
          var l = m(t, n.$ref);
          var d = u.call(this, r, l);
          if (d) {
            n = d.schema;
            r = d.root;
            t = d.baseId;
          }
        }
      }
    }
    return void 0 !== n && n !== r.schema ? {
      schema: n,
      root: r,
      baseId: t
    } : void 0;
  }
}
var h = o.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);
function p(e, t) {
  return !1 !== t && (void 0 === t || !0 === t ? function e(t) {
    var n;
    if (Array.isArray(t)) {
      for (var r = 0; r < t.length; r++) {
        if ("object" == typeof (n = t[r]) && !e(n)) {
          return !1;
        }
      }
    } else {
      for (var i in t) {
        if ("$ref" == i) {
          return !1;
        }
        if ("object" == typeof (n = t[i]) && !e(n)) {
          return !1;
        }
      }
    }
    return !0;
  }(e) : t ? function e(t) {
    var n;
    var r = 0;
    if (Array.isArray(t)) {
      for (var i = 0; i < t.length; i++) {
        if ("object" == typeof (n = t[i]) && (r += e(n)), r == 1 / 0) {
          return 1 / 0;
        }
      }
    } else {
      for (var o in t) {
        if ("$ref" == o) {
          return 1 / 0;
        }
        if (h[o]) {
          r++;
        } else if ("object" == typeof (n = t[o]) && (r += e(n) + 1), r == 1 / 0) {
          return 1 / 0;
        }
      }
    }
    return r;
  }(e) <= t : void 0);
}
function _(e, t) {
  if (!1 !== t) {
    e = v(e);
  }
  return A(r.parse(e));
}
function A(e) {
  return r.serialize(e).split("#")[0] + "#";
}
var g = /#\/?$/;
function v(e) {
  return e ? e.replace(g, "") : "";
}
function m(e, t) {
  t = v(t);
  return r.resolve(e, t);
}