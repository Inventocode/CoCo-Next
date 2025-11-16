/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：424__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../15"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$_114 from "./114"
function Gr(e) {
  return encodeURI(e.cdnUrl)
}
function Ur(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.width
}
function Wr(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.height
}
function Hr(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function Vr(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function zr(e) {
  return a.g(e)
}
function Yr(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.backgroundColor
}
function Kr(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.borderRadius
}
function qr(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.resizeMode
}
function Xr(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.fileId
}
function Qr(e, t) {
  a.l(e, t)
}
function Zr(e, t) {
  a.j(e, t)
}
function Jr(e, t) {
  a.j(e, {
    x: t
  })
}
function $r(e, t) {
  a.j(e, {
    y: t
  })
}
function eo(e, t) {
  a.k(e, {
    width: t
  })
}
function to(e, t) {
  a.k(e, {
    height: t
  })
}
function no(e, t) {
  if ($$_$$_15.pb(t)) {
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
function ro(e, t) {
  a.h(e, {
    borderRadius: t
  })
}
function oo(e, t) {
  a.h(e, {
    resizeMode: t
  })
}
function io(e, t) {
  if ($_114.d(t)) {
    a.h(e, {
      fileId: t
    })
  } else {
    $$_$$_14.a.log({
      messageId: "imageNotExists",
      type: "error",
      widgetId: e
    })
  }
}
function ao(e, t) {
  io(e, null === t || undefined === t ? undefined : t.id)
}
export { Gr as "424__part-8__Gr" }
export { Ur as "424__part-8__Ur" }
export { Wr as "424__part-8__Wr" }
export { Hr as "424__part-8__Hr" }
export { Vr as "424__part-8__Vr" }
export { zr as "424__part-8__zr" }
export { Yr as "424__part-8__Yr" }
export { Kr as "424__part-8__Kr" }
export { qr as "424__part-8__qr" }
export { Xr as "424__part-8__Xr" }
export { Qr as "424__part-8__Qr" }
export { Zr as "424__part-8__Zr" }
export { Jr as "424__part-8__Jr" }
export { $r as "424__part-8__$r" }
export { eo as "424__part-8__eo" }
export { to as "424__part-8__to" }
export { no as "424__part-8__no" }
export { ro as "424__part-8__ro" }
export { oo as "424__part-8__oo" }
export { io as "424__part-8__io" }
export { ao as "424__part-8__ao" }
