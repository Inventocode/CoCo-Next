/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-4
 */

"use strict"

import { "49__part-0__r" as r } from "./index__part-0"
import { "49__part-3__L" as L } from "./index__part-3"
import * as /* [auto-meaningful-name] */$$_72_9 from "../72/9"
import * as /* [auto-meaningful-name] */$_19_index from "./19/index"
import * as /* [auto-meaningful-name] */$_23_index from "./23/index"
import * as /* [auto-meaningful-name] */$$_72_8 from "../72/8"
import * as i from "./1"
import * as /* [auto-meaningful-name] */$$_72_17_index from "../72/17/index"
var U = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = $_19_index.c("pg")
    if (n) {
      $$_72_17_index.c(n.Client.prototype, "query", function (e) {
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
          var l = "undefined" !== typeof r ? e.call(this, n, r) : e.call(this, n)
          return $$_72_9.m(l) ? l.then(function (e) {
            var t
            if (!(null === (t = u) || undefined === t)) {
              t.finish()
            }
            return e
          }) : (null === (s = u) || undefined === s || s.finish(), l)
        }
      })
    } else {
      $$_72_8.a.error("Postgres Integration was unable to require `pg` package.")
    }
  }
  e.id = "Postgres"
  return e
}()
var z = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (e, t) {
    var n = $_19_index.c("mysql/lib/Connection.js")
    if (n) {
      $$_72_17_index.c(n, "createQuery", function (e) {
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
      $$_72_8.a.error("Mysql Integration was unable to require `mysql` package.")
    }
  }
  e.id = "Mysql"
  return e
}()
var B = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"]
var G = {
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
var q = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._operations = Array.isArray(t.operations) ? t.operations : B
    this._describeOperations = !("describeOperations" in t) || t.describeOperations
    this._useMongoose = !!t.useMongoose
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this._useMongoose ? "mongoose" : "mongodb"
    var r = $_19_index.c(n)
    if (r) {
      this._instrumentOperations(r.Collection, this._operations, t)
    } else {
      $$_72_8.a.error("Mongo Integration was unable to require `" + n + "` package.")
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
      $$_72_17_index.c(e.prototype, t, function (e) {
        return function () {
          for (var o, a, s, u, l = [], c = 0; c < arguments.length; c++) {
            l[c] = arguments[c]
          }
          var f = l[l.length - 1]
          var d = n().getScope()
          var p = null === (o = d) || undefined === o ? undefined : o.getSpan()
          if ("function" !== typeof f || "mapReduce" === t && 2 === l.length) {
            var h = null === (a = p) || undefined === a ? undefined : a.startChild(r(this, t, l))
            var m = e.call.apply(e, i.e([this], l))
            return $$_72_9.m(m) ? m.then(function (e) {
              var t
              if (!(null === (t = h) || undefined === t)) {
                t.finish()
              }
              return e
            }) : (null === (s = h) || undefined === s || s.finish(), m)
          }
          var v = null === (u = p) || undefined === u ? undefined : u.startChild(r(this, t, l.slice(0, -1)))
          return e.call.apply(e, i.e([this], l.slice(0, -1), [function (e, t) {
            var n
            if (!(null === (n = v) || undefined === n)) {
              n.finish()
            }
            f(e, t)
          }]))
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
    var a = G[t]
    var s = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations
    if (!a || !s) {
      return o
    }
    try {
      if ("mapReduce" === t) {
        var u = i.c(n, 2)
        var l = u[0]
        var c = u[1]
        r[a[0]] = "string" === typeof l ? l : l.name || "<anonymous>"
        r[a[1]] = "string" === typeof c ? c : c.name || "<anonymous>"
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
var H = i.a(i.a({}, r), {
  BrowserTracing: L
})
$_23_index.a()
export { U as "49__part-4__U" }
export { z as "49__part-4__z" }
export { q as "49__part-4__q" }
export { H as "49__part-4__H" }
