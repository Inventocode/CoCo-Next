/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-14
 */

"use strict"

import { Ot } from "../../../unrestored/shared/1571/2636/37/index__part-5"
import { qn } from "../../../unrestored/shared/1571/2636/37/index__part-9"
import { ho } from "../../../unrestored/shared/1571/2636/37/index__part-11"
import { Si, Ms, wc } from "./actions/editor"
import { cl } from "../../../unrestored/shared/1571/2636/37/index__part-13"
var ll
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_24_index from "../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../unrestored/shared/1571/2636/11"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_48_3_index from "../../../unrestored/shared/1571/2636/48/3/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_100 from "../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */$_messagesWrapper from "./messages-wrapper"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_48_489 from "../../../unrestored/shared/1571/2636/48/489"
import * as /* [auto-meaningful-name] */Redux from "redux"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_481_index from "../../../unrestored/shared/1571/2636/481/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_467 from "../../../unrestored/shared/1571/2636/467"
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
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($_messagesWrapper.ej(e.payload))
        case 3:
          if (!e$payload) {
            n.next = 9
            break
          }
          $$_$$_$$_unrestored_shared_1571_2636_481_index.a(e$payload.id, e$payload.nickname)
          n.next = 7
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.b(Ms)
        case 7:
          n.next = 15
          break
        case 9:
          $$_$$_$$_unrestored_shared_1571_2636_24_index.a.disconnect()
          n.next = 12
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($_messagesWrapper.Gf())
        case 12:
          n.next = 14
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($$_$$_$$_unrestored_shared_1571_2636_100.n())
        case 14:
          $$_$$_$$_unrestored_shared_1571_2636_481_index.b()
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
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.b($$_$$_$$_unrestored_shared_1571_2636_467.b)
        case 3:
          e$sent = e.sent
          e.next = 6
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($_messagesWrapper.gi(e$sent))
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
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.b($$_$$_$$_unrestored_shared_1571_2636_467.c)
        case 3:
          e$sent = e.sent
          e.next = 6
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($_messagesWrapper.bj(e$sent))
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
var yl = qn((ll = {}, $$_$$_$$_unrestored_shared_1571_2636_11.a(ll, $_messagesWrapper.wb, gl), $$_$$_$$_unrestored_shared_1571_2636_11.a(ll, $_messagesWrapper.S, _l), $$_$$_$$_unrestored_shared_1571_2636_11.a(ll, $_messagesWrapper.W, vl), ll))
function El() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.g([$_messagesWrapper.wb], yl)
        case 2:
          e.next = 4
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.g([$_messagesWrapper.S], yl)
        case 4:
          e.next = 6
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.g([$_messagesWrapper.W], yl)
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
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($$_$$_$$_unrestored_shared_1571_2636_100.u(e$payload$list))
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
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.f(function (e) {
            return e.oTState.userFocusOTInfoList
          })
        case 3:
          i$sent = i.sent
          o = i$sent.findIndex(function (e) {
            return e.userId === e$payload$info.userId
          })
          r = o > -1 ? i$sent.update(o, function () {
            return $$_$$_$$_unrestored_shared_1571_2636_6.a($$_$$_$$_unrestored_shared_1571_2636_6.a({}, i$sent.get(o)), e$payload$info)
          }) : i$sent.push(e$payload$info)
          i.next = 8
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.e($$_$$_$$_unrestored_shared_1571_2636_100.v(r))
        case 8:
        case "end":
          return i.stop()
      }
    }
  }, wl)
}
bl = {}
$$_$$_$$_unrestored_shared_1571_2636_11.a(bl, $$_$$_$$_unrestored_shared_1571_2636_100.a, Tl)
$$_$$_$$_unrestored_shared_1571_2636_11.a(bl, $$_$$_$$_unrestored_shared_1571_2636_100.b, Sl)
var Al = bl
var Il = qn(Al)
function jl() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.g(Object.keys(Al), Il)
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
          return $$_$$_$$_unrestored_shared_1571_2636_48_3_index.a([$$_$$_$$_unrestored_shared_1571_2636_48_3_index.d(wc), $$_$$_$$_unrestored_shared_1571_2636_48_3_index.d(cl), $$_$$_$$_unrestored_shared_1571_2636_48_3_index.d(El), $$_$$_$$_unrestored_shared_1571_2636_48_3_index.d(jl), $$_$$_$$_unrestored_shared_1571_2636_48_3_index.d(ho), $$_$$_$$_unrestored_shared_1571_2636_48_3_index.d(Si)])
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
var kl = $$_$$_$$_unrestored_shared_1571_2636_48_489.a()
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
