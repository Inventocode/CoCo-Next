/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../48/3/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_42 from /* 42 */"../42/index"
import * as /* [auto-meaningful-name] */Module_111 from /* 111 */"./111"
import * as /* [auto-meaningful-name] */Module_276 from /* 276 */"../276"
var Vn = RegeneratorRuntime.mark(Yn)
var zn = RegeneratorRuntime.mark(Kn)
function Yn(e, t) {
  var /* [auto-meaningful-name] */r$sent
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.prev = 0
          r.next = 3
          return Module_3.b(e, t)
        case 3:
          r$sent = r.sent
          return r.abrupt("return", r$sent)
        case 7:
          r.prev = 7
          r.t0 = r.catch(0)
          console.error(r.t0)
        case 10:
        case "end":
          return r.stop()
      }
    }
  }, Vn, null, [[0, 7]])
}
function Kn(e, t) {
  var /* [auto-meaningful-name] */r$sent
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.prev = 0
          r.next = 3
          return Module_3.b(e, t)
        case 3:
          r$sent = r.sent
          t.resolve(r$sent)
          return r.abrupt("return", r$sent)
        case 8:
          r.prev = 8
          r.t0 = r.catch(0)
          return r.abrupt("return", t.reject(r.t0))
        case 11:
        case "end":
          return r.stop()
      }
    }
  }, zn, null, [[0, 8]])
}
function qn(e) {
  return RegeneratorRuntime.mark(function t(n) {
    var r
    var /* [auto-meaningful-name] */t$sent
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (!(r = e[n.type])) {
              t.next = 11
              break
            }
            if (!("reject" in n) || !("resolve" in n)) {
              t.next = 9
              break
            }
            t.next = 5
            return Module_3.b(Kn, r, n)
          case 5:
            t$sent = t.sent
            return t.abrupt("return", t$sent)
          case 9:
            t.next = 11
            return Module_3.b(Yn, r, n)
          case 11:
          case "end":
            return t.stop()
        }
      }
    }, t)
  })
}
export { qn }
