/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2287
 */

"use strict"

var r = require("./494/index")
var i = require("./807/index")("eslint:source-code-fixer")
function o(e, t) {
  return e.fix.range[0] - t.fix.range[0] || e.fix.range[1] - t.fix.range[1]
}
function a(e, t) {
  return e.line - t.line || e.column - t.column
}
function s() {
  Object.freeze(this)
}
s.applyFixes = function (e, t, n) {
  i("Applying fixes")
  if (false === n) {
    i("shouldFix parameter was false, not attempting fixes")
    return {
      fixed: false,
      messages: t,
      output: e
    }
  }
  var s = []
  var c = []
  var u = e.startsWith("﻿") ? "﻿" : ""
  var l = u ? e.slice(1) : e
  var /* [auto-meaningful-name] */Number$NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY
  var d = u
  function h(e) {
    var /* [auto-meaningful-name] */e$fix = e.fix
    var n = e$fix.range[0]
    var r = e$fix.range[1]
    return Number$NEGATIVE_INFINITY >= n || n > r ? (s.push(e), false) : ((n < 0 && r >= 0 || 0 === n && e$fix.text.startsWith("﻿")) && (d = ""), d += l.slice(Math.max(0, Number$NEGATIVE_INFINITY), Math.max(0, n)), d += e$fix.text, Number$NEGATIVE_INFINITY = r, true)
  }
  t.forEach(function (e) {
    if (Object.prototype.hasOwnProperty.call(e, "fix")) {
      c.push(e)
    } else {
      s.push(e)
    }
  })
  if (c.length) {
    i("Found fixes to apply")
    var p
    var _ = false
    var A = r(c.sort(o))
    try {
      for (A.s(); !(p = A.n()).done;) {
        var /* [auto-meaningful-name] */p$value = p.value
        if ("function" !== typeof n || n(p$value)) {
          h(p$value)
          _ = true
        } else {
          s.push(p$value)
        }
      }
    } catch (v) {
      A.e(v)
    } finally {
      A.f()
    }
    d += l.slice(Math.max(0, Number$NEGATIVE_INFINITY))
    return {
      fixed: _,
      messages: s.sort(a),
      output: d
    }
  }
  i("No fixes to apply")
  return {
    fixed: false,
    messages: t,
    output: u + l
  }
}
module.exports = s
