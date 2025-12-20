/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：799__part-4
 */

"use strict"

import { r } from "./index__part-0"
import { F } from "./index__part-3"
import * as /* [auto-meaningful-name] */$_317 from "./317"
import * as /* [auto-meaningful-name] */$_524 from "./524"
import * as /* [auto-meaningful-name] */$_729_index from "./729/index"
import * as /* [auto-meaningful-name] */$_264 from "./264"
import * as /* [auto-meaningful-name] */$$_1212_38 from "../1212/38"
import * as /* [auto-meaningful-name] */$_439_index from "./439/index"
var j = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._usePgNative = !!t.usePgNative
  }
  e.prototype.setupOnce = function (e, t) {
    var /* [auto-meaningful-name] */r$native
    var r = $_524.c("pg")
    if (r) {
      if (!this._usePgNative || (null === (r$native = r.native) || undefined === r$native ? undefined : r$native.Client)) {
        var /* [auto-meaningful-name] */This$_usePgNativeR$nativeR$Client = (this._usePgNative ? r.native : r).Client
        $_439_index.b(This$_usePgNativeR$nativeR$Client.prototype, "query", function (e) {
          return function (n, r, i) {
            var o
            var a
            var s
            var c = null === (a = null === (o = t().getScope()) || undefined === o ? undefined : o.getSpan()) || undefined === a ? undefined : a.startChild({
              description: "string" === typeof n ? n : n.text,
              op: "db"
            })
            if ("function" === typeof i) {
              return e.call(this, n, r, function (e, t) {
                var n
                if (!(null === (n = c) || undefined === n)) {
                  n.finish()
                }
                i(e, t)
              })
            }
            if ("function" === typeof r) {
              return e.call(this, n, function (e, t) {
                var n
                if (!(null === (n = c) || undefined === n)) {
                  n.finish()
                }
                r(e, t)
              })
            }
            var u = "undefined" !== typeof r ? e.call(this, n, r) : e.call(this, n)
            return $_317.j(u) ? u.then(function (e) {
              var t
              if (!(null === (t = c) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = c) || undefined === s || s.finish(), u)
          }
        })
      } else {
        $_264.a.error("Postgres Integration was unable to access 'pg-native' bindings.")
      }
    } else {
      $_264.a.error("Postgres Integration was unable to require `pg` package.")
    }
  }
  e.id = "Postgres"
  return e
}()
var U = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = $_524.c("mysql/lib/Connection.js")
    if (n) {
      $_439_index.b(n, "createQuery", function (e) {
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
      $_264.a.error("Mysql Integration was unable to require `mysql` package.")
    }
  }
  e.id = "Mysql"
  return e
}()
var H = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"]
var V = {
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
var G = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._operations = Array.isArray(t.operations) ? t.operations : H
    this._describeOperations = !("describeOperations" in t) || t.describeOperations
    this._useMongoose = !!t.useMongoose
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this._useMongoose ? "mongoose" : "mongodb"
    var r = $_524.c(n)
    if (r) {
      this._instrumentOperations(r.Collection, this._operations, t)
    } else {
      $_264.a.error("Mongo Integration was unable to require `" + n + "` package.")
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
      $_439_index.b(e.prototype, t, function (e) {
        return function () {
          for (var o, a, s, c, u = [], l = 0; l < arguments.length; l++) {
            u[l] = arguments[l]
          }
          var f = u[u.length - 1]
          var d = n().getScope()
          var h = null === (o = d) || undefined === o ? undefined : o.getSpan()
          if ("function" !== typeof f || "mapReduce" === t && 2 === u.length) {
            var p = null === (a = h) || undefined === a ? undefined : a.startChild(r(this, t, u))
            var _ = e.call.apply(e, $$_1212_38.f([this], u))
            return $_317.j(_) ? _.then(function (e) {
              var t
              if (!(null === (t = p) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = p) || undefined === s || s.finish(), _)
          }
          var A = null === (c = h) || undefined === c ? undefined : c.startChild(r(this, t, u.slice(0, -1)))
          return e.call.apply(e, $$_1212_38.f([this], u.slice(0, -1), [
            function (e, t) {
              var n
              if (!(null === (n = A) || undefined === n)) {
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
    var o = {
      op: "db",
      description: t,
      data: r
    }
    var a = V[t]
    var s = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations
    if (!a || !s) {
      return o
    }
    try {
      if ("mapReduce" === t) {
        var c = $$_1212_38.d(n, 2)
        var u = c[0]
        var l = c[1]
        r[a[0]] = "string" === typeof u ? u : u.name || "<anonymous>"
        r[a[1]] = "string" === typeof l ? l : l.name || "<anonymous>"
      } else {
        for (var f = 0; f < a.length; f++) {
          r[a[f]] = JSON.stringify(n[f])
        }
      }
    } catch (d) {}
    return o
  }
  e.id = "Mongo"
  return e
}()
var z = $$_1212_38.a($$_1212_38.a({}, r), {
  BrowserTracing: F
})
$_729_index.a()
export { j }
export { U }
export { G }
export { z }
