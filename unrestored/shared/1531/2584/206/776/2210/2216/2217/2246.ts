/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2246
 */

"use strict"

var /* [auto-meaningful-name] */require$_1117$MissingRef = require("./1117").MissingRef
module.exports = function e(t, n, i) {
  var o = this
  if ("function" != typeof this._opts.loadSchema) {
    throw new Error("options.loadSchema should be a function")
  }
  if ("function" == typeof n) {
    i = n
    n = undefined
  }
  var a = s(t).then(function () {
    var e = o._addSchema(t, undefined, n)
    return e.validate || function e(t) {
      try {
        return o._compile(t)
      } catch (a) {
        if (a instanceof require$_1117$MissingRef) {
          return i(a)
        }
        throw a
      }
      function i(r) {
        var /* [auto-meaningful-name] */r$missingSchema = r.missingSchema
        if (u(r$missingSchema)) {
          throw new Error("Schema " + r$missingSchema + " is loaded but " + r.missingRef + " cannot be resolved")
        }
        var a = o._loadingSchemas[r$missingSchema]
        if (!a) {
          (a = o._loadingSchemas[r$missingSchema] = o._opts.loadSchema(r$missingSchema)).then(c, c)
        }
        return a.then(function (e) {
          if (!u(r$missingSchema)) {
            return s(e).then(function () {
              if (!u(r$missingSchema)) {
                o.addSchema(e, r$missingSchema, undefined, n)
              }
            })
          }
        }).then(function () {
          return e(t)
        })
        function c() {
          delete o._loadingSchemas[r$missingSchema]
        }
        function u(e) {
          return o._refs[e] || o._schemas[e]
        }
      }
    }(e)
  })
  if (i) {
    a.then(function (e) {
      i(null, e)
    }, i)
  }
  return a
  function s(t) {
    var /* [auto-meaningful-name] */t$$schema = t.$schema
    return t$$schema && !o.getSchema(t$$schema) ? e.call(o, {
      $ref: t$$schema
    }, true) : Promise.resolve()
  }
}
