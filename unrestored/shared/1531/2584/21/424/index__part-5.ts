/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：424__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../15"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_60 from "../../60"
import * as /* [auto-meaningful-name] */$$_$$_145 from "../../145"
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
function It(e, t) {
  a.l(e, t)
}
function At(e, t) {
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
  if ("number" === typeof t && (t < $$_$$_145.m || t > $$_$$_145.k)) {
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
  if ("number" === typeof t && (t < $$_$$_145.l || t > $$_$$_145.j)) {
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
    t = $$_$$_15.l(_Color(t))
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
    t = $$_$$_15.l(_Color(t))
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
function Ut(e, t) {
  a.h(e, {
    content: t
  })
}
export { mt as "424__part-5__mt" }
export { gt as "424__part-5__gt" }
export { _t as "424__part-5___t" }
export { vt as "424__part-5__vt" }
export { bt as "424__part-5__bt" }
export { yt as "424__part-5__yt" }
export { Et as "424__part-5__Et" }
export { Ot as "424__part-5__Ot" }
export { wt as "424__part-5__wt" }
export { Ct as "424__part-5__Ct" }
export { Tt as "424__part-5__Tt" }
export { St as "424__part-5__St" }
export { It as "424__part-5__It" }
export { At as "424__part-5__At" }
export { jt as "424__part-5__jt" }
export { Nt as "424__part-5__Nt" }
export { Rt as "424__part-5__Rt" }
export { kt as "424__part-5__kt" }
export { xt as "424__part-5__xt" }
export { Dt as "424__part-5__Dt" }
export { Mt as "424__part-5__Mt" }
export { Lt as "424__part-5__Lt" }
export { Pt as "424__part-5__Pt" }
export { Bt as "424__part-5__Bt" }
export { Ft as "424__part-5__Ft" }
export { Gt as "424__part-5__Gt" }
export { Ut as "424__part-5__Ut" }
