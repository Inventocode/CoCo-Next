/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：377__part-2
 */

"use strict"

import { u, d } from "./index__part-1"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"../../43"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../index"
import * as /* [auto-meaningful-name] */Module_737 from /* 737 */"./737/index"
import * as /* [auto-meaningful-name] */Module_788 from /* 788 */"./788/index"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../26/index"
import * as /* [auto-meaningful-name] */Module_243 from /* 243 */"../243"
function m(e) {
  var t = Module_24.a.getDoc()
  var n = Module_43.a()
  if (e && t) {
    if (3 === e.length && "blockly" === e[0]) {
      if (!Module_243.g(e[2])) {
        if (Module_243.e(e[2])) {
          (function (e) {
            Module_26.z.addWorkspaceData(e[2].i)
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
      var i = null === (r = Module_26.z.getWorkspaceDataByScreenId(o)) || undefined === r ? undefined : r.getProcedureManager()
      var a = t.blockly[o]
      if (i && a.workspaceJson) {
        _.analyze_op_and_update(e, a.workspaceJson, i)
        Module_26.z.setWorkspaceDataByScreenId(o, a)
        Module_26.z.refreshProcedureToolbox()
      }
    }
  }
}
var g = new Module_788.OTAdapter(u, d)
var _ = new Module_737.ProcedurePlugin()
g.register_plugins([_])
export { m }
export { g }
export { _ }
