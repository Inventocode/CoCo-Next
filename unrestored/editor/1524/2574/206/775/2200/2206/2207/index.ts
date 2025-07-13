"use strict";

import * as r from "./2208/index";
import * as i from "./1112/index";
import * as o from "./2212";
import * as a from "./1328";
import * as s from "./1329";
import * as c from "./2213";
import * as u from "./2214/index";
import * as l from "./2235";
import * as f from "./757/index";
module.exports = g;
g.prototype.validate = function (e, t) {
  var n;
  if ("string" == typeof e) {
    if (!(n = this.getSchema(e))) {
      throw new Error('no schema with key or ref "' + e + '"');
    }
  } else {
    var r = this._addSchema(e);
    n = r.validate || this._compile(r);
  }
  var i = n(t);
  if (!0 !== n.$async) {
    this.errors = n.errors;
  }
  return i;
};
g.prototype.compile = function (e, t) {
  var n = this._addSchema(e, void 0, t);
  return n.validate || this._compile(n);
};
g.prototype.addSchema = function (e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o = 0; o < e.length; o++) {
      this.addSchema(e[o], void 0, n, r);
    }
    return this;
  }
  var a = this._getId(e);
  if (void 0 !== a && "string" != typeof a) {
    throw new Error("schema id must be string");
  }
  E(this, t = i.normalizeId(t || a));
  this._schemas[t] = this._addSchema(e, n, r, !0);
  return this;
};
g.prototype.addMetaSchema = function (e, t, n) {
  this.addSchema(e, t, n, !0);
  return this;
};
g.prototype.validateSchema = function (e, t) {
  var n = e.$schema;
  if (void 0 !== n && "string" != typeof n) {
    throw new Error("$schema must be a string");
  }
  if (!(n = n || this._opts.defaultMeta || function (e) {
    var t = e._opts.meta;
    e._opts.defaultMeta = "object" == typeof t ? e._getId(t) || t : e.getSchema(p) ? p : void 0;
    return e._opts.defaultMeta;
  }(this))) {
    this.logger.warn("meta-schema not available");
    this.errors = null;
    return !0;
  }
  var r = this.validate(n, e);
  if (!r && t) {
    var i = "schema is invalid: " + this.errorsText();
    if ("log" != this._opts.validateSchema) {
      throw new Error(i);
    }
    this.logger.error(i);
  }
  return r;
};
g.prototype.getSchema = function (e) {
  var t = v(this, e);
  switch (typeof t) {
    case "object":
      return t.validate || this._compile(t);
    case "string":
      return this.getSchema(t);
    case "undefined":
      return function (e, t) {
        var n = i.schema.call(e, {
          schema: {}
        }, t);
        if (n) {
          var o = n.schema;
          var s = n.root;
          var c = n.baseId;
          var u = r.call(e, o, s, void 0, c);
          e._fragments[t] = new a({
            ref: t,
            fragment: !0,
            schema: o,
            root: s,
            baseId: c,
            validate: u
          });
          return u;
        }
      }(this, e);
  }
};
g.prototype.removeSchema = function (e) {
  if (e instanceof RegExp) {
    m(this, this._schemas, e);
    m(this, this._refs, e);
    return this;
  }
  switch (typeof e) {
    case "undefined":
      m(this, this._schemas);
      m(this, this._refs);
      this._cache.clear();
      return this;
    case "string":
      var t = v(this, e);
      if (t) {
        this._cache.del(t.cacheKey);
      }
      delete this._schemas[e];
      delete this._refs[e];
      return this;
    case "object":
      var n = this._opts.serialize,
        r = n ? n(e) : e;
      this._cache.del(r);
      var o = this._getId(e);
      if (o) {
        o = i.normalizeId(o);
        delete this._schemas[o];
        delete this._refs[o];
      }
  }
  return this;
};
g.prototype.addFormat = function (e, t) {
  if ("string" == typeof t) {
    t = new RegExp(t);
  }
  this._formats[e] = t;
  return this;
};
g.prototype.errorsText = function (e, t) {
  if (!(e = e || this.errors)) {
    return "No errors";
  }
  for (var n = void 0 === (t = t || {}).separator ? ", " : t.separator, r = void 0 === t.dataVar ? "data" : t.dataVar, i = "", o = 0; o < e.length; o++) {
    var a = e[o];
    if (a) {
      i += r + a.dataPath + " " + a.message + n;
    }
  }
  return i.slice(0, -n.length);
};
g.prototype._addSchema = function (e, t, n, r) {
  if ("object" != typeof e && "boolean" != typeof e) {
    throw new Error("schema should be object or boolean");
  }
  var o = this._opts.serialize;
  var s = o ? o(e) : e;
  var c = this._cache.get(s);
  if (c) {
    return c;
  }
  r = r || !1 !== this._opts.addUsedSchema;
  var u = i.normalizeId(this._getId(e));
  if (u && r) {
    E(this, u);
  }
  var l;
  var f = !1 !== this._opts.validateSchema && !t;
  if (f && !(l = u && u == i.normalizeId(e.$schema))) {
    this.validateSchema(e, !0);
  }
  var h = i.ids.call(this, e);
  var d = new a({
    id: u,
    schema: e,
    localRefs: h,
    cacheKey: s,
    meta: n
  });
  if ("#" != u[0] && r) {
    this._refs[u] = d;
  }
  this._cache.put(s, d);
  if (f && l) {
    this.validateSchema(e, !0);
  }
  return d;
};
g.prototype._compile = function (e, t) {
  if (e.compiling) {
    e.validate = o;
    o.schema = e.schema;
    o.errors = null;
    o.root = t || o;
    if (!0 === e.schema.$async) {
      o.$async = !0;
    }
    return o;
  }
  var n;
  var i;
  e.compiling = !0;
  if (e.meta) {
    n = this._opts;
    this._opts = this._metaOpts;
  }
  try {
    i = r.call(this, e.schema, t, e.localRefs);
  } catch (a) {
    throw delete e.validate, a;
  } finally {
    e.compiling = !1;
    if (e.meta) {
      this._opts = n;
    }
  }
  e.validate = i;
  e.refs = i.refs;
  e.refVal = i.refVal;
  e.root = i.root;
  return i;
  function o() {
    var t = e.validate;
    var n = t.apply(this, arguments);
    o.errors = t.errors;
    return n;
  }
};
g.prototype.compileAsync = require("./2236");
import * as h from "./2237/index";
g.prototype.addKeyword = h.add;
g.prototype.getKeyword = h.get;
g.prototype.removeKeyword = h.remove;
g.prototype.validateKeyword = h.validate;
import * as d from "./1114";
g.ValidationError = d.Validation;
g.MissingRefError = d.MissingRef;
g.$dataMetaSchema = l;
var p = "http://json-schema.org/draft-07/schema";
var _ = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"];
var A = ["/properties"];
function g(e) {
  if (!(this instanceof g)) {
    return new g(e);
  }
  e = this._opts = f.copy(e) || {};
  (function (e) {
    var t = e._opts.logger;
    if (!1 === t) {
      e.logger = {
        log: x,
        warn: x,
        error: x
      };
    } else {
      if (void 0 === t && (t = console), !("object" == typeof t && t.log && t.warn && t.error)) {
        throw new Error("logger must implement log, warn and error methods");
      }
      e.logger = t;
    }
  })(this);
  this._schemas = {};
  this._refs = {};
  this._fragments = {};
  this._formats = c(e.format);
  this._cache = e.cache || new o();
  this._loadingSchemas = {};
  this._compilations = [];
  this.RULES = u();
  this._getId = function (e) {
    switch (e.schemaId) {
      case "auto":
        return w;
      case "id":
        return y;
      default:
        return b;
    }
  }(e);
  e.loopRequired = e.loopRequired || 1 / 0;
  if ("property" == e.errorDataPath) {
    e._errorDataPathProperty = !0;
  }
  if (void 0 === e.serialize) {
    e.serialize = s;
  }
  this._metaOpts = function (e) {
    for (var t = f.copy(e._opts), n = 0; n < _.length; n++) {
      delete t[_[n]];
    }
    return t;
  }(this);
  if (e.formats) {
    (function (e) {
      for (var t in e._opts.formats) {
        var n = e._opts.formats[t];
        e.addFormat(t, n);
      }
    })(this);
  }
  if (e.keywords) {
    (function (e) {
      for (var t in e._opts.keywords) {
        var n = e._opts.keywords[t];
        e.addKeyword(t, n);
      }
    })(this);
  }
  (function (e) {
    var t;
    if (e._opts.$data) {
      t = require("./2240");
      e.addMetaSchema(t, t.$id, !0);
    }
    if (!1 === e._opts.meta) {
      return;
    }
    var r = require("./1335");
    if (e._opts.$data) {
      r = l(r, A);
    }
    e.addMetaSchema(r, p, !0);
    e._refs["http://json-schema.org/schema"] = p;
  })(this);
  if ("object" == typeof e.meta) {
    this.addMetaSchema(e.meta);
  }
  if (e.nullable) {
    this.addKeyword("nullable", {
      metaSchema: {
        type: "boolean"
      }
    });
  }
  (function (e) {
    var t = e._opts.schemas;
    if (!t) {
      return;
    }
    if (Array.isArray(t)) {
      e.addSchema(t);
    } else {
      for (var n in t) e.addSchema(t[n], n);
    }
  })(this);
}
function v(e, t) {
  t = i.normalizeId(t);
  return e._schemas[t] || e._refs[t] || e._fragments[t];
}
function m(e, t, n) {
  for (var r in t) {
    var i = t[r];
    if (!(i.meta || n && !n.test(r))) {
      e._cache.del(i.cacheKey);
      delete t[r];
    }
  }
}
function y(e) {
  if (e.$id) {
    this.logger.warn("schema $id ignored", e.$id);
  }
  return e.id;
}
function b(e) {
  if (e.id) {
    this.logger.warn("schema id ignored", e.id);
  }
  return e.$id;
}
function w(e) {
  if (e.$id && e.id && e.$id != e.id) {
    throw new Error("schema $id is different from id");
  }
  return e.$id || e.id;
}
function E(e, t) {
  if (e._schemas[t] || e._refs[t]) {
    throw new Error('schema with key or id "' + t + '" already exists');
  }
}
function x() {}