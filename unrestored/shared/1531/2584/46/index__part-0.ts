/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_40 from "../40"
var i = function () {
  function e() {
    $$_27.a(this, e)
    this.profileMap = new Map()
  }
  $$_40.a(e, [{
    key: "insertBlockProfile",
    value: function (e, t) {
      this.profileMap.set(e, t)
    }
  }, {
    key: "getBlockProfileList",
    value: function () {
      var e = []
      this.profileMap.forEach(function (t) {
        return e.push(t)
      })
      return e
    }
  }])
  return e
}()
export { i as "46__part-0__i" }
