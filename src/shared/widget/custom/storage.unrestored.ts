/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：96
 */

"use strict"

export { s as b }
export { c as a }
export { l as f }
export { u as g }
export { d as e }
export { p as d }
export { f as c }
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as o from /* 78 */"./type"
var i = new Map()
var a = new Map()
function s(e) {
  var /* [auto-meaningful-name] */e$type = e.type
  i.set(e$type, e)
}
function c(e) {
  var /* [auto-meaningful-name] */e$type = e.type
  a.set(e$type, e)
}
function l(e) {
  return i.get(e) || a.get(e)
}
function u(e) {
  return a.has(e)
}
function d() {
  return Array.from(a.values()).filter(function (e) {
    return o.d(e.type)
  }).map(function (e) {
    return {
      type: e.type,
      code: e.code
    }
  })
}
function p() {
  var e = Array.from(i.values())
  var t = []
  e.forEach(function (e) {
    if (Module_9.Mb(e.type)) {
      t.push({
        id: e.id,
        type: e.type,
        cdnUrl: e.cdnUrl
      })
    }
  })
  return t
}
function f() {
  Array.from(a.keys()).forEach(function (e) {
    if (o.d(e)) {
      a.delete(e)
    }
  })
  i.clear()
}
export default c
