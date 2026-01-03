/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2396
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("../../449")
var o = require("../../../../207/787/180")
var a = require("../../../../207/787/204")
var s = require("../../../../1058/1393/1143/283/index")
var c = require("../../../../1058/1393/1143/284/index")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ReadStreamTokenizer = undefined
var u = require("./2399/1411")
var l = require("./989/index")
var f = function (e) {
  s(n, e)
  var t = c(n)
  function n(e, r) {
    var i
    o(this, n);
    (i = t.call(this, r)).streamReader = new l.StreamReader(e)
    return i
  }
  a(n, [
    {
      key: "getFileInfo",
      value: function () {
        var e = i(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", this.fileInfo)
                case 1:
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
      key: "readBuffer",
      value: function () {
        var e = i(r.mark(function e(t, n) {
          var i
          var o
          var /* [auto-meaningful-name] */e$sent
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (i = this.normalizeOptions(t, n), !((o = i.position - this.position) > 0)) {
                    e.next = 8
                    break
                  }
                  e.next = 5
                  return this.ignore(o)
                case 5:
                  return e.abrupt("return", this.readBuffer(t, n))
                case 8:
                  if (!(o < 0)) {
                    e.next = 10
                    break
                  }
                  throw new Error("`options.position` must be equal or greater than `tokenizer.position`")
                case 10:
                  if (0 !== i.length) {
                    e.next = 12
                    break
                  }
                  return e.abrupt("return", 0)
                case 12:
                  e.next = 14
                  return this.streamReader.read(t, i.offset, i.length)
                case 14:
                  if (e$sent = e.sent, this.position += e$sent, n && n.mayBeLess || !(e$sent < i.length)) {
                    e.next = 18
                    break
                  }
                  throw new l.EndOfStreamError()
                case 18:
                  return e.abrupt("return", e$sent)
                case 19:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t, n) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "peekBuffer",
      value: function () {
        var e = i(r.mark(function e(t, n) {
          var i
          var o
          var a
          var s
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (i = this.normalizeOptions(t, n), o = 0, !i.position) {
                    e.next = 15
                    break
                  }
                  if (!((a = i.position - this.position) > 0)) {
                    e.next = 13
                    break
                  }
                  s = new Uint8Array(i.length + a)
                  e.next = 8
                  return this.peekBuffer(s, {
                    mayBeLess: i.mayBeLess
                  })
                case 8:
                  o = e.sent
                  t.set(s.subarray(a), i.offset)
                  return e.abrupt("return", o - a)
                case 13:
                  if (!(a < 0)) {
                    e.next = 15
                    break
                  }
                  throw new Error("Cannot peek from a negative offset in a stream")
                case 15:
                  if (!(i.length > 0)) {
                    e.next = 29
                    break
                  }
                  e.prev = 16
                  e.next = 19
                  return this.streamReader.peek(t, i.offset, i.length)
                case 19:
                  o = e.sent
                  e.next = 27
                  break
                case 22:
                  if (e.prev = 22, e.t0 = e.catch(16), !(n && n.mayBeLess && e.t0 instanceof l.EndOfStreamError)) {
                    e.next = 26
                    break
                  }
                  return e.abrupt("return", 0)
                case 26:
                  throw e.t0
                case 27:
                  if (i.mayBeLess || !(o < i.length)) {
                    e.next = 29
                    break
                  }
                  throw new l.EndOfStreamError()
                case 29:
                  return e.abrupt("return", o)
                case 30:
                case "end":
                  return e.stop()
              }
            }
          }, e, this, [[16, 22]])
        }))
        return function (t, n) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "ignore",
      value: function () {
        var e = i(r.mark(function e(t) {
          var n
          var i
          var o
          var a
          var /* [auto-meaningful-name] */e$sent
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  n = Math.min(256e3, t)
                  i = new Uint8Array(n)
                  o = 0
                case 3:
                  if (!(o < t)) {
                    e.next = 13
                    break
                  }
                  a = t - o
                  e.next = 7
                  return this.readBuffer(i, {
                    length: Math.min(n, a)
                  })
                case 7:
                  if (!((e$sent = e.sent) < 0)) {
                    e.next = 10
                    break
                  }
                  return e.abrupt("return", e$sent)
                case 10:
                  o += e$sent
                  e.next = 3
                  break
                case 13:
                  return e.abrupt("return", o)
                case 14:
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
    }
  ])
  return n
}(u.AbstractTokenizer)
exports.ReadStreamTokenizer = f
