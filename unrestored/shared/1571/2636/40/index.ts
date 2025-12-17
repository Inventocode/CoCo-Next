/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：40
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$_1017 from "./1017"
import * as /* [auto-meaningful-name] */$_782 from "./782"
import * as /* [auto-meaningful-name] */$_1018 from "./1018"
function a(e, t) {
  return $_1017.a(e) || function (e, t) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
      var n = []
      var r = true
      var i = false
      var o = undefined
      try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
          ;
        }
      } catch (c) {
        i = true
        o = c
      } finally {
        try {
          if (!(r || null == s.return)) {
            s.return()
          }
        } finally {
          if (i) {
            throw o
          }
        }
      }
      return n
    }
  }(e, t) || $_782.a(e, t) || $_1018.a()
}
export default a
