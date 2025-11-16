/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2591__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_270_2621 from "../../270/2621"
var be = {
  set: function (e, t, n, r) {
    var i = e.get(t)
    if (!i) {
      i = new Map()
      e.set(t, i)
    }
    i.set(n, r)
  },
  get: function (e, t, n) {
    var r = e.get(t)
    return r ? r.get(n) : undefined
  },
  delete: function (e, t, n) {
    e.get(t).delete(n)
  }
}
export { be as "2591__part-2__be" }
