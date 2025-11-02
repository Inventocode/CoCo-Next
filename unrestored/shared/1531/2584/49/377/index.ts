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
import i = require("./777/index");
import a = require("./728/index");
import OtJson1 = require("ot-json1");
import c = require("../../24/index");
import l = require("../../43");
function u() {
  var e = l.a()
  var t = c.a.getDoc()
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
  var t = l.a()
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
      c.a.applyClient(e)
    })
  }
}
function p(e, t) {
  if (t) {
    var n = OtJson1.insertOp(["blockly", e], t)
    c.a.applyClient(n)
  }
}
import f = require("../../26/index");
import h = require("../244");
function m(e) {
  var t = c.a.getDoc()
  var n = l.a()
  if (e && t) {
    if (3 === e.length && "blockly" === e[0]) {
      if (!h.g(e[2])) {
        if (h.e(e[2])) {
          (function (e) {
            f.z.addWorkspaceData(e[2].i)
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
      var i = null === (r = f.z.getWorkspaceDataByScreenId(o)) || undefined === r ? undefined : r.getProcedureManager()
      var a = t.blockly[o]
      if (i && a.workspaceJson) {
        _.analyze_op_and_update(e, a.workspaceJson, i)
        f.z.setWorkspaceDataByScreenId(o, a)
        f.z.refreshProcedureToolbox()
      }
    }
  }
}
var g = new i.OTAdapter(u, d)
var _ = new a.ProcedurePlugin()
g.register_plugins([_])
