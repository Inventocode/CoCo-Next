/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-14
 */

"use strict"

import { Ot } from "../../../unrestored/shared/1571/2636/37/index__part-5"
import { qn } from "../../../unrestored/shared/1571/2636/37/index__part-9"
import { ho } from "../../../unrestored/shared/1571/2636/37/index__part-11"
import { Si, Ms, wc } from "./common/saga"
import { cl } from "../../../unrestored/shared/1571/2636/37/index__part-13"
var ll
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../unrestored/shared/1571/2636/11"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../../../unrestored/shared/1571/2636/48/3/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_100 from /* 100 */"../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */Common_actions from /* 2 */"./common/actions"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_489 from /* 489 */"../../../unrestored/shared/1571/2636/48/489"
import * as /* [auto-meaningful-name] */Redux from /* 156 */"redux"
import * as /* [auto-meaningful-name] */Module_481 from /* 481 */"../../../unrestored/shared/1571/2636/481/index"
import * as /* [auto-meaningful-name] */Module_467 from /* 467 */"../../../unrestored/shared/1571/2636/467"
var pl = RegeneratorRuntime.mark(gl)
var fl = RegeneratorRuntime.mark(_l)
var hl = RegeneratorRuntime.mark(vl)
var ml = RegeneratorRuntime.mark(El)
function gl(e) {
  var /* [auto-meaningful-name] */e$payload
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          e$payload = e.payload
          n.next = 3
          return Module_3.e(Common_actions.ej(e.payload))
        case 3:
          if (!e$payload) {
            n.next = 9
            break
          }
          Module_481.a(e$payload.id, e$payload.nickname)
          n.next = 7
          return Module_3.b(Ms)
        case 7:
          n.next = 15
          break
        case 9:
          Module_24.a.disconnect()
          n.next = 12
          return Module_3.e(Common_actions.Gf())
        case 12:
          n.next = 14
          return Module_3.e(Module_100.n())
        case 14:
          Module_481.b()
        case 15:
        case "end":
          return n.stop()
      }
    }
  }, pl)
}
function _l(e) {
  var /* [auto-meaningful-name] */e$sent
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.prev = 0
          e.next = 3
          return Module_3.b(Module_467.b)
        case 3:
          e$sent = e.sent
          e.next = 6
          return Module_3.e(Common_actions.gi(e$sent))
        case 6:
          e.next = 10
          break
        case 8:
          e.prev = 8
          e.t0 = e.catch(0)
        case 10:
        case "end":
          return e.stop()
      }
    }
  }, fl, null, [[0, 8]])
}
function vl(e) {
  var /* [auto-meaningful-name] */e$sent
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.prev = 0
          e.next = 3
          return Module_3.b(Module_467.c)
        case 3:
          e$sent = e.sent
          e.next = 6
          return Module_3.e(Common_actions.bj(e$sent))
        case 6:
          e.next = 10
          break
        case 8:
          e.prev = 8
          e.t0 = e.catch(0)
        case 10:
        case "end":
          return e.stop()
      }
    }
  }, hl, null, [[0, 8]])
}
var bl
var yl = qn((ll = {}, Module_11.a(ll, Common_actions.wb, gl), Module_11.a(ll, Common_actions.S, _l), Module_11.a(ll, Common_actions.W, vl), ll))
function El() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return Module_3.g([Common_actions.wb], yl)
        case 2:
          e.next = 4
          return Module_3.g([Common_actions.S], yl)
        case 4:
          e.next = 6
          return Module_3.g([Common_actions.W], yl)
        case 6:
        case "end":
          return e.stop()
      }
    }
  }, ml)
}
var Ol = RegeneratorRuntime.mark(Tl)
var wl = RegeneratorRuntime.mark(Sl)
var Cl = RegeneratorRuntime.mark(jl)
function Tl(e) {
  var /* [auto-meaningful-name] */e$payload$list
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          e$payload$list = e.payload.list
          n.next = 3
          return Module_3.e(Module_100.u(e$payload$list))
        case 3:
        case "end":
          return n.stop()
      }
    }
  }, Ol)
}
function Sl(e) {
  var /* [auto-meaningful-name] */e$payload$info
  var /* [auto-meaningful-name] */i$sent
  var r
  var o
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$payload$info = e.payload.info
          i.next = 3
          return Module_3.f(function (e) {
            return e.oTState.userFocusOTInfoList
          })
        case 3:
          i$sent = i.sent
          o = i$sent.findIndex(function (e) {
            return e.userId === e$payload$info.userId
          })
          r = o > -1 ? i$sent.update(o, function () {
            return Module_6.a(Module_6.a({}, i$sent.get(o)), e$payload$info)
          }) : i$sent.push(e$payload$info)
          i.next = 8
          return Module_3.e(Module_100.v(r))
        case 8:
        case "end":
          return i.stop()
      }
    }
  }, wl)
}
bl = {}
Module_11.a(bl, Module_100.a, Tl)
Module_11.a(bl, Module_100.b, Sl)
var Al = bl
var Il = qn(Al)
function jl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return Module_3.g(Object.keys(Al), Il)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Cl)
}
var Nl = RegeneratorRuntime.mark(Rl)
function Rl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return Module_3.a([Module_3.d(wc), Module_3.d(cl), Module_3.d(El), Module_3.d(jl), Module_3.d(ho), Module_3.d(Si)])
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Nl)
}
if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  window.compose
}
var kl = Module_489.a()
var xl = Redux.createStore(Ot, Redux.applyMiddleware(kl))
function Dl() {
  return xl
}
kl.run(Rl)
var Ml = function (e) {
  return xl.dispatch(e)
}
function Ll() {
  return xl.getState().common.language
}
export { xl }
export { Dl }
export { Ml }
export { Ll }
