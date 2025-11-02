/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1238
 */

var r
var o
var i
var a
var s
var c
var l
var /* [auto-meaningful-name] */l$then
var d = require("../../1736/194")
var require$$$$1659386Index$f = require("../../1659/386/index").f
var require$$$$17431072Index$set = require("../../1743/1072/index").set
var h = require("./1237")
var m = require("./1647")
var g = require("./1648")
var _ = require("../750")
var v = d.MutationObserver || d.WebKitMutationObserver
var d$document = d.document
var d$process = d.process
var d$Promise = d.Promise
var O = require$$$$1659386Index$f(d, "queueMicrotask")
var w = O && O.value
if (!w) {
  r = function () {
    var /* [auto-meaningful-name] */d$process$domain
    var t
    for (_ && (d$process$domain = d$process.domain) && d$process$domain.exit(); o;) {
      t = o.fn
      o = o.next
      try {
        t()
      } catch (n) {
        if (o) {
          a()
        } else {
          i = undefined
        }
        throw n
      }
    }
    i = undefined
    if (d$process$domain) {
      d$process$domain.enter()
    }
  }
  if (h || _ || g || !v || !d$document) {
    if (!m && d$Promise && d$Promise.resolve) {
      (l = d$Promise.resolve(undefined)).constructor = d$Promise
      l$then = l.then
      a = function () {
        l$then.call(l, r)
      }
    } else {
      a = _ ? function () {
        d$process.nextTick(r)
      } : function () {
        require$$$$17431072Index$set.call(d, r)
      }
    }
  } else {
    s = true
    c = d$document.createTextNode("")
    new v(r).observe(c, {
      characterData: true
    })
    a = function () {
      c.data = s = !s
    }
  }
}
module.exports = w || function (e) {
  var t = {
    fn: e,
    next: undefined
  }
  if (i) {
    i.next = t
  }
  if (!o) {
    o = t
    a()
  }
  i = t
}
