/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-13
 */

"use strict"

import { rc } from "./index__part-12"
import * as /* [auto-meaningful-name] */$$_429 from "../429"
import * as /* [auto-meaningful-name] */$$_84 from "../84"
import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_55 from "../../55"
import * as /* [auto-meaningful-name] */$$_$$_190 from "../../190"
var sc = new Array()
function cc(e) {
  sc.push(e)
}
function lc() {
  return sc.pop()
}
function uc() {
  return sc.length > 0 ? sc[sc.length - 1] : null
}
function dc() {
  return sc.length
}
function pc(e, t) {
  try {
    cc(t)
    return e()
  } finally {
    lc()
  }
}
function fc(e, t) {
  return hc.apply(this, arguments)
}
function hc() {
  return (hc = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            cc(n)
            e.next = 4
            return t()
          case 4:
            return e.abrupt("return", e.sent)
          case 5:
            e.prev = 5
            lc()
            return e.finish(5)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0,, 5, 8]])
  }))).apply(this, arguments)
}
function mc() {
  return new $$_429.a()
}
function gc(e, t) {
  return _c.apply(this, arguments)
}
function _c() {
  return (_c = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */s$length
    var o
    var i
    var /* [auto-meaningful-name] */e$sent
    var s = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e.prev = 0, !(dc() > 1e3)) {
              e.next = 3
              break
            }
            throw new Error("Maximum call stack size exceeded")
          case 3:
            for (s$length = s.length, o = new Array(s$length > 2 ? s$length - 2 : 0), i = 2; i < s$length; i++) {
              o[i - 2] = s[i]
            }
            e.next = 6
            return t.call.apply(t, [undefined].concat(o))
          case 6:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 10:
            if (e.prev = 10, e.t0 = e.catch(0), !e.t0.handled) {
              e.next = 14
              break
            }
            throw e.t0
          case 14:
            e.t0.handled = true
            if (!(0 !== e.t0.message.indexOf("too much recursion") && 0 !== e.t0.message.indexOf("Maximum call stack size exceeded"))) {
              $$_$$_14.a.condition(false, {
                type: "error",
                messageId: "overflowStack"
              })
              $$_84.tb($$_$$_6.a({
                type: rc.STACK_EXCEEDED
              }, n))
            }
            throw e.t0
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 10]])
  }))).apply(this, arguments)
}
function vc() {
  for (var e = "", /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length), r = 0; r < arguments$length; r++) {
    n[r] = arguments[r]
  }
  n.forEach(function (t) {
    e += "".concat($$_$$_190.d(t), " ")
  })
  return e
}
function bc(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = vc.apply(undefined, r)
  $$_$$_55.b.custom("print", e, t, i)
}
function yc(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = vc.apply(undefined, r)
  $$_$$_55.b.custom("customError", e, t, i)
}
function Ec(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = vc.apply(undefined, r)
  $$_$$_55.b.custom("customWarning", e, t, i)
}
function Oc(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.height
}
function wc(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.width
}
function Cc(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function Tc(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function Sc(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.url
}
function Ac(e) {
  return a.h(e, {
    refreshTimestamp: Date.now()
  })
}
function Ic(e, t) {
  if ("string" !== typeof t) {
    $$_$$_14.a.condition(false, {
      type: "warning",
      messageId: "mustToBeString",
      values: {
        name: "webview"
      }
    })
  } else {
    a.h(e, {
      url: t
    })
  }
}
function jc(e, t) {
  a.l(e, t)
}
function Nc(e, t) {
  a.h(e, {
    disabled: t
  })
}
function Rc(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function kc(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function xc(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.value
}
function Dc(e, t) {
  var n
  if ((null === (n = a.d(e)) || undefined === n ? undefined : n.value) !== t) {
    a.h(e, {
      value: t
    })
    $$_84.Db(e, t)
  }
}
function Mc(e, t) {
  a.l(e, t)
}
function Lc(e, t) {
  a.h(e, {
    disabled: t
  })
}
function Pc(e, t) {
  a.j(e, {
    x: t
  })
}
function Bc(e, t) {
  a.j(e, {
    y: t
  })
}
function Fc(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function Gc(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function Wc(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.value
}
function Uc(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.minValue
}
function Hc(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.maxValue
}
function Vc(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.width
}
function zc(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.height
}
function Yc(e, t) {
  var n = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2]
  var r = a.d(e)
  if (r) {
    if ("number" === typeof t) {
      var o = Math.round(t)
      if (o < r.minValue || o > r.maxValue) {
        $$_$$_14.a.log({
          type: "warning",
          messageId: "sliderValueOutOfRange",
          widgetId: e
        })
      } else {
        if (o !== r.value) {
          a.h(e, {
            value: o
          })
          if (n) {
            $$_84.Cb(e, o)
            $$_84.Ab(e, o)
            $$_84.Bb(e, o)
          }
        }
      }
    } else {
      $$_$$_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "滑块位置"
        }
      })
    }
  }
}
function Kc(e, t) {
  var n = a.d(e)
  if (n) {
    if ("number" === typeof t) {
      if (t === n.minValue) {
        $$_$$_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueEqualMinValue",
          widgetId: e
        })
      }
      if (t < n.value) {
        $$_$$_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueOrMinValueOutOfRange",
          widgetId: e
        })
      } else {
        a.h(e, {
          maxValue: Math.round(t)
        })
      }
    } else {
      $$_$$_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "最大值"
        }
      })
    }
  }
}
function qc(e, t) {
  var n = a.d(e)
  if (n) {
    if ("number" === typeof t) {
      if (t === n.maxValue) {
        $$_$$_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueEqualMinValue",
          widgetId: e
        })
      }
      if (t > n.value) {
        $$_$$_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueOrMinValueOutOfRange",
          widgetId: e
        })
      } else {
        a.h(e, {
          minValue: Math.round(t)
        })
      }
    } else {
      $$_$$_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "最小值"
        }
      })
    }
  }
}
function Xc(e, t) {
  a.j(e, {
    x: t
  })
}
function Qc(e, t) {
  a.j(e, {
    y: t
  })
}
function Zc(e, t) {
  a.k(e, {
    width: t
  })
}
function Jc(e, t) {
  a.l(e, t)
}
function $c(e, t) {
  a.h(e, {
    disabled: t
  })
}
export { sc }
export { cc }
export { lc }
export { uc }
export { dc }
export { pc }
export { fc }
export { mc }
export { gc }
export { vc }
export { bc }
export { yc }
export { Ec }
export { Oc }
export { wc }
export { Cc }
export { Tc }
export { Sc }
export { Ac }
export { Ic }
export { jc }
export { Nc }
export { Rc }
export { kc }
export { xc }
export { Dc }
export { Mc }
export { Lc }
export { Pc }
export { Bc }
export { Fc }
export { Gc }
export { Wc }
export { Uc }
export { Hc }
export { Vc }
export { zc }
export { Yc }
export { Kc }
export { qc }
export { Xc }
export { Qc }
export { Zc }
export { Jc }
export { $c }
