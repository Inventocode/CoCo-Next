/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：67
 */

"use strict"

export { d as c }
export { p as a }
export { f as b }
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../6"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_89 from /* 89 */"../89"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_413 from /* 413 */"./413"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../34/347/112"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
function d(e, t, n, d) {
  var p
  var f = Module_12.b(e)
  if (!f) {
    console.error("getWidget error")
    return null
  }
  var h = Src_shared_tools_index.q(f)
  var m = Module_12.b(h.parentId || "")
  if (!m) {
    console.error("getParentWidget error")
    return null
  }
  var g = undefined === n ? 1 : n + 1
  var _ = Module_89.d.get("".concat(m.id, "_").concat(t)) || {}
  if (_[g]) {
    h.attributes = Module_6.a(Module_6.a({}, h.attributes), _[g])
  }
  var v = m
  if (v.attributes.disabled && h.type === Src_editor_widget_builtIn_types.H) {
    if (["titleSlot"].includes(t)) {
      h.attributes.color = "#7C7C7C"
    } else {
      h.attributes.color = "#CACACA"
    }
  }
  if (undefined === n) {
    return Module_413.c({
      widget: h,
      forceRender: true
    })
  }
  var b = null === (p = v.attributes.templateSlotMap[t]) || undefined === p ? undefined : p.dataBindings
  if (d && b) {
    var y = d[b]
    if (h.type === Src_editor_widget_builtIn_types.H) {
      h.attributes.content = y || ""
    }
    if (h.type === Src_editor_widget_builtIn_types.v && y) {
      if (Module_112.b(y)) {
        h.attributes.fileId = y
      } else {
        Module_55.b.widgetError({
          widgetId: h.parentId || "",
          widgetType: m.type,
          message: "ListViewerWidget.imageNotExists"
        })
      }
    }
  }
  return Module_413.c({
    widget: Module_6.a(Module_6.a({}, h), {}, {
      id: "".concat(e, "_").concat(n)
    }),
    forceRender: true
  })
}
function p(e) {
  var t = {
    broken: false,
    waiting: false
  }
  var n = function () {
    t.broken = true
  }
  var r = function () {
    t.waiting = false
  }
  document.addEventListener("mouseup", n, {
    once: true
  })
  document.addEventListener("touchend", n, {
    once: true
  })
  !function n() {
    requestAnimationFrame(function () {
      if (!t.broken) {
        if (!t.waiting) {
          t.waiting = true
          e().finally(r)
        }
        n()
      }
    })
  }()
}
function f(e, t) {
  var n = false
  var r = {
    waiting: false
  }
  var o = function () {
    r.waiting = false
  }
  !function i() {
    requestAnimationFrame(function () {
      var a = e()
      if (a && a !== n) {
        if (!r.waiting) {
          r.waiting = true
          t().finally(o)
        }
      }
      n = a
      i()
    })
  }()
}
export default p
