/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-6
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_242 from /* 242 */"./242"
function Ht(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function Vt(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function zt(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function Yt(e) {
  return Module_12.g(e)
}
function Kt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.disabled
}
function qt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.color
}
function Xt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.value
}
function Qt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.placeholder
}
function Zt(e) {
  var t
  return (null === (t = Module_12.d(e)) || undefined === t ? undefined : t.errorMessage) || ""
}
function Jt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.mode
}
function $t(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.sizeType
}
function en(e) {
  var t
  return undefined !== (null === (t = Module_12.d(e)) || undefined === t ? undefined : t.errorMessage)
}
function tn(e, t) {
  Module_12.l(e, t)
}
function nn(e, t) {
  Module_12.j(e, t)
}
function rn(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function on(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function an(e, t) {
  Module_12.k(e, {
    width: t
  })
}
function sn(e, t) {
  Module_12.h(e, {
    color: t
  })
}
function cn(e, t) {
  Module_12.h(e, {
    value: Module_28.p(t)
  })
}
function ln(e, t) {
  Module_12.h(e, {
    placeholder: Module_28.p(t)
  })
}
function un(e, t) {
  Module_12.h(e, {
    errorMessage: Module_28.p(t)
  })
  var n = Module_12.c(e)
  if (n) {
    Module_242.b(e, Src_editor_widget_builtIn_types.w, Module_28.m("error", n, Jt(e)))
  }
}
function dn(e) {
  Module_12.h(e, {
    errorMessage: undefined
  })
}
function pn(e, t) {
  Module_12.h(e, {
    disabled: t
  })
}
function fn(e, t) {
  Module_12.h(e, {
    mode: t
  })
}
function hn(e, t) {
  Module_12.h(e, {
    sizeType: t
  })
}
export { Ht }
export { Vt }
export { zt }
export { Yt }
export { Kt }
export { qt }
export { Xt }
export { Qt }
export { Zt }
export { Jt }
export { $t }
export { en }
export { tn }
export { nn }
export { rn }
export { on }
export { an }
export { sn }
export { cn }
export { ln }
export { un }
export { dn }
export { pn }
export { fn }
export { hn }
