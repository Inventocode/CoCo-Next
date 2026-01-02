/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2385
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("../449")
var o = require("../../../207/787/180")
var a = require("../../../207/787/204")
var s = require("../../../1058/1393/1143/283/index")
var c = require("../../../1058/1393/1143/284/index")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ReadableWebToNodeStream = undefined
var u = function (e) {
  s(n, e)
  var t = c(n)
  function n(e) {
    var r
    o(this, n);
    (r = t.call(this)).bytesRead = 0
    r.released = false
    r.reader = e.getReader()
    return r
  }
  a(n, [
    {
      key: "_read",
      value: function () {
        var e = this
        if (this.released) {
          this.push(null)
        } else {
          this.pendingRead = this.reader.read().then(function (t) {
            delete e.pendingRead
            if (t.done || e.released) {
              e.push(null)
            } else {
              e.bytesRead += t.value.length
              e.push(t.value)
            }
          }).catch(function (t) {
            e.destroy(t)
          })
        }
      }
    }, {
      key: "waitForReadToComplete",
      value: function () {
        var e = i(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!this.pendingRead) {
                    e.next = 3
                    break
                  }
                  e.next = 3
                  return this.pendingRead
                case 3:
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
      key: "close",
      value: function () {
        var e = i(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return this.syncAndRelease()
                case 2:
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
      key: "syncAndRelease",
      value: function () {
        var e = i(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  this.released = true
                  e.next = 3
                  return this.waitForReadToComplete()
                case 3:
                  e.next = 5
                  return this.reader.releaseLock()
                case 5:
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
    }
  ])
  return n
}(require("./2386/index").Readable)
exports.ReadableWebToNodeStream = u
