/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2217
 */

"use strict"

var r = require("./2218/index")
var i = require("./1115/index")
var o = require("./2222")
var a = require("./1335")
var s = require("./1336")
var c = require("./2223")
var u = require("./2224/index")
var l = require("./2245")
var f = require("./757/index")
module.exports = g
g.prototype.validate = function (e, t) {
  var n
  if ("string" == typeof e) {
    if (!(n = this.getSchema(e))) {
      throw new Error("no schema with key or ref \"" + e + "\"")
    }
  } else {
    var r = this._addSchema(e)
    n = r.validate || this._compile(r)
  }
  var i = n(t)
  if (true !== n.$async) {
    this.errors = n.errors
  }
  return i
}
g.prototype.compile = function (e, t) {
  var n = this._addSchema(e, undefined, t)
  return n.validate || this._compile(n)
}
g.prototype.addSchema = function (e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o = 0; o < e.length; o++) {
      this.addSchema(e[o], undefined, n, r)
    }
    return this
  }
  var a = this._getId(e)
  if (undefined !== a && "string" != typeof a) {
    throw new Error("schema id must be string")
  }
  E(this, t = i.normalizeId(t || a))
  this._schemas[t] = this._addSchema(e, n, r, true)
  return this
}
g.prototype.addMetaSchema = function (e, t, n) {
  this.addSchema(e, t, n, true)
  return this
}
g.prototype.validateSchema = function (e, t) {
  var e$$schema = e.$schema
  if (undefined !== e$$schema && "string" != typeof e$$schema) {
    throw new Error("$schema must be a string")
  }
  if (!(e$$schema = e$$schema || this._opts.defaultMeta || function (e) {
    var e$_opts$meta = e._opts.meta
    e._opts.defaultMeta = "object" == typeof e$_opts$meta ? e._getId(e$_opts$meta) || e$_opts$meta : e.getSchema(p) ? p : undefined
    return e._opts.defaultMeta
  }(this))) {
    this.logger.warn("meta-schema not available")
    this.errors = null
    return true
  }
  var r = this.validate(e$$schema, e)
  if (!r && t) {
    var i = "schema is invalid: " + this.errorsText()
    if ("log" != this._opts.validateSchema) {
      throw new Error(i)
    }
    this.logger.error(i)
  }
  return r
}
g.prototype.getSchema = function (e) {
  var t = v(this, e)
  switch (typeof t) {
    case "object":
      return t.validate || this._compile(t)
    case "string":
      return this.getSchema(t)
    case "undefined":
      return function (e, t) {
        var n = i.schema.call(e, {
          schema: {}
        }, t)
        if (n) {
          var n$schema = n.schema
          var n$root = n.root
          var n$baseId = n.baseId
          var u = r.call(e, n$schema, n$root, undefined, n$baseId)
          e._fragments[t] = new a({
            ref: t,
            fragment: true,
            schema: n$schema,
            root: n$root,
            baseId: n$baseId,
            validate: u
          })
          return u
        }
      }(this, e)
  }
}
g.prototype.removeSchema = function (e) {
  if (e instanceof RegExp) {
    m(this, this._schemas, e)
    m(this, this._refs, e)
    return this
  }
  switch (typeof e) {
    case "undefined":
      m(this, this._schemas)
      m(this, this._refs)
      this._cache.clear()
      return this
    case "string":
      var t = v(this, e)
      if (t) {
        this._cache.del(t.cacheKey)
      }
      delete this._schemas[e]
      delete this._refs[e]
      return this
    case "object":
      var this$_opts$serialize = this._opts.serialize,
        r = this$_opts$serialize ? this$_opts$serialize(e) : e
      this._cache.del(r)
      var o = this._getId(e)
      if (o) {
        o = i.normalizeId(o)
        delete this._schemas[o]
        delete this._refs[o]
      }
  }
  return this
}
g.prototype.addFormat = function (e, t) {
  if ("string" == typeof t) {
    t = new RegExp(t)
  }
  this._formats[e] = t
  return this
}
g.prototype.errorsText = function (e, t) {
  if (!(e = e || this.errors)) {
    return "No errors"
  }
  for (var n = undefined === (t = t || {}).separator ? ", " : t.separator, r = undefined === t.dataVar ? "data" : t.dataVar, i = "", o = 0; o < e.length; o++) {
    var a = e[o]
    if (a) {
      i += r + a.dataPath + " " + a.message + n
    }
  }
  return i.slice(0, -n.length)
}
g.prototype._addSchema = function (e, t, n, r) {
  if ("object" != typeof e && "boolean" != typeof e) {
    throw new Error("schema should be object or boolean")
  }
  var this$_opts$serialize = this._opts.serialize
  var s = this$_opts$serialize ? this$_opts$serialize(e) : e
  var c = this._cache.get(s)
  if (c) {
    return c
  }
  r = r || false !== this._opts.addUsedSchema
  var u = i.normalizeId(this._getId(e))
  if (u && r) {
    E(this, u)
  }
  var l
  var f = false !== this._opts.validateSchema && !t
  if (f && !(l = u && u == i.normalizeId(e.$schema))) {
    this.validateSchema(e, true)
  }
  var d = i.ids.call(this, e)
  var h = new a({
    id: u,
    schema: e,
    localRefs: d,
    cacheKey: s,
    meta: n
  })
  if ("#" != u[0] && r) {
    this._refs[u] = h
  }
  this._cache.put(s, h)
  if (f && l) {
    this.validateSchema(e, true)
  }
  return h
}
g.prototype._compile = function (e, t) {
  if (e.compiling) {
    e.validate = o
    o.schema = e.schema
    o.errors = null
    o.root = t || o
    if (true === e.schema.$async) {
      o.$async = true
    }
    return o
  }
  var /* [auto-meaningful-name] */this$_opts
  var i
  e.compiling = true
  if (e.meta) {
    this$_opts = this._opts
    this._opts = this._metaOpts
  }
  try {
    i = r.call(this, e.schema, t, e.localRefs)
  } catch (a) {
    delete e.validate
    throw a
  } finally {
    e.compiling = false
    if (e.meta) {
      this._opts = this$_opts
    }
  }
  e.validate = i
  e.refs = i.refs
  e.refVal = i.refVal
  e.root = i.root
  return i
  function o() {
    var e$validate = e.validate
    var n = e$validate.apply(this, arguments)
    o.errors = e$validate.errors
    return n
  }
}
g.prototype.compileAsync = require("./2246")
var d = require("./2247/index")
g.prototype.addKeyword = d.add
g.prototype.getKeyword = d.get
g.prototype.removeKeyword = d.remove
g.prototype.validateKeyword = d.validate
var h = require("./1117")
g.ValidationError = h.Validation
g.MissingRefError = h.MissingRef
g.$dataMetaSchema = l
var p = "http://json-schema.org/draft-07/schema"
var _ = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"]
var A = ["/properties"]
function g(e) {
  if (!(this instanceof g)) {
    return new g(e)
  }
  e = this._opts = f.copy(e) || {};
  (function (e) {
    var e$_opts$logger = e._opts.logger
    if (false === e$_opts$logger) {
      e.logger = {
        log: x,
        warn: x,
        error: x
      }
    } else {
      if (undefined === e$_opts$logger) {
        e$_opts$logger = console
      }
      if (!("object" == typeof e$_opts$logger && e$_opts$logger.log && e$_opts$logger.warn && e$_opts$logger.error)) {
        throw new Error("logger must implement log, warn and error methods")
      }
      e.logger = e$_opts$logger
    }
  })(this)
  this._schemas = {}
  this._refs = {}
  this._fragments = {}
  this._formats = c(e.format)
  this._cache = e.cache || new o()
  this._loadingSchemas = {}
  this._compilations = []
  this.RULES = u()
  this._getId = function (e) {
    switch (e.schemaId) {
      case "auto":
        return w
      case "id":
        return y
      default:
        return b
    }
  }(e)
  e.loopRequired = e.loopRequired || 1 / 0
  if ("property" == e.errorDataPath) {
    e._errorDataPathProperty = true
  }
  if (undefined === e.serialize) {
    e.serialize = s
  }
  this._metaOpts = function (e) {
    for (var t = f.copy(e._opts), n = 0; n < _.length; n++) {
      delete t[_[n]]
    }
    return t
  }(this)
  if (e.formats) {
    (function (e) {
      for (var t in e._opts.formats) {
        var n = e._opts.formats[t]
        e.addFormat(t, n)
      }
    })(this)
  }
  if (e.keywords) {
    (function (e) {
      for (var t in e._opts.keywords) {
        var n = e._opts.keywords[t]
        e.addKeyword(t, n)
      }
    })(this)
  }
  (function (e) {
    var t
    if (e._opts.$data) {
      t = require("./2250")
      e.addMetaSchema(t, t.$id, true)
    }
    if (false === e._opts.meta) {
      return
    }
    var r = require("./1342")
    if (e._opts.$data) {
      r = l(r, A)
    }
    e.addMetaSchema(r, p, true)
    e._refs["http://json-schema.org/schema"] = p
  })(this)
  if ("object" == typeof e.meta) {
    this.addMetaSchema(e.meta)
  }
  if (e.nullable) {
    this.addKeyword("nullable", {
      metaSchema: {
        type: "boolean"
      }
    })
  }
  (function (e) {
    var e$_opts$schemas = e._opts.schemas
    if (!e$_opts$schemas) {
      return
    }
    if (Array.isArray(e$_opts$schemas)) {
      e.addSchema(e$_opts$schemas)
    } else {
      for (var n in e$_opts$schemas) e.addSchema(e$_opts$schemas[n], n)
    }
  })(this)
}
function v(e, t) {
  t = i.normalizeId(t)
  return e._schemas[t] || e._refs[t] || e._fragments[t]
}
function m(e, t, n) {
  for (var r in t) {
    var i = t[r]
    if (!(i.meta || n && !n.test(r))) {
      e._cache.del(i.cacheKey)
      delete t[r]
    }
  }
}
function y(e) {
  if (e.$id) {
    this.logger.warn("schema $id ignored", e.$id)
  }
  return e.id
}
function b(e) {
  if (e.id) {
    this.logger.warn("schema id ignored", e.id)
  }
  return e.$id
}
function w(e) {
  if (e.$id && e.id && e.$id != e.id) {
    throw new Error("schema $id is different from id")
  }
  return e.$id || e.id
}
function E(e, t) {
  if (e._schemas[t] || e._refs[t]) {
    throw new Error("schema with key or id \"" + t + "\" already exists")
  }
}
function x() {}
