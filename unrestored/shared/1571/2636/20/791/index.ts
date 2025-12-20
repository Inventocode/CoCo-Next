/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：791
 */

"use strict"

var r = require("regenerator-runtime")
var i = require("./449")
var /* [auto-meaningful-name] */require$_2385_index$ReadableWebToNodeStream = require("./2385/index").ReadableWebToNodeStream
var a = require("./2393/index")
function s() {
  return (s = i(r.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    return r.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = new require$_2385_index$ReadableWebToNodeStream(t)
            e.next = 3
            return a.fromStream(n)
          case 3:
            e$sent = e.sent
            e.next = 6
            return n.close()
          case 6:
            return e.abrupt("return", e$sent)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function c() {
  return (c = i(r.mark(function e(n) {
    var /* [auto-meaningful-name] */e$sent
    return r.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return u(n)
          case 2:
            e$sent = e.sent
            return e.abrupt("return", a.fromBuffer(Buffer.from(e$sent)))
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function u(e) {
  return e.arrayBuffer ? e.arrayBuffer() : new Promise(function (t, n) {
    var r = new FileReader()
    r.addEventListener("loadend", function (e) {
      t(e.target.result)
    })
    r.addEventListener("error", function (e) {
      n(new Error(e.message))
    })
    r.addEventListener("abort", function (e) {
      n(new Error(e.type))
    })
    r.readAsArrayBuffer(e)
  })
}
Object.assign(module.exports, a, {
  fromStream: function (e) {
    return s.apply(this, arguments)
  },
  fromBlob: function (e) {
    return c.apply(this, arguments)
  }
})
