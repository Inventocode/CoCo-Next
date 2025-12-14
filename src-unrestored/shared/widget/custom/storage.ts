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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$_type from "./type"
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
    return $_type.d(e.type)
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
    if ($$_$$_$$_$$_unrestored_shared_1571_2636_9.Mb(e.type)) {
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
    if ($_type.d(e)) {
      a.delete(e)
    }
  })
  i.clear()
}
export default c
