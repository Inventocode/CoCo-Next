/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_377 from /* 377 */"./24/377/index"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"./97/index"
function De(e) {
  return 2 === e.length && "screens" === e[0]
}
function Me(e, t) {
  e = Module_97.g(e)
  var n = OtJson1.insertOp(["screens", e.id], e)
  var r = OtJson1.insertOp(["screenIds", t], e.id)
  var o = OtJson1.type.compose(n, r)
  Module_24.a.applyClient(o)
}
function Le(e, t) {
  var n = OtJson1.removeOp(["screens", t])
  var r = OtJson1.removeOp(["screenIds", e])
  var o = OtJson1.type.compose(n, r)
  if (function (e) {
    var t = Module_24.a.getDoc()
    return null === t || undefined === t ? undefined : t.blockly[e]
  }(t)) {
    o = OtJson1.type.compose(o, OtJson1.removeOp(["blockly", t]))
  }
  Module_24.a.applyClient(o)
}
function Pe(e, t) {
  var n = OtJson1.moveOp(["screenIds", e], ["screenIds", t])
  Module_24.a.applyClient(n)
}
function Be(e, t, n) {
  var r = OtJson1.replaceOp(["screens", e, t], true, n)
  Module_24.a.applyClient(r)
}
function Fe(e) {
  if (De(e.path)) {
    (function (e) {
      var t = e.path[1]
      Module_43.h(Src_editor_redux_common_actions.ng(t, false))
    })(e)
  }
}
function Ge(e, t) {
  var /* [auto-meaningful-name] */e$path
  if (De(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Object.entries(e$op$i.widgets).forEach(function (e) {
        var t = Module_10.a(e, 2)
        t[0]
        var n = t[1]
        Module_9.Ub(n.id, n)
      })
      var r = Module_97.d(e$op$i)
      Module_43.h(Src_editor_redux_common_actions.if(r))
      var o = null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.screenIds
      if (o) {
        Module_43.h(Src_editor_redux_common_actions.xg(Module_25.a(o)))
      }
    })(e)
  }
  if (2 === (e$path = e.path).length && "screenIds" === e$path[0]) {
    (function () {
      var e
      var t = null === (e = Module_24.a.getDoc()) || undefined === e ? undefined : e.screenIds
      if (t) {
        Module_43.h(Src_editor_redux_common_actions.xg(Module_25.a(t)))
      }
    })()
  }
  if (function (e) {
    return 3 === e.length && "screens" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path1 = e.path
      var n = e.op
      var r = e$path1[1]
      var o = e$path1[2]
      var i = n.i
      Module_43.h(Src_editor_redux_common_actions.Jg(r, o, i, false))
    })(e)
  }
}
export { Me }
export { Le }
export { Pe }
export { Be }
export { Fe }
export { Ge }
