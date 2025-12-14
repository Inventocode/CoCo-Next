/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：174
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as i from "./7"
import * as a from "./27"
import * as s from "./39"
var c = function () {
  function e() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "appCraft"
    a.a(this, e)
    this._dbs = undefined
    this._databaseName = undefined
    this._tableName = "grid"
    this._version = 1
    this._dbs = {}
    this._databaseName = t
    this.open(this._databaseName, this._version)
  }
  s.a(e, [
    {
      key: "open",
      value: function (e, t) {
        var n = this
        return new Promise(function (r, o) {
          if (n._dbs[e + t]) {
            r(n._dbs[e + t])
          } else {
            var i = indexedDB.open(e, t)
            i.onupgradeneeded = function (e) {
              var /* [auto-meaningful-name] */e$target$result = e.target.result
              if (false === e$target$result.objectStoreNames.contains(n._tableName)) {
                var o = e$target$result.createObjectStore(n._tableName, {
                  keyPath: "id"
                })
                o.createIndex("id", "id", {
                  unique: true
                })
                o.createIndex("name", "name")
                o.createIndex("header", "header")
                o.createIndex("data", "data")
              }
              r(e$target$result)
            }
            i.onsuccess = function (o) {
              var /* [auto-meaningful-name] */o$target$result = o.target.result
              n._dbs[e + t] = o$target$result
              r(o$target$result)
            }
            i.onerror = function (e) {
              o(e)
              console.error("IndexedDB", e)
            }
          }
        })
      }
    }, {
      key: "_getTransaction",
      value: function () {
        var e = i.a(_RegeneratorRuntime.mark(function e(t) {
          var n
          return _RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!this._dbs[this._databaseName + t]) {
                    e.next = 4
                    break
                  }
                  n = this._dbs[this._databaseName + t]
                  e.next = 7
                  break
                case 4:
                  e.next = 6
                  return this.open(this._databaseName, t)
                case 6:
                  n = e.sent
                case 7:
                  return e.abrupt("return", n.transaction([this._tableName], "readwrite"))
                case 8:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "_getObjectStore",
      value: function () {
        var e = i.a(_RegeneratorRuntime.mark(function e() {
          var /* [auto-meaningful-name] */e$sent
          return _RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return this._getTransaction(this._version)
                case 2:
                  e$sent = e.sent
                  return e.abrupt("return", e$sent.objectStore(this._tableName))
                case 4:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "get",
      value: function (e) {
        var t = this
        return new Promise(function (n, r) {
          t._getObjectStore().then(function (t) {
            var o = t.get(e)
            o.onsuccess = function (e) {
              n(e.target.result)
            }
            o.onerror = function (e) {
              r(e)
            }
          })
        })
      }
    }, {
      key: "getAll",
      value: function () {
        var e = this
        return new Promise(function (t, n) {
          e._getObjectStore().then(function (e) {
            try {
              var r = e.getAll()
              r.onsuccess = function (e) {
                t(e.target.result)
              }
              r.onerror = function (e) {
                n(e)
              }
            } catch (o) {
              n(o)
            }
          })
        })
      }
    }, {
      key: "add",
      value: function (e) {
        var t = this
        return new Promise(function (n, r) {
          t._getObjectStore().then(function (t) {
            var o = t.add(e)
            o.onsuccess = function (e) {
              n(e.target.result)
            }
            o.onerror = function (e) {
              r(e)
            }
          })
        })
      }
    }, {
      key: "delete",
      value: function (e) {
        var t = this
        return new Promise(function (n, r) {
          t._getObjectStore().then(function (t) {
            var o = t.delete(e)
            o.onsuccess = function (e) {
              n(e.target.result)
            }
            o.onerror = function (e) {
              r(e)
            }
          })
        })
      }
    }, {
      key: "put",
      value: function (e) {
        var t = this
        return new Promise(function (n, r) {
          t._getObjectStore().then(function (t) {
            var o = t.put(e)
            o.onsuccess = function (e) {
              n(e.target.result)
            }
            o.onerror = function (e) {
              r(e)
            }
          })
        })
      }
    }, {
      key: "clear",
      value: function () {
        var e = this
        return new Promise(function (t, n) {
          e._getObjectStore().then(function (r) {
            var o = r.clear(e._tableName)
            o.onsuccess = function (e) {
              t(e.target.result)
            }
            o.onerror = function (e) {
              n(e)
            }
          })
        })
      }
    }
  ])
  return e
}()
var l = window.location.search.split("?")[1]
var u = new URLSearchParams(l).get("archiveId")
var d = u ? new c(u) : new c()
export { d as a }
export default d
