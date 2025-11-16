/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：206__part-1
 */

"use strict"

import { "206__part-0__A" as A } from "./index__part-0"
import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as /* [auto-meaningful-name] */$$_47 from "../47"
import * as /* [auto-meaningful-name] */$_139 from "./139"
import * as /* [auto-meaningful-name] */$_208_index from "./208/index"
import * as /* [auto-meaningful-name] */$$_323 from "../323"
import * as /* [auto-meaningful-name] */$$_55 from "../55"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
var k = ["Coco", "AsyncScheduler", "asyncScheduler"]
function x(e) {
  var t = /Expected to return a value at the end of async function '(.+)'./.exec(e)
  if (t) {
    return t[1]
  }
}
var D = new RegExp("return \\/\\* blockId=(\\w+);blockType=".concat($_208_index.PROCEDURE_BLOCK_TYPES.RETURN, " \\*\\/"))
function M(e, t) {
  var n = new RegExp("await (?:Coco.tryExecute\\()?".concat(e.map(function (e) {
    return e.replace(/\$/g, "\\$")
  }).join("|"), " \\/\\* blockId=(\\w+);blockType=").concat($_208_index.PROCEDURE_BLOCK_TYPES.CALL_RETURN, " \\*\\/")).exec(t)
  if (n) {
    return n[1]
  }
}
function L(e, t, n, r, o, i) {
  var a = e + "\n\n" + t
  var s = a.split(/\n{2,}/)
  var c = o.id
  var l = [].concat(k, $$_25_index.a(n))
  var u = function (e) {
    var t = D.exec(e)
    if (t) {
      return t[1]
    }
  }(e)
  if (u) {
    throw new $_139.b($_139.a.RETURN_NOT_IN_FUNCTION, c, u, "returnNotInFunction")
  }
  var d
  var p = $$_47.a(s)
  try {
    for (p.s(); !(d = p.n()).done;) {
      var /* [auto-meaningful-name] */d$value = d.value
      if (d$value.trim().length) {
        var h
        var v = A(d$value, o, i, l)
        var b = $$_47.a(v)
        try {
          for (b.s(); !(h = b.n()).done;) {
            var /* [auto-meaningful-name] */h$value = h.value
            var E = $$_323.a(d$value, h$value)
            if ("no-undef" === h$value.ruleId) {
              throw new $_139.b($_139.a.NO_UNDEF, c, E.blockId, "noUndef", E)
            }
            if ("consistent-return" === h$value.ruleId) {
              var O = x(h$value.message)
              var w = O ? r.get(O) : undefined
              if (w) {
                w.consistentReturn = false
              }
            } else {
              if ("no-loop-control-outside-loop" === h$value.ruleId) {
                throw new $_139.b($_139.a.LOOP_CONTROL_NOT_IN_LOOP, c, E.blockId, "loopControlOutsideLoop", E)
              }
              if ("widgets-must-exists" === h$value.ruleId) {
                $$_55.b.push({
                  type: "warning",
                  message: $$_28_index.o("widgetNotExists"),
                  screenId: c,
                  blockId: E.blockId
                })
              }
            }
          }
        } catch (S) {
          b.e(S)
        } finally {
          b.f()
        }
      }
    }
  } catch (S) {
    p.e(S)
  } finally {
    p.f()
  }
  var C = []
  var T = []
  r.forEach(function (e, t) {
    if (e.hasReturn) {
      if (!e.consistentReturn) {
        C.push(t)
      }
    } else {
      T.push(t)
    }
  })
  if (u = M(T, a)) {
    throw new $_139.b($_139.a.NO_RETURN_FUNCTION, c, u, "noReturnFunction")
  }
  if (u = M(C, a)) {
    throw new $_139.b($_139.a.BRANCH_RETURN_FUNCTION, c, u, "branchReturnFunction")
  }
}
export { L as "206__part-1__L" }
