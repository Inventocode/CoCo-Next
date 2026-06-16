/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../../60"
import * as /* [auto-meaningful-name] */Module_146 from /* 146 */"../../146"
function mt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.content
}
function gt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.color
}
function _t(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.fontSize
}
function vt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.fontFamily
}
function bt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.backgroundColor
}
function yt(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.justifyContent
}
function Et(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.textAlign
}
function Ot(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.height
}
function wt(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function Ct(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function Tt(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function St(e) {
  return Module_12.g(e)
}
function At(e, t) {
  Module_12.l(e, t)
}
function It(e, t) {
  Module_12.j(e, t)
}
function jt(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function Nt(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function Rt(e, t) {
  Module_12.k(e, t)
}
function kt(e, t) {
  if ("number" === typeof t && (t < Module_146.m || t > Module_146.k)) {
    Module_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    Module_12.k(e, {
      width: t
    })
  }
}
function xt(e, t) {
  if ("number" === typeof t && (t < Module_146.l || t > Module_146.j)) {
    Module_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    Module_12.k(e, {
      height: t
    })
  }
}
function Dt(e, t) {
  var n = Module_28.p(t)
  n = n.replace(/<br>/gi, "\n")
  Module_12.h(e, {
    content: n
  })
}
function Mt(e, t) {
  if (Src_shared_tools_index.pb(t)) {
    t = Src_shared_tools_index.l(Color1(t))
    Module_12.h(e, {
      color: t
    })
  } else {
    Module_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function Lt(e, t) {
  if ("number" === typeof t) {
    if (t < Module_60.n || t > Module_60.e) {
      Module_14.a.log({
        type: "warning",
        messageId: "valueOutOfRange",
        widgetId: e
      })
    } else {
      t = Math.round(t)
      Module_12.h(e, {
        fontSize: t
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "字号"
      }
    })
  }
}
function Pt(e, t) {
  if (Src_shared_tools_index.pb(t)) {
    t = Src_shared_tools_index.l(Color1(t))
    Module_12.h(e, {
      backgroundColor: t
    })
  } else {
    Module_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function Bt(e, t, n) {
  Module_12.h(e, {
    justifyContent: n,
    textAlign: t
  })
}
function Ft(e, t) {
  Module_12.h(e, {
    textAlign: t
  })
}
function Gt(e, t) {
  Module_12.h(e, {
    justifyContent: t
  })
}
function Wt(e, t) {
  Module_12.h(e, {
    content: t
  })
}
export { mt }
export { gt }
export { _t }
export { vt }
export { bt }
export { yt }
export { Et }
export { Ot }
export { wt }
export { Ct }
export { Tt }
export { St }
export { At }
export { It }
export { jt }
export { Nt }
export { Rt }
export { kt }
export { xt }
export { Dt }
export { Mt }
export { Lt }
export { Pt }
export { Bt }
export { Ft }
export { Gt }
export { Wt }
