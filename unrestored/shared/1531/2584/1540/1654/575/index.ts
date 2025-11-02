/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：575
 */

var r
var o = require("../../1659/241")
var i = require("../../1745/1212")
var a = require("./1060")
var s = require("../../1541/816")
var c = require("../../1743/1072/1213")
var l = require("../../1743/1072/1057")
var u = require("../../1541/933")
var d = u("IE_PROTO")
var p = function () {}
var f = function (e) {
  return "<script>" + e + "</script>"
}
var h = function (e) {
  e.write(f(""))
  e.close()
  var e$parentWindow$Object = e.parentWindow.Object
  e = null
  return e$parentWindow$Object
}
var m = function () {
  try {
    r = new ActiveXObject("htmlfile")
  } catch (t) {}
  m = "undefined" != typeof document ? document.domain && r ? h(r) : function () {
    var /* [auto-meaningful-name] */t$contentWindow$document
    var t = l("iframe")
    t.style.display = "none"
    c.appendChild(t)
    t.src = String("javascript:");
    (t$contentWindow$document = t.contentWindow.document).open()
    t$contentWindow$document.write(f("document.F=Object"))
    t$contentWindow$document.close()
    return t$contentWindow$document.F
  }() : h(r)
  for (var a$length = a.length; a$length--;) {
    delete m.prototype[a[a$length]]
  }
  return m()
}
s[d] = true
module.exports = Object.create || function (e, t) {
  var n
  if (null !== e) {
    p.prototype = o(e)
    n = new p()
    p.prototype = null
    n[d] = e
  } else {
    n = m()
  }
  return undefined === t ? n : i(n, t)
}
