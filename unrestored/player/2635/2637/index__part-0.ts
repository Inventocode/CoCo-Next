/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 719 */"../../../shared/1571/2636/719"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */ReactDom1 from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../../shared/1571/2636/68"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"./514/index"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_738 from /* 738 */"../../../shared/1571/2636/738/index"
function y() {
  window.parent.postMessage({
    type: "ON_INIT_SUCCESS"
  }, "*")
}
function w() {
  window.parent.postMessage({
    type: "ON_LOAD_SUCCESS",
    payload: {
      keyboard_staus: "none"
    }
  }, "*")
}
function E() {
  window.parent.postMessage({
    type: "ON_LOAD_FAIL"
  }, "*")
}
function O() {
  window.parent.postMessage({
    type: "ON_PLAYER_START"
  }, "*")
}
function T(t) {
  window.addEventListener("message", function (e) {
    if ("RESET_PLAYER" === e.data.type) {
      t()
    }
  })
}
export { y }
export { w }
export { E }
export { O }
export { T }
