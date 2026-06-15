/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：185__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"./1"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../307/12"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"./3"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33/index"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"../307/23"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../307/11"
var d = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._usePgNative = !!t.usePgNative
  }
  e.prototype.setupOnce = function (e, t) {
    var /* [auto-meaningful-name] */r$native
    var r = Module_33.c("pg")
    if (r) {
      if (!this._usePgNative || (null === (r$native = r.native) || undefined === r$native ? undefined : r$native.Client)) {
        var /* [auto-meaningful-name] */This$_usePgNativeR$nativeR$Client = (this._usePgNative ? r.native : r).Client
        Module_23.e(This$_usePgNativeR$nativeR$Client.prototype, "query", function (e) {
          return function (n, r, i) {
            var o
            var a
            var s
            var u = null === (a = null === (o = t().getScope()) || undefined === o ? undefined : o.getSpan()) || undefined === a ? undefined : a.startChild({
              description: "string" === typeof n ? n : n.text,
              op: "db"
            })
            if ("function" === typeof i) {
              return e.call(this, n, r, function (e, t) {
                var n
                if (!(null === (n = u) || undefined === n)) {
                  n.finish()
                }
                i(e, t)
              })
            }
            if ("function" === typeof r) {
              return e.call(this, n, function (e, t) {
                var n
                if (!(null === (n = u) || undefined === n)) {
                  n.finish()
                }
                r(e, t)
              })
            }
            var c = "undefined" !== typeof r ? e.call(this, n, r) : e.call(this, n)
            return Module_11.n(c) ? c.then(function (e) {
              var t
              if (!(null === (t = u) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = u) || undefined === s || s.finish(), c)
          }
        })
      } else if (Module_1.a) {
        Module_12.c.error("Postgres Integration was unable to access 'pg-native' bindings.")
      }
    } else if (Module_1.a) {
      Module_12.c.error("Postgres Integration was unable to require `pg` package.")
    }
  }
  e.id = "Postgres"
  return e
}()
var h = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = Module_33.c("mysql/lib/Connection.js")
    if (n) {
      Module_23.e(n, "createQuery", function (e) {
        return function (n, r, i) {
          var o
          var a
          var s = null === (a = null === (o = t().getScope()) || undefined === o ? undefined : o.getSpan()) || undefined === a ? undefined : a.startChild({
            description: "string" === typeof n ? n : n.sql,
            op: "db"
          })
          return "function" === typeof i ? e.call(this, n, r, function (e, t, n) {
            var r
            if (!(null === (r = s) || undefined === r)) {
              r.finish()
            }
            i(e, t, n)
          }) : "function" === typeof r ? e.call(this, n, function (e, t, n) {
            var i
            if (!(null === (i = s) || undefined === i)) {
              i.finish()
            }
            r(e, t, n)
          }) : e.call(this, n, r, i)
        }
      })
    } else {
      if (Module_1.a) {
        Module_12.c.error("Mysql Integration was unable to require `mysql` package.")
      }
    }
  }
  e.id = "Mysql"
  return e
}()
var g = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"]
var m = {
  bulkWrite: ["operations"],
  countDocuments: ["query"],
  createIndex: ["fieldOrSpec"],
  createIndexes: ["indexSpecs"],
  deleteMany: ["filter"],
  deleteOne: ["filter"],
  distinct: ["key", "query"],
  dropIndex: ["indexName"],
  find: ["query"],
  findOne: ["query"],
  findOneAndDelete: ["filter"],
  findOneAndReplace: ["filter", "replacement"],
  findOneAndUpdate: ["filter", "update"],
  indexExists: ["indexes"],
  insertMany: ["docs"],
  insertOne: ["doc"],
  mapReduce: ["map", "reduce"],
  rename: ["newName"],
  replaceOne: ["filter", "doc"],
  updateMany: ["filter", "update"],
  updateOne: ["filter", "update"]
}
var v = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._operations = Array.isArray(t.operations) ? t.operations : g
    this._describeOperations = !("describeOperations" in t) || t.describeOperations
    this._useMongoose = !!t.useMongoose
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this._useMongoose ? "mongoose" : "mongodb"
    var r = Module_33.c(n)
    if (r) {
      this._instrumentOperations(r.Collection, this._operations, t)
    } else {
      if (Module_1.a) {
        Module_12.c.error("Mongo Integration was unable to require `" + n + "` package.")
      }
    }
  }
  e.prototype._instrumentOperations = function (e, t, n) {
    var r = this
    t.forEach(function (t) {
      return r._patchOperation(e, t, n)
    })
  }
  e.prototype._patchOperation = function (e, t, n) {
    if (t in e.prototype) {
      var r = this._getSpanContextFromOperationArguments.bind(this)
      Module_23.e(e.prototype, t, function (e) {
        return function () {
          for (var i, a, s, u, c = [], l = 0; l < arguments.length; l++) {
            c[l] = arguments[l]
          }
          var f = c[c.length - 1]
          var d = null === (i = n().getScope()) || undefined === i ? undefined : i.getSpan()
          if ("function" !== typeof f || "mapReduce" === t && 2 === c.length) {
            var h = null === (a = d) || undefined === a ? undefined : a.startChild(r(this, t, c))
            var g = e.call.apply(e, Module_3.e([this], c))
            return Module_11.n(g) ? g.then(function (e) {
              var t
              if (!(null === (t = h) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = h) || undefined === s || s.finish(), g)
          }
          var m = null === (u = d) || undefined === u ? undefined : u.startChild(r(this, t, c.slice(0, -1)))
          return e.call.apply(e, Module_3.e([this], c.slice(0, -1), [
            function (e, t) {
              var n
              if (!(null === (n = m) || undefined === n)) {
                n.finish()
              }
              f(e, t)
            }
          ]))
        }
      })
    }
  }
  e.prototype._getSpanContextFromOperationArguments = function (e, t, n) {
    var r = {
      collectionName: e.collectionName,
      dbName: e.dbName,
      namespace: e.namespace
    }
    var i = {
      op: "db",
      description: t,
      data: r
    }
    var a = m[t]
    var s = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations
    if (!a || !s) {
      return i
    }
    try {
      if ("mapReduce" === t) {
        var u = Module_3.c(n, 2)
        var c = u[0]
        var l = u[1]
        r[a[0]] = "string" === typeof c ? c : c.name || "<anonymous>"
        r[a[1]] = "string" === typeof l ? l : l.name || "<anonymous>"
      } else {
        for (var f = 0; f < a.length; f++) {
          r[a[f]] = JSON.stringify(n[f])
        }
      }
    } catch (p) {}
    return i
  }
  e.id = "Mongo"
  return e
}()
export { d }
export { h }
export { v }
