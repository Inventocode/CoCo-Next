/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-25
 */

"use strict"

import { sd } from "./index__part-20"
var Up
import * as /* [auto-meaningful-name] */$$_$$_37_111 from "../../37/111"
import * as /* [auto-meaningful-name] */$$_index from "../index"
import * as /* [auto-meaningful-name] */$$_$$_25_index from "../../25/index"
import * as /* [auto-meaningful-name] */$$_$$_10_index from "../../10/index"
import * as /* [auto-meaningful-name] */$$_$$_9 from "../../9"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_263 from "../../263"
var Vp = new Map()
function zp(e) {
  var t
  return null === (t = a.d(e)) || undefined === t ? undefined : t.cloudTableId
}
function Yp(e, t) {
  var n
  var r = new Error()
  r.cloudTableId = e
  if (undefined === t || null === t) {
    r.message = JSON.stringify({
      msg: "嵌入积木的返回值不是字符串类型"
    })
    throw r
  }
  if ("object" === typeof t) {
    r.message = JSON.stringify({
      msg: "嵌入积木的返回值不是字符串类型"
    })
    throw r
  }
  if ((n = t.toString()).length > 1e3) {
    r.message = JSON.stringify({
      msg: "存储的数据超出单元格限制（1k个字符）"
    })
    throw r
  }
  return n
}
function Kp(e) {
  return qp.apply(this, arguments)
}
function qp() {
  return (qp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var i
    var /* [auto-meaningful-name] */p$length
    var s
    var c
    var l
    var u
    var d
    var p = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ((n = new Error()).cloudTableId = t, r = {
              id: t,
              columns: []
            }, !Vp.get(t)) {
              e.next = 7
              break
            }
            r.columns = Vp.get(t) || []
            e.next = 11
            break
          case 7:
            e.next = 9
            return $$_$$_37_111.q([t])
          case 9:
            if ((e$sent = e.sent)[0]) {
              r.columns = e$sent[0].columns
              Vp.set(t, e$sent[0].columns)
            }
          case 11:
            for (i = [], p$length = p.length, s = new Array(p$length > 1 ? p$length - 1 : 0), c = 1; c < p$length; c++) {
              s[c - 1] = p[c]
            }
            for (l = function () {
              var e = d[u]
              if (e === $$_$$_9.h) {
                n.message = JSON.stringify({
                  msg: "未选择列"
                })
                throw n
              }
              if ("string" !== typeof e && "number" !== typeof e) {
                n.message = JSON.stringify({
                  msg: "嵌入积木的返回值不是字符串类型"
                })
                throw n
              }
              if ("number" === typeof e) {
                e = e.toString()
              }
              var t = r.columns.find(function (t) {
                return t.id === e
              })
              if (t) {
                e = t.id
              } else {
                var o = r.columns.find(function (t) {
                  return t.name === e
                })
                if (o) {
                  e = o.id
                }
              }
              i.push(e.toString())
            }, u = 0, d = s; u < d.length; u++) {
              l()
            }
            return e.abrupt("return", i)
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Xp(e, t, n, r, o) {
  return n.then(function (e) {
    if (r) {
      return e ? Promise.resolve(r.apply(undefined, $$_$$_25_index.a(e))) : Promise.resolve(r())
    }
  }).catch(function (n) {
    var r = n.errorInfo || n.message
    if (r.toLocaleLowerCase().includes("network error") || r.toLocaleLowerCase().includes("timeout")) {
      r = "网络异常"
    }
    var i = {
      errorInfo: r,
      code: n.code
    }
    $$_$$_14.a.log({
      type: "error",
      message: r,
      widgetId: e
    })
    $$_index.emitCloudTableError(t, JSON.stringify(i))
    if (o) {
      return Promise.resolve(o(r))
    }
  })
}
function Qp(e, t, n, r) {
  return Zp.apply(this, arguments)
}
function Zp() {
  return (Zp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Xp(t, $$_$$_263.a.ADD, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var r
              var o
              var i
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (o = zp(t), e.prev = 1, o) {
                        e.next = 4
                        break
                      }
                      throw new Error("未绑定数据源")
                    case 4:
                      if (undefined !== n && null !== n) {
                        e.next = 6
                        break
                      }
                      throw new Error("嵌入积木的返回值不是字符串类型")
                    case 6:
                      if ("object" !== typeof n) {
                        e.next = 14
                        break
                      }
                      if (Array.isArray(n)) {
                        e.next = 11
                        break
                      }
                      throw new Error("嵌入积木的返回值不是字符串类型")
                    case 11:
                      r = n.map(function (e) {
                        return e.toString()
                      })
                    case 12:
                      e.next = 23
                      break
                    case 14:
                      if ("number" !== typeof n) {
                        e.next = 18
                        break
                      }
                      r = [n.toString()]
                      e.next = 23
                      break
                    case 18:
                      if ("string" !== typeof n) {
                        e.next = 22
                        break
                      }
                      r = n.split(",")
                      e.next = 23
                      break
                    case 22:
                      throw new Error("嵌入积木的返回值不是字符串类型")
                    case 23:
                      e.next = 29
                      break
                    case 25:
                      e.prev = 25
                      e.t0 = e.catch(1)
                      throw Object.assign({
                        cloudTableId: o,
                        errorInfo: e.t0.message,
                        code: Up.INSERT_ERROR
                      }, e.t0)
                    case 29:
                      e.prev = 29
                      e.next = 32
                      return $$_$$_37_111.r(o, r)
                    case 32:
                      sd(o)
                      return e.abrupt("return", undefined)
                    case 36:
                      if (e.prev = 36, e.t1 = e.catch(29), (i = JSON.parse(e.t1.message)).code !== $$_$$_37_111.a) {
                        e.next = 45
                        break
                      }
                      $$_$$_14.a.log({
                        type: "warning",
                        message: i.msg,
                        widgetId: t
                      })
                      sd(o)
                      return e.abrupt("return", undefined)
                    case 45:
                      e.t1.cloudTableId = o
                      e.t1.errorInfo = i.msg
                      e.t1.code = i.code
                      throw e.t1
                    case 49:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[1, 25], [29, 36]])
            }))(), r, o))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Jp(e, t, n, r, o, i) {
  return $p.apply(this, arguments)
}
function $p() {
  return ($p = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Xp(t, $$_$$_263.a.DELETE, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var i
              var /* [auto-meaningful-name] */e$sent
              var s
              var c
              var l
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (i = zp(t), e.prev = 1, i && i !== $$_$$_9.i) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return Kp(i, n)
                    case 6:
                      e$sent = e.sent
                      s = $$_$$_10_index.a(e$sent, 1)
                      c = s[0]
                      o = Yp(i, o)
                      e.next = 12
                      return $$_$$_37_111.o(i, c, r, o)
                    case 12:
                      sd(i)
                      return e.abrupt("return", undefined)
                    case 16:
                      e.prev = 16
                      e.t0 = e.catch(1)
                      l = JSON.parse(e.t0.message)
                      e.t0.cloudTableId = i
                      e.t0.errorInfo = l.msg
                      e.t0.code = l.code
                      throw e.t0
                    case 23:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[1, 16]])
            }))(), i, a))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ef(e, t, n, r, o, i, a, s) {
  return tf.apply(this, arguments)
}
function tf() {
  return (tf = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a, s, c) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Xp(t, $$_$$_263.a.SETTER, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var s
              var /* [auto-meaningful-name] */e$sent
              var l
              var u
              var d
              var p
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (s = zp(t), e.prev = 1, s) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return Kp(s, n, i)
                    case 6:
                      e$sent = e.sent
                      l = $$_$$_10_index.a(e$sent, 2)
                      u = l[0]
                      d = l[1]
                      o = Yp(s, o)
                      a = Yp(s, a)
                      e.next = 14
                      return $$_$$_37_111.u(s, u, r, o, d, a)
                    case 14:
                      sd(s)
                      return e.abrupt("return", undefined)
                    case 18:
                      e.prev = 18
                      e.t0 = e.catch(1)
                      p = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = s
                      e.t0.errorInfo = p.msg
                      e.t0.code = p.code
                      throw e.t0
                    case 25:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[1, 18]])
            }))(), s, c))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function nf(e, t, n, r, o, i) {
  return rf.apply(this, arguments)
}
function rf() {
  return (rf = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Xp(t, $$_$$_263.a.QUERY, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var i
              var /* [auto-meaningful-name] */e$sent
              var s
              var c
              var /* [auto-meaningful-name] */e$sent1
              var u
              var d
              var p
              var f
              var h
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (i = zp(t), e.prev = 1, i) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return Kp(i, n)
                    case 6:
                      e$sent = e.sent
                      s = $$_$$_10_index.a(e$sent, 1)
                      c = s[0]
                      o = Yp(i, o)
                      e.next = 12
                      return $$_$$_37_111.s(i, c, r, o)
                    case 12:
                      if (e$sent1 = e.sent) {
                        e.next = 15
                        break
                      }
                      return e.abrupt("return", [])
                    case 15:
                      u = e$sent1.columns || []
                      d = e$sent1.records || []
                      p = []
                      f = d.map(function (e) {
                        var /* [auto-meaningful-name] */e$values = e.values
                        var n = []
                        u.forEach(function (e, r) {
                          n.push(lf(e$values[e.id], e.type))
                          p.push(r + 1)
                        })
                        return n
                      })
                      return e.abrupt("return", [f, p])
                    case 22:
                      e.prev = 22
                      e.t0 = e.catch(1)
                      h = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = i
                      e.t0.errorInfo = h.msg
                      e.t0.code = h.code
                      throw e.t0
                    case 29:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[1, 22]])
            }))(), i, a))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function of(e, t, n, r) {
  return af.apply(this, arguments)
}
function af() {
  return (af = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Xp(t, $$_$$_263.a.QUERY, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var r
              var /* [auto-meaningful-name] */e$sent
              var i
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (r = zp(t), e.prev = 1, r) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return $$_$$_37_111.t(r, n)
                    case 6:
                      e$sent = e.sent
                      return e.abrupt("return", [e$sent])
                    case 10:
                      e.prev = 10
                      e.t0 = e.catch(1)
                      i = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = r
                      e.t0.errorInfo = i.msg
                      e.t0.code = i.code
                      throw e.t0
                    case 17:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[1, 10]])
            }))(), r, o))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function sf(e, t, n) {
  return cf.apply(this, arguments)
}
function cf() {
  return (cf = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Xp(t, $$_$$_263.a.CLEAR, $$_$$_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var /* [auto-meaningful-name] */e$sent
              var o
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (n = zp(t), e.prev = 1, n) {
                        e.next = 4
                        break
                      }
                      throw new Error(JSON.stringify({
                        msg: "未绑定数据源"
                      }))
                    case 4:
                      e.next = 6
                      return $$_$$_37_111.n(n)
                    case 6:
                      e$sent = e.sent
                      sd(n)
                      return e.abrupt("return", [e$sent])
                    case 11:
                      e.prev = 11
                      e.t0 = e.catch(1)
                      o = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = n
                      e.t0.errorInfo = o.msg
                      e.t0.code = o.code
                      throw e.t0
                    case 18:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[1, 11]])
            }))(), n, r))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function lf(e, t) {
  return e ? "number" === t ? Number(e) : "boolean" === t ? "true" === e : e : ""
}
!function (e) {
  e.INSERT_ERROR = "INSERT_ERROR"
  e.COLUMN_CANNOT_FOUND = "COLUMN_CANNOT_FOUND"
  e.TYPE_INVALID = "TYPE_INVALID"
}(Up || (Up = {}))
export { Vp }
export { Qp }
export { Jp }
export { ef }
export { nf }
export { of }
export { sf }
