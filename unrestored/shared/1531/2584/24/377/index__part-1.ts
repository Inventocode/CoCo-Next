/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：377__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$_777_index from "./777/index"
import * as /* [auto-meaningful-name] */$_728_index from "./728/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$$_index from "../index"
import * as /* [auto-meaningful-name] */$$_$$_43 from "../../43"
function u() {
  var e = $$_$$_43.a()
  var t = $$_index.a.getDoc()
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
  var t = $$_$$_43.a()
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
      $$_index.a.applyClient(e)
    })
  }
}
function p(e, t) {
  if (t) {
    var n = OtJson1.insertOp(["blockly", e], t)
    $$_index.a.applyClient(n)
  }
}
export { u as "377__part-1__u" }
export { d as "377__part-1__d" }
export { p as "377__part-1__p" }
