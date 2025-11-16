/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：67
 */

"use strict"

export { d as c }
export { p as a }
export { f as b }
import * as /* [auto-meaningful-name] */$$_$$_$$_6 from "../../../6"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../5"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as /* [auto-meaningful-name] */$$_89 from "../89"
import * as /* [auto-meaningful-name] */$$_$$_$$_15 from "../../../15"
import * as /* [auto-meaningful-name] */$_410 from "./410"
import * as /* [auto-meaningful-name] */$$_114 from "../114"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
function d(e, t, n, d) {
  var p
  var f = $$_12.b(e)
  if (!f) {
    console.error("getWidget error")
    return null
  }
  var h = $$_$$_$$_15.q(f)
  var m = $$_12.b(h.parentId || "")
  if (!m) {
    console.error("getParentWidget error")
    return null
  }
  var g = undefined === n ? 1 : n + 1
  var _ = $$_89.d.get("".concat(m.id, "_").concat(t)) || {}
  if (_[g]) {
    h.attributes = $$_$$_$$_6.a($$_$$_$$_6.a({}, h.attributes), _[g])
  }
  var v = m
  if (v.attributes.disabled && h.type === $$_$$_$$_5.H) {
    if (["titleSlot"].includes(t)) {
      h.attributes.color = "#7C7C7C"
    } else {
      h.attributes.color = "#CACACA"
    }
  }
  if (undefined === n) {
    return $_410.c({
      widget: h,
      forceRender: true
    })
  }
  var b = null === (p = v.attributes.templateSlotMap[t]) || undefined === p ? undefined : p.dataBindings
  if (d && b) {
    var y = d[b]
    if (h.type === $$_$$_$$_5.H) {
      h.attributes.content = y || ""
    }
    if (h.type === $$_$$_$$_5.v && y) {
      if ($$_114.b(y)) {
        h.attributes.fileId = y
      } else {
        $$_$$_$$_55.b.widgetError({
          widgetId: h.parentId || "",
          widgetType: m.type,
          message: "ListViewerWidget.imageNotExists"
        })
      }
    }
  }
  return $_410.c({
    widget: $$_$$_$$_6.a($$_$$_$$_6.a({}, h), {}, {
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
