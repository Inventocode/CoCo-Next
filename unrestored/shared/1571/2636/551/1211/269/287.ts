/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：287
 */

"use strict"

export { o as a }
import { useMemo } from "react"
import * as /* [auto-meaningful-name] */$_697 from "./697"
function o(e, t) {
  return useMemo(function () {
    return null == e && null == t ? null : function (n) {
      $_697.a(e, n)
      $_697.a(t, n)
    }
  }, [e, t])
}
export default o
