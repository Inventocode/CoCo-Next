/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-13
 */

"use strict"

import { gn } from "./index__part-7"
import { qn } from "./index__part-9"
import { xl } from "../../../../../src/editor/redux/store"
var Cc
import * as _r from "./22"
import * as /* [auto-meaningful-name] */$$_110 from "../110"
import * as /* [auto-meaningful-name] */$$_49 from "../49"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as on from "../9"
import * as /* [auto-meaningful-name] */$$_26_index from "../26/index"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_48_3_index from "../48/3/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_18 from "../18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_295 from "../295"
var Sc = RegeneratorRuntime.mark(Hc)
var Ac = RegeneratorRuntime.mark(Vc)
var Ic = RegeneratorRuntime.mark(zc)
var jc = RegeneratorRuntime.mark(Yc)
var Nc = RegeneratorRuntime.mark(Kc)
var Rc = RegeneratorRuntime.mark(qc)
var kc = RegeneratorRuntime.mark(Xc)
var xc = RegeneratorRuntime.mark(Qc)
var Dc = RegeneratorRuntime.mark(Jc)
var Mc = RegeneratorRuntime.mark($c)
var Lc = RegeneratorRuntime.mark(el)
var Pc = RegeneratorRuntime.mark(tl)
var Bc = RegeneratorRuntime.mark(nl)
var Fc = RegeneratorRuntime.mark(rl)
var Gc = RegeneratorRuntime.mark(ol)
var Wc = RegeneratorRuntime.mark(il)
var Uc = RegeneratorRuntime.mark(cl)
function Hc() {
  var e
  var /* [auto-meaningful-name] */n$sent
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $$_48_3_index.f(_r.s)
        case 2:
          n$sent = n.sent
          n.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
            type: "error",
            message: (null === (e = $$_$$_$$_$$_$$_src_shared_ui_language.c(n$sent, "noSelectDoc")) || undefined === e ? undefined : e.toString()) || "",
            showCloseIcon: false
          }))
        case 5:
        case "end":
          return n.stop()
      }
    }
  }, Sc)
}
function Vc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$variableType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$defaultValue
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var d
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */$$_49$oTHelper$primitiveVariables
  return RegeneratorRuntime.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          e$payload = e.payload
          e$payload$variableType = e$payload.variableType
          e$payload$id = e$payload.id
          e$payload$name = e$payload.name
          e$payload$defaultValue = e$payload.defaultValue
          e$payload$screenId = e$payload.screenId
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$isEmitOT = e$payload.isEmitOT
          d = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          e$payload$index = e$payload.index
          h.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.gf(e$payload$variableType, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$screenId, e$payload$index))
        case 3:
          h.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bf($$_110.a("PRIMITIVE", {
            id: e$payload$id,
            name: e$payload$name,
            type: "PRIMITIVE",
            screenId: e$payload$variableType === $$_18.i.GLOBAL ? $$_18.i.GLOBAL : e$payload$screenId,
            value: e$payload$defaultValue,
            defaultValue: e$payload$defaultValue
          }, {
            isWatching: false
          })))
        case 5:
          h.next = 7
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 7:
          if (d) {
            if (!(null === ($$_49$oTHelper$primitiveVariables = $$_49.oTHelper.primitiveVariables) || undefined === $$_49$oTHelper$primitiveVariables)) {
              $$_49$oTHelper$primitiveVariables.clientOp.add(e$payload$variableType, e$payload$screenId, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(e$payload$id)
            }
          }
        case 8:
        case "end":
          return h.stop()
      }
    }
  }, Ac)
}
function zc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$arrayType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$defaultValue
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var p
  var /* [auto-meaningful-name] */$$_49$oTHelper$arrayVariables
  return RegeneratorRuntime.wrap(function (h) {
    for (;;) {
      switch (h.prev = h.next) {
        case 0:
          e$payload = e.payload
          e$payload$arrayType = e$payload.arrayType
          e$payload$id = e$payload.id
          e$payload$name = e$payload.name
          e$payload$defaultValue = e$payload.defaultValue
          e$payload$screenId = e$payload.screenId
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$index = e$payload.index
          e$payload$isEmitOT = e$payload.isEmitOT
          p = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          h.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ye(e$payload$arrayType, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$screenId, e$payload$index))
        case 3:
          h.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bf($$_110.a("LIST", {
            id: e$payload$id,
            name: e$payload$name,
            type: "LIST",
            screenId: e$payload$arrayType === $$_18.i.GLOBAL ? $$_18.i.GLOBAL : e$payload$screenId,
            value: e$payload$defaultValue,
            defaultValue: e$payload$defaultValue
          }, {
            isWatching: false
          })))
        case 5:
          h.next = 7
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 7:
          if (p) {
            if (!(null === ($$_49$oTHelper$arrayVariables = $$_49.oTHelper.arrayVariables) || undefined === $$_49$oTHelper$arrayVariables)) {
              $$_49$oTHelper$arrayVariables.clientOp.add(e$payload$arrayType, e$payload$screenId, e$payload$id, e$payload$name, e$payload$defaultValue, e$payload$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(e$payload$id)
            }
          }
        case 8:
        case "end":
          return h.stop()
      }
    }
  }, Ic)
}
function Yc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var i
  var /* [auto-meaningful-name] */$$_49$oTHelper$objectVariables
  var s
  var /* [auto-meaningful-name] */i$scopeType
  var /* [auto-meaningful-name] */i$screenId
  var /* [auto-meaningful-name] */i$name
  var /* [auto-meaningful-name] */i$defaultValue
  var /* [auto-meaningful-name] */i$index
  return RegeneratorRuntime.wrap(function (m) {
    for (;;) {
      switch (m.prev = m.next) {
        case 0:
          e$payload = e.payload
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          i = $$_295.a(e$payload, ["setBlockValue", "isEmitOT"])
          m.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ff(i))
        case 3:
          m.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bf($$_110.a("DICT", {
            id: i.id,
            name: i.name,
            type: "DICT",
            screenId: i.scopeType === $$_18.i.GLOBAL ? $$_18.i.GLOBAL : i.screenId,
            value: i.defaultValue,
            defaultValue: i.defaultValue
          }, {
            isWatching: false
          })))
        case 5:
          m.next = 7
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 7:
          if (o) {
            s = i.id
            i$scopeType = i.scopeType
            i$screenId = i.screenId
            i$name = i.name
            i$defaultValue = i.defaultValue
            i$index = i.index
            if (!(null === ($$_49$oTHelper$objectVariables = $$_49.oTHelper.objectVariables) || undefined === $$_49$oTHelper$objectVariables)) {
              $$_49$oTHelper$objectVariables.clientOp.add(i$scopeType, i$screenId, s, i$name, i$defaultValue, i$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(s)
            }
          }
        case 8:
        case "end":
          return m.stop()
      }
    }
  }, jc)
}
function Kc(e, t, n, r) {
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.zi(e, t, n, r))
        case 2:
          o.next = 4
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(t, "name", n))
        case 4:
          $$_26_index.m($$_26_index.c.PRIMITIVE, t, n)
        case 5:
        case "end":
          return o.stop()
      }
    }
  }, Nc)
}
function qc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$variableType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var l
  var /* [auto-meaningful-name] */$$_49$oTHelper$primitiveVariables
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (e$payload = e.payload, e$payload$variableType = e$payload.variableType, e$payload$id = e$payload.id, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, l = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "name" !== e$payload$key) {
            d.next = 6
            break
          }
          d.next = 4
          return $$_48_3_index.b(Kc, e$payload$variableType, e$payload$id, e$payload$value.toString(), e$payload$screenId)
        case 4:
          d.next = 17
          break
        case 6:
          if ("defaultValue" !== e$payload$key) {
            d.next = 17
            break
          }
          d.next = 9
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.yi(e$payload$variableType, e$payload$id, e$payload$value, e$payload$screenId))
        case 9:
          d.next = 11
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Hg(e$payload$variableType, e$payload$id, "value", e$payload$value, e$payload$screenId, true))
        case 11:
          d.next = 13
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$payload$id, "defaultValue", e$payload$value))
        case 13:
          if (xl.getState().project.playing) {
            d.next = 17
            break
          }
          d.next = 17
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$payload$id, "value", e$payload$value))
        case 17:
          d.next = 19
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 19:
          if (l) {
            if (!(null === ($$_49$oTHelper$primitiveVariables = $$_49.oTHelper.primitiveVariables) || undefined === $$_49$oTHelper$primitiveVariables)) {
              $$_49$oTHelper$primitiveVariables.clientOp.update(e$payload$variableType, e$payload$screenId, e$payload$id, e$payload$key, e$payload$value)
            }
          }
        case 20:
        case "end":
          return d.stop()
      }
    }
  }, Rc)
}
function Xc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$arrayType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var l
  var /* [auto-meaningful-name] */$$_49$oTHelper$arrayVariables
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (e$payload = e.payload, e$payload$arrayType = e$payload.arrayType, e$payload$id = e$payload.id, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, l = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "name" !== e$payload$key) {
            d.next = 6
            break
          }
          d.next = 4
          return $$_48_3_index.b(Qc, e$payload$arrayType, e$payload$id, e$payload$value.toString(), e$payload$screenId)
        case 4:
          d.next = 17
          break
        case 6:
          if ("defaultValue" !== e$payload$key || !Array.isArray(e$payload$value)) {
            d.next = 17
            break
          }
          d.next = 9
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ai(e$payload$arrayType, e$payload$id, e$payload$value, e$payload$screenId))
        case 9:
          d.next = 11
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.yg(e$payload$arrayType, e$payload$id, "value", e$payload$value, e$payload$screenId, true))
        case 11:
          d.next = 13
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$payload$id, "defaultValue", e$payload$value))
        case 13:
          if (xl.getState().project.playing) {
            d.next = 17
            break
          }
          d.next = 17
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$payload$id, "value", e$payload$value))
        case 17:
          d.next = 19
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 19:
          if (l) {
            if (!(null === ($$_49$oTHelper$arrayVariables = $$_49.oTHelper.arrayVariables) || undefined === $$_49$oTHelper$arrayVariables)) {
              $$_49$oTHelper$arrayVariables.clientOp.updateProperty(e$payload$arrayType, e$payload$screenId, e$payload$id, e$payload$key, e$payload$value)
            }
          }
        case 20:
        case "end":
          return d.stop()
      }
    }
  }, kc)
}
function Qc(e, t, n, r) {
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Zh(e, t, n, r))
        case 2:
          o.next = 4
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 4:
          o.next = 6
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(t, "name", n))
        case 6:
          $$_26_index.m($$_26_index.c.ARRAY, t, n)
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, xc)
}
function Zc(e, t) {
  var n
  var r = false
  for (n in e) if (e[n] !== t[n]) {
    r = true
  }
  return r
}
function Jc(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$scopeType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var l
  var /* [auto-meaningful-name] */$$_49$oTHelper$objectVariables
  return RegeneratorRuntime.wrap(function (d) {
    for (;;) {
      switch (d.prev = d.next) {
        case 0:
          if (e$payload = e.payload, e$payload$scopeType = e$payload.scopeType, e$payload$id = e$payload.id, e$payload$screenId = e$payload.screenId, e$payload$key = e$payload.key, e$payload$value = e$payload.value, e$payload$isEmitOT = e$payload.isEmitOT, l = undefined === e$payload$isEmitOT || e$payload$isEmitOT, "name" !== e$payload$key) {
            d.next = 6
            break
          }
          d.next = 4
          return $$_48_3_index.b($c, e$payload$scopeType, e$payload$id, e$payload$value.toString(), e$payload$screenId)
        case 4:
          d.next = 15
          break
        case 6:
          if ("defaultValue" !== e$payload$key || "object" !== typeof e$payload$value) {
            d.next = 15
            break
          }
          d.next = 9
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.wi(e$payload$scopeType, e$payload$id, e$payload$value, e$payload$screenId))
        case 9:
          d.next = 11
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$payload$id, "defaultValue", e$payload$value))
        case 11:
          if (xl.getState().project.playing) {
            d.next = 15
            break
          }
          d.next = 15
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$payload$id, "value", e$payload$value))
        case 15:
          d.next = 17
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 17:
          if (l) {
            if (!(null === ($$_49$oTHelper$objectVariables = $$_49.oTHelper.objectVariables) || undefined === $$_49$oTHelper$objectVariables)) {
              $$_49$oTHelper$objectVariables.clientOp.updateProperty(e$payload$scopeType, e$payload$screenId, e$payload$id, e$payload$key, e$payload$value)
            }
          }
        case 18:
        case "end":
          return d.stop()
      }
    }
  }, Dc)
}
function $c(e, t, n, r) {
  return RegeneratorRuntime.wrap(function (o) {
    for (;;) {
      switch (o.prev = o.next) {
        case 0:
          o.next = 2
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.xi(e, t, n, r))
        case 2:
          o.next = 4
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 4:
          o.next = 6
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(t, "name", n))
        case 6:
          $$_26_index.m($$_26_index.c.OBJECT, t, n)
        case 7:
        case "end":
          return o.stop()
      }
    }
  }, Mc)
}
function el(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$fields
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var a
  var /* [auto-meaningful-name] */p$sent
  var l
  var u
  var d
  return RegeneratorRuntime.wrap(function (p) {
    for (;;) {
      switch (p.prev = p.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$fields = e$payload.fields
          e$payload$isEmitOT = e$payload.isEmitOT
          i = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a = on.yb(e$payload$id)
          p.next = 4
          return $$_48_3_index.f(_r.y)
        case 4:
          if (p$sent = p.sent, l = [], u = [], d = e$payload$fields.length !== a.length, a.forEach(function (e) {
            e$payload$fields.forEach(function (t) {
              if (t.id === e.id) {
                if (Zc(e, t)) {
                  d = true
                }
                if (t.key !== e.key) {
                  l.push(t)
                }
              }
            })
            if (!e$payload$fields.some(function (t) {
              return t.id === e.id
            })) {
              u.push(e)
              d = true
            }
          }), !d) {
            p.next = 15
            break
          }
          p.next = 12
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(e$payload$id, "fields", e$payload$fields, false, true, i))
        case 12:
          l.forEach(function (e) {
            $$_26_index.m($$_26_index.c.DOC_KEYS, e.id, e.key)
          })
          u.forEach(function (e) {
            $$_26_index.q($$_26_index.c.DOC_KEYS, e.id)
          })
          gn(p$sent)
        case 15:
        case "end":
          return p.stop()
      }
    }
  }, Lc)
}
function tl(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$variableType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_49$oTHelper$primitiveVariables
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$variableType = e$payload.variableType
          e$payload$id = e$payload.id
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.dh(e$payload$variableType, e$payload$id, e$payload$screenId))
        case 3:
          l.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 5:
          $$_26_index.q($$_26_index.c.PRIMITIVE, e$payload$id)
          if (a) {
            if (!(null === ($$_49$oTHelper$primitiveVariables = $$_49.oTHelper.primitiveVariables) || undefined === $$_49$oTHelper$primitiveVariables)) {
              $$_49$oTHelper$primitiveVariables.clientOp.remove(e$payload$variableType, e$payload$screenId, e$payload$id)
            }
          }
          $$_26_index.m($$_26_index.c.PRIMITIVE, e$payload$id, on.g)
          l.next = 10
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bh(e$payload$id))
        case 10:
        case "end":
          return l.stop()
      }
    }
  }, Pc)
}
function nl(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$arrayType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_49$oTHelper$arrayVariables
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$arrayType = e$payload.arrayType
          e$payload$id = e$payload.id
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ah(e$payload$arrayType, e$payload$id, e$payload$screenId))
        case 3:
          l.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 5:
          $$_26_index.q($$_26_index.c.ARRAY, e$payload$id)
          if (a) {
            if (!(null === ($$_49$oTHelper$arrayVariables = $$_49.oTHelper.arrayVariables) || undefined === $$_49$oTHelper$arrayVariables)) {
              $$_49$oTHelper$arrayVariables.clientOp.remove(e$payload$arrayType, e$payload$screenId, e$payload$id)
            }
          }
          $$_26_index.m($$_26_index.c.ARRAY, e$payload$id, on.g)
          l.next = 10
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bh(e$payload$id))
        case 10:
        case "end":
          return l.stop()
      }
    }
  }, Bc)
}
function rl(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$scopeType
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */$$_49$oTHelper$objectVariables
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$scopeType = e$payload.scopeType
          e$payload$id = e$payload.id
          e$payload$screenId = e$payload.screenId
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ch(e$payload$scopeType, e$payload$id, e$payload$screenId))
        case 3:
          l.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 5:
          $$_26_index.q($$_26_index.c.OBJECT, e$payload$id)
          if (a) {
            if (!(null === ($$_49$oTHelper$objectVariables = $$_49.oTHelper.objectVariables) || undefined === $$_49$oTHelper$objectVariables)) {
              $$_49$oTHelper$objectVariables.clientOp.remove(e$payload$scopeType, e$payload$screenId, e$payload$id)
            }
          }
          l.next = 9
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bh(e$payload$id))
        case 9:
        case "end":
          return l.stop()
      }
    }
  }, Fc)
}
function ol(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$name
  var /* [auto-meaningful-name] */e$payload$screenId
  var /* [auto-meaningful-name] */e$payload$setBlockValue
  var /* [auto-meaningful-name] */e$payload$index
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var s
  var /* [auto-meaningful-name] */$$_49$oTHelper$broadcasts
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload = e.payload
          e$payload$name = e$payload.name
          e$payload$screenId = e$payload.screenId
          e$payload$setBlockValue = e$payload.setBlockValue
          e$payload$index = e$payload.index
          e$payload$isEmitOT = e$payload.isEmitOT
          s = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          u.next = 3
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ze(e$payload$name, e$payload$screenId, e$payload$index))
        case 3:
          u.next = 5
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fi(true))
        case 5:
          if (s) {
            if (!(null === ($$_49$oTHelper$broadcasts = $$_49.oTHelper.broadcasts) || undefined === $$_49$oTHelper$broadcasts)) {
              $$_49$oTHelper$broadcasts.clientOp.add(e$payload$screenId, e$payload$name, e$payload$index)
            }
            if (e$payload$setBlockValue) {
              e$payload$setBlockValue(e$payload$name)
            }
          }
        case 6:
        case "end":
          return u.stop()
      }
    }
  }, Gc)
}
function il(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$columns
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var a
  var s
  var /* [auto-meaningful-name] */s$attributes$columns
  var /* [auto-meaningful-name] */f$sent
  var d
  var p
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          if (e$payload = e.payload, e$payload$id = e$payload.id, e$payload$columns = e$payload.columns, e$payload$isEmitOT = e$payload.isEmitOT, i = undefined === e$payload$isEmitOT || e$payload$isEmitOT, a = on.Y(), s = a.find(function (e) {
            return e.attributes.cloudDbId === e$payload$id
          })) {
            f.next = 5
            break
          }
          return f.abrupt("return")
        case 5:
          s$attributes$columns = s.attributes.columns
          f.next = 8
          return $$_48_3_index.f(_r.y)
        case 8:
          f$sent = f.sent
          d = []
          p = []
          if (s$attributes$columns) {
            s$attributes$columns.forEach(function (e) {
              var t = e$payload$columns.find(function (t) {
                return t.id === e.id
              })
              if (t) {
                if (t.name !== e.name) {
                  p.push({
                    id: e.id,
                    newName: t.name
                  })
                }
              } else {
                d.push({
                  id: e.id
                })
              }
            })
          }
          f.next = 14
          return $$_48_3_index.e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(s.id, "columns", e$payload$columns, false, true, i))
        case 14:
          p.forEach(function (e) {
            $$_26_index.m($$_26_index.c.COLUMNS, e.id, e.newName)
          })
          d.forEach(function (e) {
            $$_26_index.q($$_26_index.c.COLUMNS, e.id)
          })
          gn(f$sent)
        case 17:
        case "end":
          return f.stop()
      }
    }
  }, Wc)
}
Cc = {}
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Fb, el)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ib, Hc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.u, Vc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.o, zc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.t, Yc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.L, tl)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.I, nl)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.K, rl)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.p, ol)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Hb, qc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.yb, Xc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Gb, Jc)
$$_11.a(Cc, $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Ab, il)
var al = Cc
var sl = qn(al)
function cl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_48_3_index.g(Object.keys(al), sl)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Uc)
}
export { cl }
