/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2399
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("../../../449")
var o = require("../../../../../207/787/180")
var a = require("../../../../../207/787/204")
var s = require("../../../../../37/611/283")
var c = require("../../../../../37/611/284/index")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.BufferTokenizer = undefined
var u = require("../989/index")
var l = function (e) {
  s(n, e)
  var t = c(n)
  function n(e, r) {
    var i
    o(this, n);
    (i = t.call(this, r)).uint8Array = e
    i.fileInfo.size = i.fileInfo.size ? i.fileInfo.size : e.length
    return i
  }
  a(n, [
    {
      key: "readBuffer",
      value: function () {
        var e = i(r.mark(function e(t, n) {
          var /* [auto-meaningful-name] */e$sent
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!n || !n.position) {
                    e.next = 4
                    break
                  }
                  if (!(n.position < this.position)) {
                    e.next = 3
                    break
                  }
                  throw new Error("`options.position` must be equal or greater than `tokenizer.position`")
                case 3:
                  this.position = n.position
                case 4:
                  e.next = 6
                  return this.peekBuffer(t, n)
                case 6:
                  e$sent = e.sent
                  this.position += e$sent
                  return e.abrupt("return", e$sent)
                case 9:
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
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (i = this.normalizeOptions(t, n), o = Math.min(this.uint8Array.length - i.position, i.length), i.mayBeLess || !(o < i.length)) {
                    e.next = 6
                    break
                  }
                  throw new u.EndOfStreamError()
                case 6:
                  t.set(this.uint8Array.subarray(i.position, i.position + o), i.offset)
                  return e.abrupt("return", o)
                case 8:
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
      key: "close",
      value: function () {
        var e = i(r.mark(function e() {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
    }
  ])
  return n
}(require("./1411").AbstractTokenizer)
exports.BufferTokenizer = l
