/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：377__part-2
 */

"use strict"

import { "377__part-1__u" as u, "377__part-1__d" as d } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_$$_43 from "../../43"
import * as /* [auto-meaningful-name] */$$_index from "../index"
import * as /* [auto-meaningful-name] */$_728_index from "./728/index"
import * as /* [auto-meaningful-name] */$_777_index from "./777/index"
import * as /* [auto-meaningful-name] */$$_$$_26_index from "../../26/index"
import * as /* [auto-meaningful-name] */$$_244 from "../244"
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
export { m as "377__part-2__m" }
export { g as "377__part-2__g" }
export { _ as "377__part-2___" }
