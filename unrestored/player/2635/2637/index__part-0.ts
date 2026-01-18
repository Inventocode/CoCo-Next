/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "../../../shared/1571/2636/719"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_80_index from "../../../shared/1571/2636/80/index"
import /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_80_index1 from "../../../shared/1571/2636/80/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_28_index from "../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_15 from "../../../shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_68 from "../../../shared/1571/2636/68"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_6 from "../../../shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_10_index from "../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_8 from "../../../shared/1571/2636/8"
import /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_81 from "../../../shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$_514_index from "./514/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_177 from "../../../shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_738_index from "../../../shared/1571/2636/738/index"
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
