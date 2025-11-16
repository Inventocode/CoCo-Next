/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：10
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */$_1438 from "./1438"
import * as /* [auto-meaningful-name] */$$_25_768 from "../25/768"
import * as /* [auto-meaningful-name] */$_1439 from "./1439"
function a(e, t) {
  return $_1438.a(e) || function (e, t) {
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
  }(e, t) || $$_25_768.a(e, t) || $_1439.a()
}
export default a
