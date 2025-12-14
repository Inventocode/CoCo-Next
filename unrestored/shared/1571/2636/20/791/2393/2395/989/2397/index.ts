/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2397
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("../../../../449")
var o = require("../../../../../../207/787/180")
var a = require("../../../../../../207/787/204")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.StreamReader = exports.EndOfStreamError = undefined
var s = require("../1162")
var c = require("./2398")
var u = require("../1162")
Object.defineProperty(exports, "EndOfStreamError", {
  enumerable: true,
  get: function () {
    return u.EndOfStreamError
  }
})
var l = function () {
  function e(t) {
    var n = this
    o(this, e)
    this.s = t
    this.deferred = null
    this.endOfStream = false
    this.peekQueue = []
    if (!t.read || !t.once) {
      throw new Error("Expected an instance of stream.Readable")
    }
    this.s.once("end", function () {
      return n.reject(new s.EndOfStreamError())
    })
    this.s.once("error", function (e) {
      return n.reject(e)
    })
    this.s.once("close", function () {
      return n.reject(new Error("Stream closed"))
    })
  }
  a(e, [
    {
      key: "peek",
      value: function () {
        var e = i(r.mark(function e(t, n, i) {
          var /* [auto-meaningful-name] */e$sent
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return this.read(t, n, i)
                case 2:
                  e$sent = e.sent
                  this.peekQueue.push(t.subarray(n, n + e$sent))
                  return e.abrupt("return", e$sent)
                case 5:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t, n, r) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "read",
      value: function () {
        var e = i(r.mark(function e(t, n, i) {
          var o
          var a
          var c
          var u
          var l
          var /* [auto-meaningful-name] */e$sent
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (0 !== i) {
                    e.next = 2
                    break
                  }
                  return e.abrupt("return", 0)
                case 2:
                  if (0 !== this.peekQueue.length || !this.endOfStream) {
                    e.next = 4
                    break
                  }
                  throw new s.EndOfStreamError()
                case 4:
                  o = i
                  a = 0
                case 6:
                  if (!(this.peekQueue.length > 0 && o > 0)) {
                    e.next = 17
                    break
                  }
                  if (c = this.peekQueue.pop()) {
                    e.next = 10
                    break
                  }
                  throw new Error("peekData should be defined")
                case 10:
                  u = Math.min(c.length, o)
                  t.set(c.subarray(0, u), n + a)
                  a += u
                  o -= u
                  if (u < c.length) {
                    this.peekQueue.push(c.subarray(u))
                  }
                  e.next = 6
                  break
                case 17:
                  if (!(o > 0) || this.endOfStream) {
                    e.next = 28
                    break
                  }
                  l = Math.min(o, 1048576)
                  e.next = 21
                  return this.readFromStream(t, n + a, l)
                case 21:
                  if (e$sent = e.sent, a += e$sent, !(e$sent < l)) {
                    e.next = 25
                    break
                  }
                  return e.abrupt("break", 28)
                case 25:
                  o -= e$sent
                  e.next = 17
                  break
                case 28:
                  return e.abrupt("return", a)
                case 29:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t, n, r) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "readFromStream",
      value: function () {
        var e = i(r.mark(function e(t, n, i) {
          var o
          var a
          var s = this
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!(o = this.s.read(i))) {
                    e.next = 6
                    break
                  }
                  t.set(o, n)
                  return e.abrupt("return", o.length)
                case 6:
                  a = {
                    buffer: t,
                    offset: n,
                    length: i,
                    deferred: new c.Deferred()
                  }
                  this.deferred = a.deferred
                  this.s.once("readable", function () {
                    s.readDeferred(a)
                  })
                  return e.abrupt("return", a.deferred.promise)
                case 10:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t, n, r) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "readDeferred",
      value: function (e) {
        var t = this
        var n = this.s.read(e.length)
        if (n) {
          e.buffer.set(n, e.offset)
          e.deferred.resolve(n.length)
          this.deferred = null
        } else {
          this.s.once("readable", function () {
            t.readDeferred(e)
          })
        }
      }
    }, {
      key: "reject",
      value: function (e) {
        this.endOfStream = true
        if (this.deferred) {
          this.deferred.reject(e)
          this.deferred = null
        }
      }
    }
  ])
  return e
}()
exports.StreamReader = l
