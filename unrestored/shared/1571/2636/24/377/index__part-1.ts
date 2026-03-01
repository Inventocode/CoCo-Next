/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：377__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_788 from /* 788 */"./788/index"
import * as /* [auto-meaningful-name] */Module_737 from /* 737 */"./737/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../index"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"../../43"
function u() {
  var e = Module_43.a()
  var t = Module_24.a.getDoc()
  if (e) {
    var n = null === t || undefined === t ? undefined : t.blockly[e].workspaceJson
    if (n) {
      return n
    }
  }
  return {
    blocks: {},
    connections: {},
    comments: {}
  }
}
function d(e) {
  var t = Module_43.a()
  if (t) {
    e.forEach(function (e) {
      if (!(null === e || undefined === e)) {
        e.unshift("workspaceJson")
      }
      if (!(null === e || undefined === e)) {
        e.unshift(t)
      }
      if (!(null === e || undefined === e)) {
        e.unshift("blockly")
      }
      Module_24.a.applyClient(e)
    })
  }
}
function p(e, t) {
  if (t) {
    var n = OtJson1.insertOp(["blockly", e], t)
    Module_24.a.applyClient(n)
  }
}
export { u }
export { d }
export { p }
