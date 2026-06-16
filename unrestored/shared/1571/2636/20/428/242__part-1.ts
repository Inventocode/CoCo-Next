/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：242__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../25/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../11"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Animejs from /* 205 */"animejs"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
function p(e, t) {
  return [
    Animejs.default({
      targets: "#".concat(e),
      borderColor: Color1(t).darken(.3).hex(),
      duration: 2e3
    })
  ]
}
function f(e, t) {
  return [
    Animejs.default({
      targets: "#".concat(e),
      backgroundColor: Color1(t).darken(.3).alpha(.1).rgb().string(),
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
