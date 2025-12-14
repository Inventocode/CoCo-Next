/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-24
 */

"use strict"

import { _p, bp, Ep, wp, Tp } from "./index__part-23"
import * as /* [auto-meaningful-name] */$$_index from "../index"
import * as /* [auto-meaningful-name] */$$_$$_25_index from "../../25/index"
import * as /* [auto-meaningful-name] */$$_$$_9 from "../../9"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_267 from "../../267"
function Ip(e, t, n, r, o) {
  return n.then(function (e) {
    if (r) {
      return e ? Promise.resolve(r.apply(undefined, $$_$$_25_index.a(e))) : Promise.resolve(r())
    }
  }).catch(function (n) {
    var r = n.errorInfo || n.message
    if (r.toLocaleLowerCase().includes("network error")) {
      r = "网络异常"
    }
    $$_index.emitCloudDictError("".concat(e, "_").concat(t), r)
    $$_$$_14.a.log({
      type: "error",
      message: r,
      widgetId: e
    })
    if (o) {
      return Promise.resolve(o(r))
    }
  })
}
function jp(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.cloudDictId
}
function Np(e, t, n, r, o) {
  return Rp.apply(this, arguments)
}
function Rp() {
  return (Rp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t !== $$_$$_9.h) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            return e.abrupt("return", Ip(t, $$_$$_267.a.SETTER, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var o
              var i
              var a
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, o = jp(t)) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      if (n !== $$_$$_9.h) {
                        e.next = 6
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未选择key"
                      }))
                    case 6:
                      if ("string" === typeof n || "number" === typeof n) {
                        e.next = 8
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "嵌入积木的返回值不是字符串类型"
                      }))
                    case 8:
                      if (!(n.toString().length > 150)) {
                        e.next = 10
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "超出key长度限制（150个字符）"
                      }))
                    case 10:
                      if (!((i = "object" === typeof r ? JSON.stringify(r) : r.toString()).length > 2e3)) {
                        e.next = 13
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "超出value长度限制（2k个字符）"
                      }))
                    case 13:
                      e.next = 15
                      return _p(o, n.toString(), i)
                    case 15:
                      return e.abrupt("return", undefined)
                    case 18:
                      e.prev = 18
                      e.t0 = e.catch(0)
                      a = JSON.parse(e.t0.message)
                      e.t0.errorInfo = a.msg
                      throw e.t0
                    case 23:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 18]])
            }))(), o, i))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function kp(e, t, n, r) {
  return xp.apply(this, arguments)
}
function xp() {
  return (xp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t !== $$_$$_9.h) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            return e.abrupt("return", Ip(t, $$_$$_267.a.DELETE, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var r
              var o
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, r = jp(t)) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      if (n !== $$_$$_9.h) {
                        e.next = 6
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未选择key"
                      }))
                    case 6:
                      if ("string" === typeof n || "number" === typeof n) {
                        e.next = 8
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "嵌入积木的返回值不是字符串类型"
                      }))
                    case 8:
                      e.next = 10
                      return bp(r, n.toString())
                    case 10:
                      return e.abrupt("return", undefined)
                    case 13:
                      e.prev = 13
                      e.t0 = e.catch(0)
                      o = JSON.parse(e.t0.message)
                      e.t0.errorInfo = o.msg
                      throw e.t0
                    case 18:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 13]])
            }))(), r, o))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Dp(e, t, n, r) {
  return Mp.apply(this, arguments)
}
function Mp() {
  return (Mp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t !== $$_$$_9.h) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            return e.abrupt("return", Ip(t, $$_$$_267.a.QUERY, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var r
              var /* [auto-meaningful-name] */e$sent
              var i
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, r = jp(t)) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      if (n !== $$_$$_9.h) {
                        e.next = 6
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未选择key"
                      }))
                    case 6:
                      if ("string" === typeof n || "number" === typeof n) {
                        e.next = 8
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "嵌入积木的返回值不是字符串类型"
                      }))
                    case 8:
                      e.next = 10
                      return Ep(r, n.toString())
                    case 10:
                      if (e$sent = e.sent) {
                        e.next = 13
                        break
                      }
                      return e.abrupt("return", [])
                    case 13:
                      return e.abrupt("return", [e$sent[2]])
                    case 16:
                      e.prev = 16
                      e.t0 = e.catch(0)
                      i = JSON.parse(e.t0.message)
                      e.t0.errorInfo = i.msg
                      throw e.t0
                    case 21:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 16]])
            }))(), r, o))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Lp(e, t, n) {
  return Pp.apply(this, arguments)
}
function Pp() {
  return (Pp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t !== $$_$$_9.h) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            return e.abrupt("return", Ip(t, $$_$$_267.a.QUERY, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var /* [auto-meaningful-name] */e$sent
              var o
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, n = jp(t)) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return wp(n)
                    case 6:
                      e$sent = e.sent
                      return e.abrupt("return", [e$sent.length])
                    case 10:
                      e.prev = 10
                      e.t0 = e.catch(0)
                      o = JSON.parse(e.t0.message)
                      e.t0.errorInfo = o.msg
                      throw e.t0
                    case 15:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 10]])
            }))(), n, r))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Bp(e, t, n) {
  return Fp.apply(this, arguments)
}
function Fp() {
  return (Fp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t !== $$_$$_9.h) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            return e.abrupt("return", Ip(t, $$_$$_267.a.QUERY, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var /* [auto-meaningful-name] */e$sent
              var o
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, n = jp(t)) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return wp(n)
                    case 6:
                      e$sent = e.sent
                      return e.abrupt("return", [e$sent])
                    case 10:
                      e.prev = 10
                      e.t0 = e.catch(0)
                      o = JSON.parse(e.t0.message)
                      e.t0.errorInfo = o.msg
                      throw e.t0
                    case 15:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 10]])
            }))(), n, r))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Gp(e, t, n) {
  return Wp.apply(this, arguments)
}
function Wp() {
  return (Wp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t !== $$_$$_9.h) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            return e.abrupt("return", Ip(t, $$_$$_267.a.CLEAR, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var r
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, n = jp(t)) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return Tp(n)
                    case 6:
                      return e.abrupt("return", undefined)
                    case 9:
                      e.prev = 9
                      e.t0 = e.catch(0)
                      r = JSON.parse(e.t0.message)
                      e.t0.errorInfo = r.msg
                      throw e.t0
                    case 14:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 9]])
            }))(), n, r))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { Np }
export { kp }
export { Dp }
export { Lp }
export { Bp }
export { Gp }
