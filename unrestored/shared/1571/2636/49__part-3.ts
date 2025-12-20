/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-3
 */

"use strict"

import * as Oe from "./43"
import * as ye from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as /* [auto-meaningful-name] */$_24_377_index from "./24/377/index"
import * as xe from "./97"
function De(e) {
  return 2 === e.length && "screens" === e[0]
}
function Me(e, t) {
  e = xe.g(e)
  var n = OtJson1.insertOp(["screens", e.id], e)
  var r = OtJson1.insertOp(["screenIds", t], e.id)
  var o = OtJson1.type.compose(n, r)
  $_24_index.a.applyClient(o)
}
function Le(e, t) {
  var n = OtJson1.removeOp(["screens", t])
  var r = OtJson1.removeOp(["screenIds", e])
  var o = OtJson1.type.compose(n, r)
  if (function (e) {
    var t = $_24_index.a.getDoc()
    return null === t || undefined === t ? undefined : t.blockly[e]
  }(t)) {
    o = OtJson1.type.compose(o, OtJson1.removeOp(["blockly", t]))
  }
  $_24_index.a.applyClient(o)
}
function Pe(e, t) {
  var n = OtJson1.moveOp(["screenIds", e], ["screenIds", t])
  $_24_index.a.applyClient(n)
}
function Be(e, t, n) {
  var r = OtJson1.replaceOp(["screens", e, t], true, n)
  $_24_index.a.applyClient(r)
}
function Fe(e) {
  if (De(e.path)) {
    (function (e) {
      var t = e.path[1]
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.ng(t, false))
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
        var t = $_10_index.a(e, 2)
        t[0]
        var n = t[1]
        ye.Ub(n.id, n)
      })
      var r = xe.d(e$op$i)
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.if(r))
      var o = null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.screenIds
      if (o) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.xg($_25_index.a(o)))
      }
    })(e)
  }
  if (2 === (e$path = e.path).length && "screenIds" === e$path[0]) {
    (function () {
      var e
      var t = null === (e = $_24_index.a.getDoc()) || undefined === e ? undefined : e.screenIds
      if (t) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.xg($_25_index.a(t)))
      }
    })()
  }
  if (function (e) {
    return 3 === e.length && "screens" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path = e.path
      var n = e.op
      var r = _e$path[1]
      var o = _e$path[2]
      var i = n.i
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Jg(r, o, i, false))
    })(e)
  }
}
export { Me }
export { Le }
export { Pe }
export { Be }
export { Fe }
export { Ge }
