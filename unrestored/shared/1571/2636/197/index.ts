/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：197
 */

"use strict"

export { _ as a }
export { v as e }
export { y as c }
export { w as b }
export { A as f }
export { j as d }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_47_index from "../47/index"
import * as a from "../7"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_58_index from "../58/index"
import * as /* [auto-meaningful-name] */$$_59_index from "../59/index"
import * as /* [auto-meaningful-name] */$_274 from "./274"
import * as /* [auto-meaningful-name] */$_483_index from "./483/index"
import * as p from "../9"
import * as /* [auto-meaningful-name] */$$_64 from "../64"
import * as /* [auto-meaningful-name] */$$_15 from "../../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$$_57_index from "../../../../../src/shared/env"
var g = new $_483_index.a({
  env: $$_57_index.a.env,
  projectName: $$_57_index.a.productCode,
  config: {
    pid: $$_57_index.a.pid,
    api: $$_57_index.a.openServiceHost
  }
})
var _ = function (e) {
  $$_58_index.a(n, e)
  var t = $$_59_index.a(n)
  function n(e, r) {
    var o
    $$_27.a(this, n);
    (o = t.call(this, r)).uploadResult = e
    return o
  }
  return n
}($_274.a(Error))
function v(e) {
  return b.apply(this, arguments)
}
function b() {
  return (b = a.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var a = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = a.length > 1 && undefined !== a[1] ? a[1] : "IMAGE"
            r = t instanceof File ? t.name : ""
            e.next = 4
            return new Promise(function (e, o) {
              g.create(t, {
                filename: "".concat($$_57_index.a.productCode, "/").concat($$_64.a(n), "_").concat(Date.now()) + $$_15.I(r),
                onsuccess: function (t) {
                  return e(t)
                },
                onerror: function (e) {
                  return o(e)
                }
              }).then(function (e) {
                return null === e || undefined === e ? undefined : e.start()
              }).catch(function (e) {
                return o(e)
              })
            })
          case 4:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y(e, t) {
  var n
  var r = []
  var o = $$_47_index.a(e)
  try {
    for (o.s(); !(n = o.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      r.push(E(n$value, t))
    }
  } catch (s) {
    o.e(s)
  } finally {
    o.f()
  }
  return Promise.all(r)
}
function E(e, t) {
  return O.apply(this, arguments)
}
function O() {
  return (O = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */t$cdnUrl
    var /* [auto-meaningful-name] */t$source
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$cdnUrl = t.cdnUrl, t$source = t.source, !t || t$cdnUrl || !t$source) {
              e.next = 16
              break
            }
            if (a = null, !$$_15.R(t$source)) {
              e.next = 7
              break
            }
            a = $$_15.o(t$source, t.id)
            e.next = 11
            break
          case 7:
            if (!$$_15.P(t$source)) {
              e.next = 11
              break
            }
            e.next = 10
            return $$_15.f(t$source, t.id)
          case 10:
            a = e.sent
          case 11:
            if (!a) {
              e.next = 16
              break
            }
            e.next = 14
            return v(a)
          case 14:
            if (e$sent = e.sent) {
              c = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
              p.bc(t.id, c)
              if (t.groupId && undefined !== t.groupImageIndex) {
                p.cc(t.groupId, t.groupImageIndex, c)
              }
              t.cdnUrl = c
              if (n) {
                n(t)
              }
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function w(e, t) {
  return C.apply(this, arguments)
}
function C() {
  return (C = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var a
    var s
    var /* [auto-meaningful-name] */s$value
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = []
            a = $$_47_index.a(t)
            try {
              for (a.s(); !(s = a.n()).done;) {
                s$value = s.value
                r.push(T(s$value, n))
              }
            } catch (o) {
              a.e(o)
            } finally {
              a.f()
            }
            e.next = 5
            return Promise.all(r)
          case 5:
            return e.abrupt("return", e.sent)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function T(e, t) {
  return S.apply(this, arguments)
}
function S() {
  return (S = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */t$cdnUrl
    var /* [auto-meaningful-name] */t$source
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$cdnUrl = t.cdnUrl, t$source = t.source, !t || t$cdnUrl || !t$source) {
              e.next = 16
              break
            }
            if (a = null, !$$_15.R(t$source)) {
              e.next = 7
              break
            }
            a = $$_15.o(t$source, t.id)
            e.next = 11
            break
          case 7:
            if (!$$_15.P(t$source)) {
              e.next = 11
              break
            }
            e.next = 10
            return $$_15.g(t$source, t.id)
          case 10:
            a = e.sent
          case 11:
            if (!a) {
              e.next = 16
              break
            }
            e.next = 14
            return v(a)
          case 14:
            if (e$sent = e.sent) {
              c = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
              t.cdnUrl = c
              if (n) {
                n(t)
              }
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function A(e) {
  return I.apply(this, arguments)
}
function I() {
  return (I = a.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var a
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = $$_15.m(t), "screenshot.png", !n) {
              e.next = 10
              break
            }
            r = new File([n], "screenshot.png", {
              type: n.type
            })
            e.next = 6
            return v(r)
          case 6:
            if (!(e$sent = e.sent)) {
              e.next = 10
              break
            }
            a = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
            return e.abrupt("return", a)
          case 10:
            return e.abrupt("return", "")
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function j(e, t) {
  var n
  var r = []
  var o = $$_47_index.a(e)
  try {
    for (o.s(); !(n = o.n()).done;) {
      var /* [auto-meaningful-name] */n$value = n.value
      r.push(N(n$value, t))
    }
  } catch (s) {
    o.e(s)
  } finally {
    o.f()
  }
  return Promise.all(r)
}
function N(e, t) {
  return R.apply(this, arguments)
}
function R() {
  return (R = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */t$cdnUrl
    var /* [auto-meaningful-name] */t$source
    var a
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$cdnUrl = t.cdnUrl, t$source = t.source, !t || t$cdnUrl || !t$source) {
              e.next = 16
              break
            }
            if (a = null, !$$_15.R(t$source)) {
              e.next = 7
              break
            }
            a = $$_15.o(t$source, t.name)
            e.next = 11
            break
          case 7:
            if (!$$_15.P(t$source)) {
              e.next = 11
              break
            }
            e.next = 10
            return $$_15.f(t$source, t.name)
          case 10:
            a = e.sent
          case 11:
            if (!a) {
              e.next = 16
              break
            }
            e.next = 14
            return v(a, "SOUND")
          case 14:
            if (e$sent = e.sent) {
              c = e$sent.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")
              t.cdnUrl = c
              if (n) {
                n(t)
              }
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default _
