/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：377
 */

"use strict"

export { r as clientOp }
export { o as serverOp }
export { g as blinkOTAdapter }
export { _ as procedurePlugin }
var r = {}
Object.defineProperty(r, "getCurrentScreenWorkspaceData", {
  get: function () {
    return u
  }
})
Object.defineProperty(r, "applyIdeToOp", {
  get: function () {
    return d
  }
})
Object.defineProperty(r, "addWorkspace", {
  get: function () {
    return p
  }
})
var o = {}
Object.defineProperty(o, "applyServerOp", {
  get: function () {
    return m
  }
})
import /* [auto-meaningful-name] */$_777_index = require("./777/index")
import /* [auto-meaningful-name] */$_728_index = require("./728/index")
import /* [auto-meaningful-name] */OtJson1 = require("ot-json1")
import /* [auto-meaningful-name] */$$_index = require("../index")
import /* [auto-meaningful-name] */$$_$$_43 = require("../../43")
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
import /* [auto-meaningful-name] */$$_$$_26_index = require("../../26/index")
import /* [auto-meaningful-name] */$$_244 = require("../244")
function m(e) {
  var t = $$_index.a.getDoc()
  var n = $$_$$_43.a()
  if (e && t) {
    if (3 === e.length && "blockly" === e[0]) {
      if (!$$_244.g(e[2])) {
        if ($$_244.e(e[2])) {
          (function (e) {
            $$_$$_26_index.z.addWorkspaceData(e[2].i)
          })(e)
        }
      }
    } else {
      var r
      var o = e[1]
      if (o === n) {
        try {
          g.decompose_and_transform_op(e)
        } catch (s) {
          window.confirm("协作异常，请刷新页面？")
        }
      }
      var i = null === (r = $$_$$_26_index.z.getWorkspaceDataByScreenId(o)) || undefined === r ? undefined : r.getProcedureManager()
      var a = t.blockly[o]
      if (i && a.workspaceJson) {
        _.analyze_op_and_update(e, a.workspaceJson, i)
        $$_$$_26_index.z.setWorkspaceDataByScreenId(o, a)
        $$_$$_26_index.z.refreshProcedureToolbox()
      }
    }
  }
}
var g = new $_777_index.OTAdapter(u, d)
var _ = new $_728_index.ProcedurePlugin()
g.register_plugins([_])
