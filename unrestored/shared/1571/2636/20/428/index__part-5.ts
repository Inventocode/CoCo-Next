/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../../../../../src/shared/tools"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as /* [auto-meaningful-name] */$$_$$_60 from "../../60"
import * as /* [auto-meaningful-name] */$$_$$_146 from "../../146"
function mt(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.content
}
function gt(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.color
}
function _t(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.fontSize
}
function vt(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.fontFamily
}
function bt(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.backgroundColor
}
function yt(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.justifyContent
}
function Et(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.textAlign
}
function Ot(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.height
}
function wt(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.width
}
function Ct(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function Tt(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function St(e) {
  return a.g(e)
}
function At(e, t) {
  a.l(e, t)
}
function It(e, t) {
  a.j(e, t)
}
function jt(e, t) {
  a.j(e, {
    x: t
  })
}
function Nt(e, t) {
  a.j(e, {
    y: t
  })
}
function Rt(e, t) {
  a.k(e, t)
}
function kt(e, t) {
  if ("number" === typeof t && (t < $$_$$_146.m || t > $$_$$_146.k)) {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    a.k(e, {
      width: t
    })
  }
}
function xt(e, t) {
  if ("number" === typeof t && (t < $$_$$_146.l || t > $$_$$_146.j)) {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    a.k(e, {
      height: t
    })
  }
}
function Dt(e, t) {
  var n = $$_$$_28_index.p(t)
  n = n.replace(/<br>/gi, "\n")
  a.h(e, {
    content: n
  })
}
function Mt(e, t) {
  if ($$_$$_15.pb(t)) {
    t = $$_$$_15.l(Color1(t))
    a.h(e, {
      color: t
    })
  } else {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function Lt(e, t) {
  if ("number" === typeof t) {
    if (t < $$_$$_60.n || t > $$_$$_60.e) {
      $$_$$_14.a.log({
        type: "warning",
        messageId: "valueOutOfRange",
        widgetId: e
      })
    } else {
      t = Math.round(t)
      a.h(e, {
        fontSize: t
      })
    }
  } else {
    $$_$$_14.a.log({
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
  if ($$_$$_15.pb(t)) {
    t = $$_$$_15.l(Color1(t))
    a.h(e, {
      backgroundColor: t
    })
  } else {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function Bt(e, t, n) {
  a.h(e, {
    justifyContent: n,
    textAlign: t
  })
}
function Ft(e, t) {
  a.h(e, {
    textAlign: t
  })
}
function Gt(e, t) {
  a.h(e, {
    justifyContent: t
  })
}
function Wt(e, t) {
  a.h(e, {
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
