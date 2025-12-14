/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_738_66 from "../738/66"
import * as a from "../6"
import * as /* [auto-meaningful-name] */$$_47 from "../47"
var Ne = $$_738_66.a.Record({
  configs: {},
  variableList: $$_738_66.a.List([]),
  tableDataDialog: {
    visible: false
  },
  dataWatchToast: {
    visible: false
  }
})()
function Re(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$configs = t$payload.configs
  var /* [auto-meaningful-name] */t$payload$variableList = t$payload.variableList
  return e.set("variableList", $$_738_66.a.List(t$payload$variableList)).set("configs", t$payload$configs)
}
function ke(e) {
  var t = ["PRIMITIVE", "DICT", "LIST"]
  var n = e.get("variableList")
  n.forEach(function (e) {
    if (t.includes(e.type)) {
      e.value = e.defaultValue
    }
  })
  return e.set("variableList", n)
}
function xe(e, t) {
  var /* [auto-meaningful-name] */t$payload$id = t.payload.id
  var r = e.get("variableList")
  var o = r.findIndex(function (e) {
    return e.id === t$payload$id
  })
  return o >= 0 ? e.update("variableList", function (e) {
    return e.setIn([o], t.payload)
  }) : e.setIn(["variableList"], r.push(t.payload))
}
function De(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var r = e.get("variableList").findIndex(function (e) {
    return e.id === t$payload
  })
  return r > -1 ? e.deleteIn(["variableList", r]) : e
}
function Me(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$property = t$payload.property
  var /* [auto-meaningful-name] */t$payload$value = t$payload.value
  var a = e.get("variableList").findIndex(function (e) {
    return e.id === t$payload$id
  })
  return a >= 0 ? e.update("variableList", function (e) {
    return e.setIn([a, t$payload$property], t$payload$value)
  }) : e
}
function Le(e, t) {
  if (t.payload) {
    return e.setIn(["variableList"], $$_738_66.a.List())
  }
  var n
  var r = e.get("variableList")
  var o = $$_47.a(r)
  try {
    for (o.s(); !(n = o.n()).done;) {
      n.value.isWatching = false
    }
  } catch (i) {
    o.e(i)
  } finally {
    o.f()
  }
  return e.setIn(["variableList"], r)
}
var Pe = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Ne
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Cc:
      return Re(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ad:
      return ke(e)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.c:
      return xe(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.gc:
      return De(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pe:
      return Me(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ub:
      return Le(e, t)
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.fe:
      return e.set("tableDataDialog", a.a({}, t.payload))
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ue:
      return e.set("dataWatchToast", {
        visible: true,
        toast: t.payload.toast,
        showIcon: t.payload.showIcon || false
      })
    case $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.sc:
      return e.set("dataWatchToast", {
        visible: false
      })
    default:
      return e
  }
}
export { Pe }
