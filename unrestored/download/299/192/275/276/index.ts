/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：276
 */

"use strict"

var r
var i
var o
var a
var s
var u = require(/* 6 */"../6")
var c = require(/* 174 */"./174")
var l = require(/* 43 */"../../204/142/43")
var /* [auto-meaningful-name] */require_124_$$_$$_271_273_124$set = require(/* 124 */"../../271/273/124").set
var p = require(/* 277 */"./277")
var d = require(/* 171 */"./171")
var h = require(/* 278 */"./278")
var g = require(/* 279 */"./279")
var m = require(/* 172 */"./172/index")
var v = u.MutationObserver || u.WebKitMutationObserver
var /* [auto-meaningful-name] */u$document = u.document
var /* [auto-meaningful-name] */u$process = u.process
var /* [auto-meaningful-name] */u$Promise = u.Promise
var w = c("queueMicrotask")
if (!w) {
  var S = new p()
  var k = function () {
    var /* [auto-meaningful-name] */u$process$domain
    var t
    for (m && (u$process$domain = u$process.domain) && u$process$domain.exit(); t = S.get();) {
      try {
        t()
      } catch (n) {
        if (S.head) {
          r()
        }
        throw n
      }
    }
    if (u$process$domain) {
      u$process$domain.enter()
    }
  }
  if (d || m || g || !v || !u$document) {
    if (!h && u$Promise && u$Promise.resolve) {
      (a = u$Promise.resolve(undefined)).constructor = u$Promise
      s = l(a.then, a)
      r = function () {
        s(k)
      }
    } else {
      if (m) {
        r = function () {
          u$process.nextTick(k)
        }
      } else {
        require_124_$$_$$_271_273_124$set = l(require_124_$$_$$_271_273_124$set, u)
        r = function () {
          require_124_$$_$$_271_273_124$set(k)
        }
      }
    }
  } else {
    i = true
    o = u$document.createTextNode("")
    new v(k).observe(o, {
      characterData: true
    })
    r = function () {
      o.data = i = !i
    }
  }
  w = function (e) {
    if (!S.head) {
      r()
    }
    S.add(e)
  }
}
module.exports = w
