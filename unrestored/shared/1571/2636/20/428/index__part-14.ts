/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-14
 */

"use strict"

import { z } from "./index__part-2"
import * as /* [auto-meaningful-name] */Module_84 from /* 84 */"../84"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"../../91"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../48/72"
function tl(e, t) {
  return new Promise(function (n, r) {
    var o = Module_6.a(Module_6.a({}, t), {}, {
      reject: r,
      resolve: n
    })
    e(o)
  })
}
function nl(e, t, n) {
  return rl.apply(this, arguments)
}
function rl() {
  return (rl = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return tl(Module_48.a().dispatch, Module_72.p(t, n, true))
          case 3:
            if (!(e$sent = e.sent).length) {
              e.next = 8
              break
            }
            return e.abrupt("return", e$sent[2])
          case 8:
            if (0 !== e$sent.length) {
              e.next = 10
              break
            }
            return e.abrupt("return", "")
          case 10:
            return e.abrupt("return", r)
          case 13:
            e.prev = 13
            e.t0 = e.catch(0)
            Module_84.nb(t, e.t0, r)
            return e.abrupt("return", r)
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 13]])
  }))).apply(this, arguments)
}
function ol(e, t, n, r) {
  return il.apply(this, arguments)
}
function il() {
  return (il = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (i = "number" === typeof r || "string" === typeof r, Module_14.a.condition(i, {
              type: "error",
              messageId: "cloudStorageInvalidValueType",
              values: {
                key: n
              }
            }), i) {
              e.next = 4
              break
            }
            return e.abrupt("return")
          case 4:
            if (!Lodash.isNumber(r)) {
              e.next = 8
              break
            }
            e.t0 = r
            e.next = 14
            break
          case 8:
            e.next = 10
            return z(r)
          case 10:
            if (e.t1 = e.sent, e.t1) {
              e.next = 13
              break
            }
            e.t1 = r
          case 13:
            e.t0 = e.t1
          case 14:
            r = e.t0
            e.prev = 15
            e.next = 18
            return tl(Module_48.a().dispatch, Module_72.q(t, n, r, typeof r))
          case 18:
            Module_91.b("", "cloud", t, "")
            e.next = 24
            break
          case 21:
            e.prev = 21
            e.t2 = e.catch(15)
            Module_84.nb(t, e.t2, o)
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[15, 21]])
  }))).apply(this, arguments)
}
function al(e, t, n) {
  return sl.apply(this, arguments)
}
function sl() {
  return (sl = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return tl(Module_48.a().dispatch, Module_72.n(t, n, ""))
          case 3:
            Module_91.b("", "cloud", t, "")
            e.next = 9
            break
          case 6:
            e.prev = 6
            e.t0 = e.catch(0)
            Module_84.nb(t, e.t0, r)
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 6]])
  }))).apply(this, arguments)
}
function cl(e, t) {
  return ll.apply(this, arguments)
}
function ll() {
  return (ll = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return tl(Module_48.a().dispatch, Module_72.o(t))
          case 3:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 7:
            e.prev = 7
            e.t0 = e.catch(0)
            Module_84.nb(t, e.t0, n)
            return e.abrupt("return", n)
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
function ul(e, t) {
  return dl.apply(this, arguments)
}
function dl() {
  return (dl = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return tl(Module_48.a().dispatch, Module_72.o(t))
          case 3:
            e$sent = e.sent
            return e.abrupt("return", e$sent.length)
          case 7:
            e.prev = 7
            e.t0 = e.catch(0)
            Module_84.nb(t, e.t0, n)
            return e.abrupt("return", n)
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
function pl(e, t, n) {
  return fl.apply(this, arguments)
}
function fl() {
  return (fl = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return tl(Module_48.a().dispatch, Module_72.p(t, n))
          case 3:
            if (!e.sent.length) {
              e.next = 6
              break
            }
            return e.abrupt("return", true)
          case 6:
            return e.abrupt("return", false)
          case 9:
            e.prev = 9
            e.t0 = e.catch(0)
            Module_84.nb(t, e.t0, r)
            return e.abrupt("return", r)
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 9]])
  }))).apply(this, arguments)
}
function hl(e, t) {
  return ml.apply(this, arguments)
}
function ml() {
  return (ml = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return tl(Module_48.a().dispatch, Module_72.m(t))
          case 3:
            Module_91.b("", "cloud", t, "")
            e.next = 9
            break
          case 6:
            e.prev = 6
            e.t0 = e.catch(0)
            Module_84.nb(t, e.t0, n)
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 6]])
  }))).apply(this, arguments)
}
export { nl }
export { ol }
export { al }
export { cl }
export { ul }
export { pl }
export { hl }
