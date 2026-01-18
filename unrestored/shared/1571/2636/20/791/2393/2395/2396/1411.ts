/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1411
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("../../../449")
var o = require("../../../../../207/787/180")
var a = require("../../../../../207/787/204")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.AbstractTokenizer = undefined
var s = require("../989/index")
var c = function () {
  function t(e) {
    o(this, t)
    this.position = 0
    this.numBuffer = new Uint8Array(8)
    this.fileInfo = e || {}
  }
  a(t, [
    {
      key: "readToken",
      value: function () {
        var t = i(r.mark(function t(n) {
          var i
          var o
          var a = arguments
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  i = a.length > 1 && undefined !== a[1] ? a[1] : this.position
                  o = Buffer.alloc(n.len)
                  t.next = 4
                  return this.readBuffer(o, {
                    position: i
                  })
                case 4:
                  if (!(t.sent < n.len)) {
                    t.next = 7
                    break
                  }
                  throw new s.EndOfStreamError()
                case 7:
                  return t.abrupt("return", n.get(o, 0))
                case 8:
                case "end":
                  return t.stop()
              }
            }
          }, t, this)
        }))
        return function (e) {
          return t.apply(this, arguments)
        }
      }()
    }, {
      key: "peekToken",
      value: function () {
        var t = i(r.mark(function t(n) {
          var i
          var o
          var a = arguments
          return r.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  i = a.length > 1 && undefined !== a[1] ? a[1] : this.position
                  o = Buffer.alloc(n.len)
                  t.next = 4
                  return this.peekBuffer(o, {
                    position: i
                  })
                case 4:
                  if (!(t.sent < n.len)) {
                    t.next = 7
                    break
                  }
                  throw new s.EndOfStreamError()
                case 7:
                  return t.abrupt("return", n.get(o, 0))
                case 8:
                case "end":
                  return t.stop()
              }
            }
          }, t, this)
        }))
        return function (e) {
          return t.apply(this, arguments)
        }
      }()
    }, {
      key: "readNumber",
      value: function () {
        var e = i(r.mark(function e(t) {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return this.readBuffer(this.numBuffer, {
                    length: t.len
                  })
                case 2:
                  if (!(e.sent < t.len)) {
                    e.next = 5
                    break
                  }
                  throw new s.EndOfStreamError()
                case 5:
                  return e.abrupt("return", t.get(this.numBuffer, 0))
                case 6:
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
      key: "peekNumber",
      value: function () {
        var e = i(r.mark(function e(t) {
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return this.peekBuffer(this.numBuffer, {
                    length: t.len
                  })
                case 2:
                  if (!(e.sent < t.len)) {
                    e.next = 5
                    break
                  }
                  throw new s.EndOfStreamError()
                case 5:
                  return e.abrupt("return", t.get(this.numBuffer, 0))
                case 6:
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
      key: "ignore",
      value: function () {
        var e = i(r.mark(function e(t) {
          var n
          return r.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (undefined === this.fileInfo.size) {
                    e.next = 5
                    break
                  }
                  if (n = this.fileInfo.size - this.position, !(t > n)) {
                    e.next = 5
                    break
                  }
                  this.position += n
                  return e.abrupt("return", n)
                case 5:
                  this.position += t
                  return e.abrupt("return", t)
                case 7:
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
    }, {
      key: "normalizeOptions",
      value: function (e, t) {
        if (t && undefined !== t.position && t.position < this.position) {
          throw new Error("`options.position` must be equal or greater than `tokenizer.position`")
        }
        return t ? {
          mayBeLess: true === t.mayBeLess,
          offset: t.offset ? t.offset : 0,
          length: t.length ? t.length : e.length - (t.offset ? t.offset : 0),
          position: t.position ? t.position : this.position
        } : {
          mayBeLess: false,
          offset: 0,
          length: e.length,
          position: this.position
        }
      }
    }
  ])
  return t
}()
exports.AbstractTokenizer = c
