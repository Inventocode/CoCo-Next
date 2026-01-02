/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：242__part-2
 */

"use strict"

import { r, o, i } from "./242__part-0"
var g
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_11 from "../../11"
import * as /* [auto-meaningful-name] */$$_$$_25_index from "../../25/index"
import * as /* [auto-meaningful-name] */$$_$$_738_302 from "../../738/302"
function v(e, t) {
  var n = document.querySelectorAll("#".concat(e, " .radio-widget-button"))[t]
  return n ? [
    Animejs.default({
      targets: n,
      scale: [
        {
          value: .95,
          duration: 100
        }, {
          value: 1,
          duration: 200
        }
      ]
    })
  ] : []
}
function b(e, t) {
  var n = document.querySelectorAll("#".concat(e, " .checkbox-widget-box "))[t]
  return n ? [
    Animejs.default({
      targets: n.querySelector("svg"),
      scale: [.8, 1.2],
      duration: 500
    })
  ] : []
}
g = {}
$$_$$_11.a(g, $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.w, r)
$$_$$_11.a(g, $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.d, $$_$$_738_302)
$$_$$_11.a(g, $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.C, o)
$$_$$_11.a(g, $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.g, i)
var y = g
var E = new Map()
function O(e, t, n) {
  w(e)
  var r = y[t]
  if (n && r && n in r) {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length > 3 ? arguments$length - 3 : 0), s = 3; s < arguments$length; s++) {
      i[s - 3] = arguments[s]
    }
    var c = r[n].apply(r, [e].concat(i))
    E.set(e, [].concat($$_$$_25_index.a(E.get(e) || []), $$_$$_25_index.a(c)))
  }
}
function w(e) {
  var t = E.get(e)
  if (t) {
    t.reverse().forEach(function (e) {
      return e.reset()
    })
  }
  E.set(e, [])
}
export { v }
export { b }
export { O }
export { w }
