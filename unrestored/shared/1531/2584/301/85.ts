/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：85
 */

"use strict"

export { s as c }
export { c as b }
export { l as e }
export { u as d }
export { d as a }
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions from "../../../../../src/shared/events/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../../src/shared/widget/custom/type"
function s(e) {
  return "".concat(e, ".__widgetName")
}
function c(e, t) {
  return "".concat(e, ".").concat(t)
}
function l(e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var n = {}
  var a = s(e$type)
  n[a] = e.title
  e.properties.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    var /* [auto-meaningful-name] */e$label = e.label
    var i = c(e$type, e$key)
    n[i] = e$label
  })
  var l = $$_$$_$$_$$_$$_src_shared_events_actions.b()
  var u = $$_11.a({}, l, n)
  $$_$$_$$_$$_$$_src_shared_ui_language.a(u)
}
function u(e, t) {
  for (var n in t) {
    var r = t[n]
    var i = {}
    var a = s(e.type)
    for (var l in i[a] = r[e.title], r) {
      i[c(e.type, l)] = r[l]
    }
    t[n] = i
  }
  $$_$$_$$_$$_$$_src_shared_ui_language.a(t)
}
function d(e, t, n) {
  if ($$_$$_$$_$$_$$_src_shared_widget_custom_type.d(e)) {
    return t
  }
  var r = "".concat(e, ".").concat(t)
  var s = $$_$$_$$_$$_$$_src_shared_events_actions.b()
  return $$_$$_$$_$$_$$_src_shared_ui_language.c(s, r, n)
}
export default d
