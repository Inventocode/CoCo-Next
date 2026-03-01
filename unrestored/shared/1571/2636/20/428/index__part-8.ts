/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../34/347/112"
function Gr(e) {
  return encodeURI(e.cdnUrl)
}
function Wr(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function Ur(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.height
}
function Hr(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function Vr(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function zr(e) {
  return Module_12.g(e)
}
function Yr(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.backgroundColor
}
function Kr(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.borderRadius
}
function qr(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.resizeMode
}
function Xr(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.fileId
}
function Qr(e, t) {
  Module_12.l(e, t)
}
function Zr(e, t) {
  Module_12.j(e, t)
}
function Jr(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function $r(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function eo(e, t) {
  Module_12.k(e, {
    width: t
  })
}
function to(e, t) {
  Module_12.k(e, {
    height: t
  })
}
function no(e, t) {
  if (Src_shared_tools_index.pb(t)) {
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
function ro(e, t) {
  Module_12.h(e, {
    borderRadius: t
  })
}
function oo(e, t) {
  Module_12.h(e, {
    resizeMode: t
  })
}
function io(e, t) {
  if (Module_112.d(t)) {
    Module_12.h(e, {
      fileId: t
    })
  } else {
    Module_14.a.log({
      messageId: "imageNotExists",
      type: "error",
      widgetId: e
    })
  }
}
function ao(e, t) {
  io(e, null === t || undefined === t ? undefined : t.id)
}
export { Gr }
export { Wr }
export { Ur }
export { Hr }
export { Vr }
export { zr }
export { Yr }
export { Kr }
export { qr }
export { Xr }
export { Qr }
export { Zr }
export { Jr }
export { $r }
export { eo }
export { to }
export { no }
export { ro }
export { oo }
export { io }
export { ao }
