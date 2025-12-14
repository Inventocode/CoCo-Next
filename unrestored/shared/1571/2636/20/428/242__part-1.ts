/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：242__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_25_index from "../../25/index"
import * as /* [auto-meaningful-name] */$$_$$_11 from "../../11"
import * as /* [auto-meaningful-name] */$$_$$_5 from "../../5"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
function p(e, t) {
  return [
    Animejs.default({
      targets: "#".concat(e),
      borderColor: _Color(t).darken(.3).hex(),
      duration: 2e3
    })
  ]
}
function f(e, t) {
  return [
    Animejs.default({
      targets: "#".concat(e),
      backgroundColor: _Color(t).darken(.3).alpha(.1).rgb().string(),
      duration: 2e3
    })
  ]
}
function h(e) {
  return [
    Animejs.default({
      targets: "#".concat(e, " input"),
      translateX: [-4, 4, -2, 2, -1, 1, 0],
      duration: 300,
      easing: "linear"
    })
  ]
}
function m(e) {
  return [
    Animejs.default({
      targets: "#".concat(e, " input"),
      translateX: [-4, 4, -2, 2, -1, 1, 0],
      duration: 300,
      easing: "linear"
    })
  ]
}
export { p }
export { f }
export { h }
export { m }
