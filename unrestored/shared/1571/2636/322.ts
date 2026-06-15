/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：322
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_376 from /* 376 */"./37/376"
import * as /* [auto-meaningful-name] */Module_82 from /* 82 */"./82"
var _a
_a = memo(function (e) {
  var t = useState([])
  var n = Module_10.a(t, 2)
  var c = n[0]
  var l = n[1]
  var u = useState("0 0 1024 1024")
  var d = Module_10.a(u, 2)
  var p = d[0]
  var f = d[1]
  var /* [auto-meaningful-name] */e$icon = e.icon
  var m = undefined === e$icon ? Module_82.c : e$icon
  useEffect(function () {
    var e = Module_376.a(m.id)
    if (e) {
      l(e.path)
      return void f(e.viewBox)
    }
    var t = (null === m || undefined === m ? undefined : m.cdnUrl) || (null === m || undefined === m ? undefined : m.source)
    if (t) {
      if (t.startsWith("http")) {
        t += "?_=".concat(Math.random())
      }
      fetch(t).then(function (e) {
        return e.text()
      }).then(function (e) {
        var t = new DOMParser().parseFromString(e, "image/svg+xml")
        var n = []
        var r = t.querySelector("svg")
        var o = (null === r || undefined === r ? undefined : r.getAttribute("viewBox")) || "0 0 1024 1024"
        t.querySelectorAll("path").forEach(function (e) {
          n.push(e.getAttribute("d") || "")
        })
        l(n)
        f(o)
        Module_376.c(m.id, n, o)
      })
    }
  }, [m])
  return React1.createElement("svg", {
    viewBox: p,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, c.map(function (e) {
    return React1.createElement("path", {
      key: e,
      d: e
    })
  }))
})
export { _a as a }
export default _a
