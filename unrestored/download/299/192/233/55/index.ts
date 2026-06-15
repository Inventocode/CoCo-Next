/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：55
 */

"use strict"

var r
var i = require(/* 27 */"../../225/27")
var o = require(/* 213 */"./213/index")
var a = require(/* 105 */"../104/105")
var s = require(/* 102 */"./102")
var u = require(/* 147 */"./147")
var c = require(/* 82 */"../../268/270/82")
var l = require(/* 101 */"./101")
var /* [auto-meaningful-name] */Prototype = "prototype"
var /* [auto-meaningful-name] */Script = "script"
var d = l("IE_PROTO")
var h = function () {}
var g = function (e) {
  return "<" + Script + ">" + e + "</" + Script + ">"
}
var m = function (e) {
  e.write(g(""))
  e.close()
  var /* [auto-meaningful-name] */e$parentWindow$Object = e.parentWindow.Object
  e = null
  return e$parentWindow$Object
}
var v = function () {
  try {
    r = new ActiveXObject("htmlfile")
  } catch (t) {}
  v = "undefined" != typeof document ? document.domain && r ? m(r) : function () {
    var /* [auto-meaningful-name] */t$contentWindow$document
    var t = c("iframe")
    var n = "java" + Script + ":"
    t.style.display = "none"
    u.appendChild(t)
    t.src = String(n);
    (t$contentWindow$document = t.contentWindow.document).open()
    t$contentWindow$document.write(g("document.F=Object"))
    t$contentWindow$document.close()
    return t$contentWindow$document.F
  }() : m(r)
  for (var /* [auto-meaningful-name] */a$length = a.length; a$length--;) {
    delete v[Prototype][a[a$length]]
  }
  return v()
}
s[d] = true
module.exports = Object.create || function (e, t) {
  var n
  if (null !== e) {
    h[Prototype] = i(e)
    n = new h()
    h[Prototype] = null
    n[d] = e
  } else {
    n = v()
  }
  return undefined === t ? n : o.f(n, t)
}
