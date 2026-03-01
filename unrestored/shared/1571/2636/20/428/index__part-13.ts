/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-13
 */

"use strict"

import { rc } from "./index__part-12"
import * as /* [auto-meaningful-name] */Module_429 from /* 429 */"../429"
import * as /* [auto-meaningful-name] */Module_84 from /* 84 */"../84"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../55"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../190"
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
  return (hc = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
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
  return new Module_429.a()
}
function gc(e, t) {
  return _c.apply(this, arguments)
}
function _c() {
  return (_c = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
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
              Module_14.a.condition(false, {
                type: "error",
                messageId: "overflowStack"
              })
              Module_84.tb(Module_6.a({
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
    e += "".concat(Module_190.d(t), " ")
  })
  return e
}
function bc(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = vc.apply(undefined, r)
  Module_55.b.custom("print", e, t, i)
}
function yc(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = vc.apply(undefined, r)
  Module_55.b.custom("customError", e, t, i)
}
function Ec(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = vc.apply(undefined, r)
  Module_55.b.custom("customWarning", e, t, i)
}
function Oc(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.height
}
function wc(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function Cc(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function Tc(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function Sc(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.url
}
function Ac(e) {
  return Module_12.h(e, {
    refreshTimestamp: Date.now()
  })
}
function Ic(e, t) {
  if ("string" !== typeof t) {
    Module_14.a.condition(false, {
      type: "warning",
      messageId: "mustToBeString",
      values: {
        name: "webview"
      }
    })
  } else {
    Module_12.h(e, {
      url: t
    })
  }
}
function jc(e, t) {
  Module_12.l(e, t)
}
function Nc(e, t) {
  Module_12.h(e, {
    disabled: t
  })
}
function Rc(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function kc(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function xc(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.value
}
function Dc(e, t) {
  var n
  if ((null === (n = Module_12.d(e)) || undefined === n ? undefined : n.value) !== t) {
    Module_12.h(e, {
      value: t
    })
    Module_84.Db(e, t)
  }
}
function Mc(e, t) {
  Module_12.l(e, t)
}
function Lc(e, t) {
  Module_12.h(e, {
    disabled: t
  })
}
function Pc(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function Bc(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function Fc(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function Gc(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function Wc(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.value
}
function Uc(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.minValue
}
function Hc(e) {
  var t
  return null === (t = Module_12.d(e)) || undefined === t ? undefined : t.maxValue
}
function Vc(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function zc(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.height
}
function Yc(e, t) {
  var n = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2]
  var r = Module_12.d(e)
  if (r) {
    if ("number" === typeof t) {
      var o = Math.round(t)
      if (o < r.minValue || o > r.maxValue) {
        Module_14.a.log({
          type: "warning",
          messageId: "sliderValueOutOfRange",
          widgetId: e
        })
      } else {
        if (o !== r.value) {
          Module_12.h(e, {
            value: o
          })
          if (n) {
            Module_84.Cb(e, o)
            Module_84.Ab(e, o)
            Module_84.Bb(e, o)
          }
        }
      }
    } else {
      Module_14.a.log({
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
  var n = Module_12.d(e)
  if (n) {
    if ("number" === typeof t) {
      if (t === n.minValue) {
        Module_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueEqualMinValue",
          widgetId: e
        })
      }
      if (t < n.value) {
        Module_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueOrMinValueOutOfRange",
          widgetId: e
        })
      } else {
        Module_12.h(e, {
          maxValue: Math.round(t)
        })
      }
    } else {
      Module_14.a.log({
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
  var n = Module_12.d(e)
  if (n) {
    if ("number" === typeof t) {
      if (t === n.maxValue) {
        Module_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueEqualMinValue",
          widgetId: e
        })
      }
      if (t > n.value) {
        Module_14.a.log({
          type: "warning",
          messageId: "sliderMaxValueOrMinValueOutOfRange",
          widgetId: e
        })
      } else {
        Module_12.h(e, {
          minValue: Math.round(t)
        })
      }
    } else {
      Module_14.a.log({
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
  Module_12.j(e, {
    x: t
  })
}
function Qc(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function Zc(e, t) {
  Module_12.k(e, {
    width: t
  })
}
function Jc(e, t) {
  Module_12.l(e, t)
}
function $c(e, t) {
  Module_12.h(e, {
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
